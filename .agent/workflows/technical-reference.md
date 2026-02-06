# Redmine UI Modernization - Technical Reference

## Project Status: IN PROGRESS

Last Updated: 2026-02-06

## Design System

### Core Colors (Nordic Gray Theme)

```css
/* Primary - Used for header, buttons, dark UI elements */
--color-primary: #222326;  /* Nordic Gray */

/* Accent - Used for links, focus rings, interactive elements */
--color-accent: #3B82F6;   /* Soft Blue */

/* Backgrounds */
--color-bg-primary: #F4F5F8;   /* Mercury White - main page bg */
--color-bg-card: #FFFFFF;       /* Cards, sidebars, modal bg */
--color-bg-muted: #F4F5F8;      /* Issue details, subtle sections */
--color-bg-hover: var(--oc-gray-1); /* ~#f1f3f5 - hover states */
```

### Legacy Colors to Avoid

These colors appear in legacy CSS and should be replaced:
| Legacy Color | Problem | Replacement |
|--------------|---------|-------------|
| `--oc-yellow-0` | Yellow highlight | `--color-bg-muted` |
| `--oc-orange-0/1` | Orange accents | `--color-bg-card` |
| Hard-coded `#fbebc8` | Yellow tint | `var(--oc-gray-0)` |

## CSS Architecture

### Import Order (application.css)
```css
/* 1. Foundation */
@import url('open-color.css');
@import url('_design-tokens.css');
@import url('_modern-reset.css');

/* 2. Layout */
@import url('_modern-layout.css');
@import url('_modern-typography.css');

/* 3. Components */
@import url('_tables.css');
@import url('_forms.css');
@import url('_issues.css');
/* ... other component files ... */

/* 4. Legacy (for compatibility) */
@import url('_legacy-base.css');

/* 5. Final Overrides (MUST be last) */
@import url('_overrides.css');
```

### Key Files and Their Purpose

| File | Purpose | When to Edit |
|------|---------|--------------|
| `_design-tokens.css` | CSS custom properties | Adding new design tokens |
| `_modern-layout.css` | Header, sidebar, footer | Structural layout changes |
| `_forms.css` | Inputs, buttons, form layout | Form element styling |
| `_tables.css` | Data tables | Table appearance |
| `_issues.css` | Issue list, detail, journals | Issue-specific UI |
| `_legacy-base.css` | Legacy Redmine styles | Fixing old yellow/orange |
| `_overrides.css` | Emergency overrides | Last resort with !important |

## Known Issues & Fixes

### Issue: Yellow Background on Issue Detail
**Location**: `_legacy-base.css` line ~1867
**Selector**: `div.issue`
**Fix**:
```css
div.issue {
  background: var(--color-bg-muted, var(--oc-gray-0));
  border-radius: 8px;
  border: 1px solid var(--color-border-default);
}
```

### Issue: Orange Login Form Background
**Location**: `_legacy-base.css` line ~504
**Selector**: `#login-form`
**Fix**:
```css
#login-form {
  background-color: var(--color-bg-card, var(--oc-white));
  border-radius: 12px;
  border: 1px solid var(--color-border-default);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Issue: Yellow Table Row Hover
**Location**: `_legacy-base.css` line ~579
**Selector**: `table.list tbody tr:hover`
**Fix**:
```css
table.list:not(.odd-even) tbody tr:nth-child(odd):hover,
table.list:not(.odd-even) tbody tr:nth-child(even):hover {
  background-color: var(--color-bg-hover, var(--oc-gray-1));
}
```

## Asset Pipeline Notes

### Propshaft (Rails 8.1+)
- Assets are fingerprinted based on content hash
- URL format: `/assets/filename-{hash}.css`
- **Cache Issue**: If CSS changes don't appear, server restart may be needed
- No public/assets directory in development (served dynamically)

### Debugging CSS
```javascript
// Check computed style in browser console
getComputedStyle(document.querySelector('div.issue')).backgroundColor

// Expected: "rgb(244, 245, 248)" for --color-bg-muted
// Problem: "rgb(255, 249, 219)" is yellow (legacy)
```

## Component Patterns

### Cards/Panels
```css
.card, .box, .splitcontent {
  background: var(--color-bg-card);
  border-radius: 12px;
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-sm);
  padding: 16px;
}
```

### Buttons
```css
/* Primary button */
.button, input[type="submit"] {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}

/* Hover state */
.button:hover {
  background-color: var(--oc-gray-8);
}
```

### Form Inputs
```css
input[type="text"], textarea, select {
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 150ms;
}

input:focus, textarea:focus, select:focus {
  border-color: var(--color-accent);
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
```

### Tables
```css
table.list {
  border-collapse: collapse;
  width: 100%;
}

table.list th {
  background: var(--oc-gray-1);
  font-weight: 600;
  text-align: left;
  padding: 12px;
}

table.list td {
  padding: 12px;
  border-bottom: 1px solid var(--color-border-subtle);
}
```

## Pages Verified

### Confirmed Working
- Login page (card styling)
- Home page (header, nav)
- Projects list
- Issues list
- Issue detail (fix applied, cache pending)
- New issue form
- Admin dashboard
- Admin settings
- User management
- Groups
- Roles and Permissions
- System info
- Trackers
- Issue statuses
- Enumerations
- My Account
- Search results
- Gantt chart
- Calendar
- Time entries
- Reports
- Documents
- Roadmap
- Wiki
- Forums

### Need Server Restart
- Issue detail yellow bg
- Login form orange bg
- Table row yellow hover

## Remaining Work

### High Priority
1. Status badges (colored dots for New/In Progress/Closed)
2. Progress bar styling
3. Flash messages styling
4. Tooltip styling
5. Pagination styling

### Medium Priority
6. Modal dialogs
7. Autocomplete dropdowns
8. Date picker calendar
9. File upload area
10. Diff view styling

### Lower Priority
11. Print styles
12. Mobile responsiveness
13. Accessibility improvements
14. Dark mode (future)
