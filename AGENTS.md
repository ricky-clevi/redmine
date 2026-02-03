# Redmine UI Modernization Project - Agent Guidelines

## Project Overview

This project aims to transform Redmine's dated UI into a modern, sleek project management interface comparable to Linear, Asana, or Jira. The goal is to maintain full backward compatibility with Redmine's backend while completely overhauling the frontend experience.

## Repository Structure

```
redmine/
├── app/
│   ├── assets/
│   │   ├── stylesheets/     # CSS files - PRIMARY MODIFICATION TARGET
│   │   ├── javascripts/     # JS files - SECONDARY TARGET
│   │   └── images/          # Static images
│   ├── views/               # ERB templates - MAJOR MODIFICATION TARGET
│   │   ├── layouts/         # Main layout templates
│   │   ├── issues/          # Issue views
│   │   ├── projects/        # Project views
│   │   └── ...
│   └── helpers/             # View helpers
├── public/
│   └── themes/              # Custom themes (mounted in Docker)
├── docs/                    # Our documentation
│   ├── specs/               # Feature specifications
│   ├── design/              # Design system docs
│   └── phases/              # Phase-specific docs
└── themes/                  # Theme directory
```

## Technology Stack

- **Backend**: Ruby on Rails (DO NOT MODIFY unless necessary for UI)
- **Frontend**: ERB templates, vanilla CSS, vanilla JavaScript
- **Database**: PostgreSQL (via Docker)
- **Asset Pipeline**: Rails Asset Pipeline with Sprockets

## Development Environment

### Running the Application
```bash
docker compose up -d        # Start Redmine at http://localhost:8080
docker compose down         # Stop Redmine
docker compose logs -f      # View logs
```

### Default Credentials
- **URL**: http://localhost:8080
- **Username**: admin
- **Password**: admin

## Code Conventions

### CSS/Styling
1. Use CSS custom properties (variables) for all colors, spacing, typography
2. Follow BEM naming convention for new classes: `.block__element--modifier`
3. Maintain the existing Open Color palette (`open-color.css`) but extend with new variables
4. All new styles go in dedicated files, imported into `application.css`
5. Use `rem` units for sizing, never `px` for font sizes
6. Mobile-first responsive design using `min-width` media queries

### HTML/ERB Templates
1. Use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, etc.)
2. Add ARIA attributes for accessibility
3. Prefer `data-*` attributes for JavaScript hooks over classes
4. Keep templates modular - use partials for reusable components

### JavaScript
1. Use ES6+ syntax (modules, arrow functions, template literals)
2. No jQuery for new code (existing jQuery can remain)
3. Use `data-*` attributes for DOM selection, not classes
4. Event delegation preferred over direct binding
5. All new JS goes in `app/javascript/` using import maps

## Design System Principles

### Visual Design
1. **Clean & Minimal**: Reduce visual clutter, embrace whitespace
2. **Consistent**: Use design tokens for all visual properties
3. **Accessible**: WCAG 2.1 AA compliance minimum
4. **Responsive**: Works on desktop (primary), tablet, mobile

### Color Palette (extend existing Open Color)
- Primary: Blue shades (actions, links, primary buttons)
- Success: Green shades (completed, positive states)
- Warning: Yellow/Orange shades (attention needed)
- Danger: Red shades (errors, destructive actions)
- Neutral: Gray shades (text, borders, backgrounds)

### Typography
- Font Family: "Noto Sans" (already in use), with system font fallback
- Sizes: Use a type scale (0.75rem, 0.875rem, 1rem, 1.125rem, 1.25rem, 1.5rem, 2rem)
- Line heights: 1.2 for headings, 1.5 for body text

### Spacing
- Use 4px base unit: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Shadows
- Use subtle shadows for elevation
- Three levels: low (cards), medium (dropdowns), high (modals)

## Constraints & Rules

### DO NOT
- Modify Ruby controller logic unless absolutely necessary
- Change database schema
- Break existing functionality
- Remove features (even if dated)
- Use external CSS frameworks (Bootstrap, Tailwind) - use custom CSS
- Use React/Vue/Angular - keep vanilla JS
- Modify gem dependencies unless required for UI

### MUST DO
- Maintain all existing URLs/routes
- Keep backward compatibility with existing themes/plugins
- Test in both light and dark mode (implement dark mode)
- Ensure keyboard navigation works
- Add loading states for async operations
- Support RTL languages (existing support must be maintained)

## Testing Requirements

1. Visual regression testing after each phase
2. Manual testing on Chrome, Firefox, Safari, Edge
3. Mobile testing on iOS Safari and Android Chrome
4. Accessibility testing with axe DevTools
5. Performance testing (Lighthouse scores)

## Git Workflow

1. Work in feature branches: `feature/phase-X-description`
2. Commit messages: `[Phase X] Brief description of change`
3. Small, focused commits
4. Test before each commit

## Reference Applications

Study these for UI/UX inspiration:
- **Linear** (linear.app): Speed, keyboard shortcuts, minimal design
- **Asana** (asana.com): Sidebar navigation, task details pane
- **Jira** (atlassian.com/jira): Board views, issue organization
- **Height** (height.app): Clean aesthetics, dark mode
- **Plane** (plane.so): Open source, modern design

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance Score: > 80
- CSS bundle size: < 100KB gzipped
- JS bundle size: < 150KB gzipped

## Documentation Requirements

Each phase must include:
1. Updated design tokens if changed
2. Component documentation in `/docs/design/`
3. Screenshots of before/after
4. List of modified files
5. Any new CSS classes added
