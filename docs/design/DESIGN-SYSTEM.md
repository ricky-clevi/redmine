# Redmine Modern Design System

## Overview

This document defines the design system for the modernized Redmine UI. All components, patterns, and visual styles should adhere to these specifications.

## Design Philosophy

### Core Principles

1. **Speed & Efficiency**: Every interaction should feel instant and purposeful
2. **Clarity Over Decoration**: Remove unnecessary visual elements
3. **Consistency**: Same patterns throughout the application
4. **Accessibility First**: WCAG 2.1 AA minimum compliance
5. **Progressive Enhancement**: Works without JavaScript, enhanced with it

### Inspiration Sources

| Application | Key Learnings |
|-------------|---------------|
| Linear | Command palette, keyboard-first, minimal chrome |
| Asana | Sidebar navigation, task detail pane, project structure |
| Jira | Board views, issue states, sprint management |
| Height | Clean typography, subtle animations, dark mode |
| Notion | Content blocks, inline editing, flexible views |

---

## Design Tokens

### Colors

```css
:root {
  /* Primary - Blue */
  --color-primary-50: var(--oc-blue-0);
  --color-primary-100: var(--oc-blue-1);
  --color-primary-200: var(--oc-blue-2);
  --color-primary-300: var(--oc-blue-3);
  --color-primary-400: var(--oc-blue-4);
  --color-primary-500: var(--oc-blue-5);
  --color-primary-600: var(--oc-blue-6);
  --color-primary-700: var(--oc-blue-7);
  --color-primary-800: var(--oc-blue-8);
  --color-primary-900: var(--oc-blue-9);

  /* Neutral - Gray */
  --color-neutral-0: var(--oc-white);
  --color-neutral-50: var(--oc-gray-0);
  --color-neutral-100: var(--oc-gray-1);
  --color-neutral-200: var(--oc-gray-2);
  --color-neutral-300: var(--oc-gray-3);
  --color-neutral-400: var(--oc-gray-4);
  --color-neutral-500: var(--oc-gray-5);
  --color-neutral-600: var(--oc-gray-6);
  --color-neutral-700: var(--oc-gray-7);
  --color-neutral-800: var(--oc-gray-8);
  --color-neutral-900: var(--oc-gray-9);

  /* Success - Green */
  --color-success-500: var(--oc-green-5);
  --color-success-600: var(--oc-green-6);
  --color-success-700: var(--oc-green-7);

  /* Warning - Yellow */
  --color-warning-500: var(--oc-yellow-5);
  --color-warning-600: var(--oc-yellow-6);
  --color-warning-700: var(--oc-yellow-7);

  /* Danger - Red */
  --color-danger-500: var(--oc-red-5);
  --color-danger-600: var(--oc-red-6);
  --color-danger-700: var(--oc-red-7);

  /* Semantic Colors */
  --color-text-primary: var(--oc-gray-9);
  --color-text-secondary: var(--oc-gray-6);
  --color-text-muted: var(--oc-gray-5);
  --color-text-inverse: var(--oc-white);
  
  --color-bg-primary: var(--oc-white);
  --color-bg-secondary: var(--oc-gray-0);
  --color-bg-tertiary: var(--oc-gray-1);
  
  --color-border-default: var(--oc-gray-3);
  --color-border-subtle: var(--oc-gray-2);
  --color-border-strong: var(--oc-gray-4);
}
```

### Dark Mode Colors

```css
[data-theme="dark"] {
  --color-text-primary: var(--oc-gray-1);
  --color-text-secondary: var(--oc-gray-4);
  --color-text-muted: var(--oc-gray-5);
  --color-text-inverse: var(--oc-gray-9);
  
  --color-bg-primary: var(--oc-gray-9);
  --color-bg-secondary: var(--oc-gray-8);
  --color-bg-tertiary: var(--oc-gray-7);
  
  --color-border-default: var(--oc-gray-7);
  --color-border-subtle: var(--oc-gray-8);
  --color-border-strong: var(--oc-gray-6);
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-sans: "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", Consolas, "Liberation Mono", Courier, monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 2rem;        /* 32px */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Spacing

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

### Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-full: 9999px;
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Transitions

```css
:root {
  --transition-fast: 100ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## Component Library

### Buttons

#### Primary Button
```html
<button class="btn btn--primary">
  <span class="btn__label">Create Issue</span>
</button>
```

#### Secondary Button
```html
<button class="btn btn--secondary">
  <span class="btn__label">Cancel</span>
</button>
```

#### Button Sizes
- `.btn--sm`: Small (height: 28px)
- `.btn--md`: Medium (height: 36px, default)
- `.btn--lg`: Large (height: 44px)

### Theme Toggle

```html
<button type="button" data-theme-toggle aria-label="Toggle theme" aria-pressed="false">
  <span data-theme-icon="light" aria-hidden="true">Light</span>
  <span data-theme-icon="dark" aria-hidden="true">Dark</span>
</button>
```

### Form Inputs

```html
<div class="form-field">
  <label class="form-field__label" for="title">Issue Title</label>
  <input class="form-field__input" type="text" id="title" name="title">
  <span class="form-field__hint">Enter a descriptive title</span>
</div>
```

### Cards

```html
<article class="card">
  <header class="card__header">
    <h3 class="card__title">Project Name</h3>
  </header>
  <div class="card__body">
    <!-- Content -->
  </div>
  <footer class="card__footer">
    <!-- Actions -->
  </footer>
</article>
```

### Issue Item

```html
<article class="issue-item" data-issue-id="123">
  <div class="issue-item__status">
    <span class="status-badge status-badge--open">Open</span>
  </div>
  <div class="issue-item__content">
    <a href="#" class="issue-item__id">#123</a>
    <h4 class="issue-item__title">Issue title goes here</h4>
    <div class="issue-item__meta">
      <span class="issue-item__project">Project Name</span>
      <span class="issue-item__assignee">@username</span>
    </div>
  </div>
  <div class="issue-item__actions">
    <!-- Action buttons -->
  </div>
</article>
```

---

## Layout Patterns

### Main Application Layout

Layout zones:
- Top bar spans full width
- Sidebar on the left (fixed width)
- Main content in the center (fluid)
- Optional details pane on the right (fixed width)

### Sidebar Navigation

- Fixed width: 240px (collapsible to 64px icons-only)
- Contains: Logo, navigation links, project switcher, user menu
- Sticky positioning, full height

### Top Bar

- Height: 48px
- Contains: Breadcrumbs, search, quick actions, notifications

### Details Pane

- Width: 400px (resizable)
- Shows issue/task details without full page navigation
- Slide-in animation from right

---

## Interaction Patterns

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `c` | Create new issue |
| `p` | Go to projects |
| `i` | Go to issues |
| `/` or `Cmd+K` | Open command palette |
| `?` | Show keyboard shortcuts |
| `esc` | Close modal/panel |

### Loading States

1. **Skeleton loaders** for content areas
2. **Inline spinners** for buttons
3. **Progress bars** for file uploads
4. **Optimistic updates** where possible

### Notifications

1. **Toast notifications** for quick feedback (auto-dismiss)
2. **Inline errors** for form validation
3. **Banner alerts** for system-wide notices

---

## Accessibility Requirements

### Minimum Requirements

1. All interactive elements must be keyboard accessible
2. Focus states must be visible
3. Color contrast ratio: 4.5:1 for text, 3:1 for UI components
4. All images must have alt text
5. Form inputs must have labels
6. Error messages must be associated with inputs

### ARIA Usage

```html
<!-- Example: Modal Dialog -->
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Title</h2>
  <!-- content -->
</div>

<!-- Example: Status Badge -->
<span class="status-badge" role="status" aria-label="Issue status: Open">
  Open
</span>
```

---

## File Naming Conventions

### CSS Files
- `_variables.css` - Design tokens
- `_reset.css` - CSS reset
- `_typography.css` - Text styles
- `_buttons.css` - Button components
- `_forms.css` - Form elements
- `_cards.css` - Card components
- `_layout.css` - Layout utilities
- `_sidebar.css` - Sidebar styles
- `_issues.css` - Issue-specific styles
- `_projects.css` - Project-specific styles
- `_dark-mode.css` - Dark mode overrides

### JavaScript Files
- `main.js` - Application entry point
- `sidebar.js` - Sidebar interactions
- `command-palette.js` - Command palette
- `keyboard-shortcuts.js` - Shortcut handling
- `theme-toggle.js` - Theme switching
