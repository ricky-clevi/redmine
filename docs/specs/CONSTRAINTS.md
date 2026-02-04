# Redmine UI Modernization - Constraints & Rules

This document defines the hard constraints and rules that MUST be followed during the UI modernization project. Violation of these constraints may break the application or cause regression.

---

## 1. Backend Constraints

### 1.1 DO NOT Modify

| Item | Reason |
|------|--------|
| Ruby controllers (`app/controllers/`) | Backend logic must remain unchanged |
| Ruby models (`app/models/`) | Data models are not part of UI redesign |
| Database migrations (`db/migrate/`) | Schema changes are out of scope |
| Gemfile dependencies | Avoid adding new Ruby gems |
| Route configuration (`config/routes.rb`) | URLs must remain stable |
| Mailer templates (`app/views/mailer/`) | Email formatting is separate |
| API endpoints | API responses must not change |

### 1.2 Exceptions
- View helpers (`app/helpers/`) MAY be modified to add new CSS classes
- Localization files (`config/locales/`) MAY be modified to add new strings

---

## 2. Frontend Constraints

### 2.1 Technology Stack

| Rule | Details |
|------|---------|
| **No external CSS frameworks** | Do NOT use Bootstrap, Tailwind, Bulma, or any external CSS framework |
| **No JavaScript frameworks** | Do NOT use React, Vue, Angular, Svelte, or any frontend framework |
| **Vanilla JavaScript only** | Use ES6+ JavaScript, no TypeScript |
| **No build tools** | No Webpack, Vite, or custom build pipelines - use Rails Asset Pipeline |
| **Keep existing jQuery** | Existing jQuery code may remain; do not add new jQuery |

### 2.2 CSS Rules

| Rule | Details |
|------|---------|
| Use CSS custom properties | All colors, spacing, typography via variables |
| BEM naming for new classes | `.block__element--modifier` convention |
| No `!important` | Avoid importance overrides except for legacy fixes |
| No inline styles | All styles in CSS files |
| rem units for font sizes | Never use px for font sizes |
| Logical properties preferred | Use `margin-inline-start` instead of `margin-left` |
| application.css is a manifest | Do not add style rules to `application.css` |

### 2.3 JavaScript Rules

| Rule | Details |
|------|---------|
| ES6+ syntax | Use modules, arrow functions, template literals |
| Data attributes for DOM selection | Use `data-*` attributes, not classes |
| Event delegation | Prefer delegated events for dynamic content |
| No global scope pollution | Use modules or IIFE |
| Graceful degradation | UI should work without JavaScript |

---

## 3. Compatibility Constraints

### 3.1 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Chrome Android | 90+ |

### 3.2 Backward Compatibility

| Item | Requirement |
|------|-------------|
| Existing themes | Must continue to work (themes directory) |
| Existing plugins | Must not break plugin UI hooks |
| Custom fields | Custom field rendering must work |
| Localization | All 40+ languages must work |
| RTL languages | Arabic, Hebrew, etc. must display correctly |

### 3.3 URL Stability

- All existing URLs MUST continue to work
- No routes may be removed or renamed
- Deep links to issues, projects, etc. must work

---

## 4. Accessibility Constraints

### 4.1 WCAG 2.1 AA Compliance (Minimum)

| Requirement | Standard |
|-------------|----------|
| Color contrast (text) | 4.5:1 minimum |
| Color contrast (UI) | 3:1 minimum |
| Focus indicators | Visible on all interactive elements |
| Keyboard navigation | All functions keyboard accessible |
| Screen reader support | Proper ARIA labels and roles |
| Form labels | All inputs must have labels |
| Error identification | Errors must be described in text |

### 4.2 Specific Requirements

- No information conveyed by color alone
- No content that flashes more than 3 times per second
- Skip navigation link for keyboard users
- Logical heading hierarchy (h1 -> h2 -> h3)

---

## 5. Performance Constraints

### 5.1 Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5 seconds |
| Time to Interactive | < 3 seconds |
| Lighthouse Performance | > 80 score |
| CSS bundle (gzipped) | < 100KB |
| JS bundle (gzipped) | < 150KB |

### 5.2 Rules

- No render-blocking JavaScript in `<head>`
- Critical CSS should be minimal
- Images must have width/height to prevent layout shift
- Avoid excessive DOM depth (< 32 levels)

---

## 6. File Organization Constraints

### 6.1 CSS Files

| Location | Purpose |
|----------|---------|
| `app/assets/stylesheets/_design-tokens.css` | Design token variables |
| `app/assets/stylesheets/_modern-reset.css` | CSS reset |
| `app/assets/stylesheets/_legacy-base.css` | Legacy Redmine base styles (do not edit) |
| `app/assets/stylesheets/_buttons.css` | Button styles |
| `app/assets/stylesheets/_forms.css` | Form element styles |
| `app/assets/stylesheets/_issues.css` | Issue-specific styles |
| `app/assets/stylesheets/_projects.css` | Project-specific styles |
| `app/assets/stylesheets/_dark-mode.css` | Dark mode overrides |
| `app/assets/stylesheets/application.css` | Main stylesheet (imports others) |

### 6.2 JavaScript Files

| Location | Purpose |
|----------|---------|
| `app/javascript/` | New JavaScript modules |
| `app/javascript/application.js` | Entry point |

### 6.3 Template Files

| Location | Purpose |
|----------|---------|
| `app/views/layouts/base.html.erb` | Main layout template |
| `app/views/issues/` | Issue-related templates |
| `app/views/projects/` | Project-related templates |

---

## 7. Testing Constraints

### 7.1 Required Testing

| Type | Requirement |
|------|-------------|
| Visual regression | Before/after screenshots for each phase |
| Functional testing | All features must work after changes |
| Browser testing | Chrome, Firefox, Safari, Edge |
| Mobile testing | iOS Safari, Chrome Android |
| Accessibility testing | axe DevTools audit |
| Dark mode testing | All components in both themes |

### 7.2 Testing Checklist per Phase

Before marking any phase complete:
- [ ] All pages load without errors
- [ ] No JavaScript console errors
- [ ] No broken layouts
- [ ] No accessibility regressions
- [ ] Works in Chrome and Firefox
- [ ] Dark mode works (after Phase 7)

---

## 8. Git Constraints

### 8.1 Commit Messages

Format: `[Phase X] Brief description`

Examples:
- `[Phase 1] Redesign top menu bar`
- `[Phase 3] Add primary button styles`
- `[Phase 7] Implement dark mode toggle`

### 8.2 Branch Naming

Format: `feature/phase-X-description`

Examples:
- `feature/phase-1-global-layout`
- `feature/phase-3-form-controls`

### 8.3 Rules

- Small, focused commits (< 300 lines changed per commit preferred)
- Test before each commit
- No force pushes to main/master
- Review changes before merging

---

## 9. Documentation Constraints

### 9.1 Required Documentation

Each phase must update:
- [ ] `docs/phases/PHASE-X-COMPLETE.md` with summary
- [ ] `docs/design/DESIGN-SYSTEM.md` if tokens changed
- [ ] `docs/TASK-LIST.md` with status updates

### 9.2 Code Comments

- No comments explaining "what" (code should be self-documenting)
- Comments allowed for "why" (non-obvious decisions)
- JSDoc for public JavaScript functions

---

## 10. Specific Do's and Don'ts

### DO

- Use semantic HTML (`<article>`, `<section>`, `<nav>`)
- Use CSS Grid and Flexbox for layouts
- Add `aria-*` attributes for accessibility
- Test changes in multiple browsers
- Keep changes incremental and reviewable
- Maintain existing functionality
- Use design tokens for all values
- Add focus styles to interactive elements
- Support keyboard navigation
- Write maintainable, clean CSS

### DON'T

- Remove existing features
- Break existing URLs
- Use px for font sizes
- Add external dependencies
- Modify Ruby backend code
- Use inline styles
- Use `!important` (except legacy or accessibility overrides)
- Hardcode colors (use variables)
- Ignore accessibility
- Make large, unreviewed changes
- Skip testing

---

## 11. Emergency Rollback Procedure

If changes break the application:

1. **Revert the last commit**: `git revert HEAD`
2. **Check Docker container**: `docker compose logs -f`
3. **Clear Rails asset cache**: (inside container) `rails tmp:cache:clear`
4. **Restart containers**: `docker compose restart`
5. **Document the issue** in `docs/issues/`

---

## Acknowledgment

All agents working on this project MUST read and understand these constraints before making any changes. Violations should be immediately corrected.
