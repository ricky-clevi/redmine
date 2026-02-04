# Redmine UI Modernization - Implementation Plan

## Executive Summary

This document outlines a phased approach to modernizing Redmine's UI. Each phase is designed to be:
- **Independently deployable**: Changes are visible after each phase
- **Non-breaking**: Existing functionality is preserved
- **Testable**: Clear success criteria for each phase
- **Incremental**: Each phase builds on the previous

**Total Estimated Phases**: 8
**Approach**: CSS-first transformation, then template modifications, then JavaScript enhancements

**Architecture Note**:
- `application.css` is a manifest that only contains `@import` statements.
- Legacy Redmine base styles live in `_legacy-base.css` (imported before modern overrides).
- Modern overrides live in `_modern-*.css` files and load after `_legacy-base.css`.

---

## Phase 0: Foundation Setup (PREREQUISITE)
**Goal**: Establish design tokens, development workflow, and base styles

### Tasks

#### 0.1 Create Design Token CSS File
- **File**: `app/assets/stylesheets/_design-tokens.css`
- **Action**: Create new file with all CSS custom properties (colors, spacing, typography, shadows)
- **Reference**: `docs/design/DESIGN-SYSTEM.md`

#### 0.2 Update application.css Import Order
- **File**: `app/assets/stylesheets/application.css`
- **Action**: Add import for `_design-tokens.css` at the top (after open-color.css)
- **Verify**: Page loads without CSS errors

#### 0.3 Add Dark Mode CSS Variables
- **File**: `app/assets/stylesheets/_dark-mode.css`
- **Action**: Create dark mode overrides using `[data-theme="dark"]` selector
- **Verify**: Variables are defined, no visual changes yet

#### 0.4 Create Modern CSS Reset
- **File**: `app/assets/stylesheets/_modern-reset.css`
- **Action**: Add modern CSS reset (box-sizing, margins, etc.)
- **Verify**: No broken layouts

#### 0.5 Extract Legacy Base Styles
- **File**: `app/assets/stylesheets/_legacy-base.css`
- **Action**: Move all existing `application.css` rules (everything after `@import` statements) into `_legacy-base.css`
- **Action**: Convert `application.css` into a manifest that only contains `@import` statements
- **Verify**: Legacy styles still load before modern overrides

### Verification Checklist
- [ ] All design token variables are defined
- [ ] CSS loads without errors
- [ ] No visual regressions from current state
- [ ] Dark mode variables defined (not yet applied)

---

## Phase 1: Global Chrome & Layout
**Goal**: Transform the main application shell (header, sidebar, footer)

### Tasks

#### 1.1 Modernize Top Menu Bar
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#top-menu` styles (lines 77-95)
- **Changes**:
  - Min-height: 36px
  - Background: `var(--color-bg-secondary)`
  - Border-bottom: `1px solid var(--color-border-subtle)`
  - Remove gradient
  - Update link colors to use design tokens

#### 1.2 Redesign Main Header
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#header` styles (lines 97-130)
- **Changes**:
  - Remove gradient background
  - Use solid color: `var(--color-primary-700)`
  - Reduce vertical padding
  - Modernize search box styling
  - Clean up breadcrumbs

#### 1.3 Transform Main Menu Tabs
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#main-menu` styles (lines 123-175)
- **Changes**:
  - Convert from tabs to horizontal links
  - Add hover underline animation
  - Improve spacing and typography
  - Active state indicator

#### 1.4 Redesign Sidebar
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#sidebar` styles (lines 181-210)
- **Changes**:
  - Cleaner background
  - Better typography hierarchy
  - Improved link styles
  - Retain existing collapsible sidebar toggle

#### 1.5 Modernize Footer
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#footer` styles
- **Changes**:
  - Minimal footer design
  - Subdued colors
  - Proper spacing

#### 1.6 Update Base Layout Container
- **File**: `app/assets/stylesheets/_modern-layout.css`
- **Target**: `#wrapper`, `#main`, `#content` styles
- **Changes**:
  - Max-width constraint for readability
  - Better content padding
  - Improved spacing

### Verification Checklist
- [ ] Top bar is redesigned
- [ ] Header uses design tokens
- [ ] Main menu is modernized
- [ ] Sidebar is cleaner
- [ ] Footer is minimal
- [ ] All pages load correctly
- [ ] No broken layouts

---

## Phase 2: Typography & Base Elements
**Goal**: Update all text styles, links, and basic HTML elements

### Tasks

#### 2.1 Heading Styles
- **File**: `app/assets/stylesheets/_modern-typography.css`
- **Target**: `h1` through `h6` styles
- **Changes**:
  - Use design token font sizes
  - Consistent line heights
  - Proper spacing margins
  - Remove border-bottom from h4

#### 2.2 Body Text & Paragraphs
- **Changes**:
  - Base font-size: 14px (0.875rem)
  - Line-height: 1.5
  - Color: `var(--color-text-primary)`

#### 2.3 Link Styles
- **Changes**:
  - Color: `var(--color-primary-600)`
  - Underline on hover only
  - Focus visible styles

#### 2.4 Lists (ul, ol)
- **Changes**:
  - Proper spacing
  - Custom bullet/number styling

#### 2.5 Code & Preformatted Text
- **Changes**:
  - Monospace font from design tokens
  - Background color for inline code
  - Better code block styling

#### 2.6 Table Base Styles
- **Changes**:
  - Clean borders
  - Header styling
  - Row hover state
  - Zebra striping option

### Verification Checklist
- [ ] All headings use new styles
- [ ] Body text is readable
- [ ] Links are properly styled
- [ ] Tables look modern
- [ ] Code blocks are styled

---

## Phase 3: Buttons & Form Controls
**Goal**: Completely redesign all interactive form elements

### Tasks

#### 3.1 Primary Button Styles
- **Create**: `.btn` base class, `.btn--primary` modifier
- **Properties**:
  - Height: 36px
  - Padding: 0 16px
  - Border-radius: 6px
  - Background: `var(--color-primary-600)`
  - Hover/Active states

#### 3.2 Secondary Button Styles
- **Create**: `.btn--secondary` modifier
- **Properties**:
  - Border: 1px solid
  - Background: transparent
  - Hover state

#### 3.3 Button Sizes
- **Create**: `.btn--sm`, `.btn--lg` modifiers

#### 3.4 Icon Buttons
- **Create**: `.btn--icon` for icon-only buttons

#### 3.5 Text Input Fields
- **Target**: `input[type="text"]`, `input[type="email"]`, etc.
- **Properties**:
  - Height: 36px
  - Border: 1px solid `var(--color-border-default)`
  - Border-radius: 6px
  - Focus ring

#### 3.6 Textarea
- **Similar updates to text inputs**

#### 3.7 Select Dropdowns
- **Custom select styling**
- **Properties**:
  - Match input height
  - Custom arrow
  - Focus state

#### 3.8 Checkboxes & Radio Buttons
- **Custom styling for checkboxes and radios**
- **Properties**:
  - Larger hit area
  - Custom checked state
  - Focus visible

#### 3.9 Form Field Layout
- **Create**: `.form-field` container class
- **Properties**:
  - Label styling
  - Input below label
  - Helper text
  - Error states

### Verification Checklist
- [ ] All buttons use new styles
- [ ] Inputs have consistent styling
- [ ] Selects are styled
- [ ] Checkboxes/radios are custom
- [ ] Form layouts are clean
- [ ] Focus states work
- [ ] Forms function correctly

---

## Phase 4: Issue List & Issue Detail Views
**Goal**: Transform the most-used views - issue lists and issue details

### Tasks

#### 4.1 Issue List Table
- **File**: `app/assets/stylesheets/_issues.css` (CSS only)
- **Changes**:
  - Cleaner table design
  - Compact rows
  - Status badges with colors
  - Priority indicators
  - Hover row highlight

#### 4.2 Issue List Filters
- **Changes**:
  - Filter bar redesign
  - Pill-style active filters
  - Clear filters button

#### 4.3 Issue Status Badges
- **Create**: `.status-badge` component
- **Variants**: New, In Progress, Resolved, Closed, etc.
- **Properties**:
  - Pill shape
  - Color-coded
  - Small text

#### 4.4 Priority Badges
- **Create**: `.priority-badge` component
- **Variants**: Low, Normal, High, Urgent, Immediate
- **Color coding**

#### 4.5 Issue Detail Header
- **File**: `app/assets/stylesheets/_issues.css` (CSS only)
- **Changes**:
  - Clean header layout
  - Status/Priority prominent
  - Action buttons grouped

#### 4.6 Issue Detail Properties
- **Changes**:
  - Two-column layout
  - Clean label/value pairs
  - Editable inline (future)

#### 4.7 Issue Description Area
- **Changes**:
  - Clear typography
  - Proper Markdown/Textile rendering
  - Image handling

#### 4.8 Issue History/Journal
- **Changes**:
  - Timeline design
  - Comment bubbles
  - Change indicators

### Verification Checklist
- [ ] Issue list is redesigned
- [ ] Filters are usable
- [ ] Status badges work
- [ ] Issue detail is clean
- [ ] History is readable
- [ ] All functionality preserved

---

## Phase 5: Project Views & Navigation
**Goal**: Modernize project listing, overview, and navigation

### Tasks

#### 5.1 Project List/Grid
- **Changes**:
  - Card-based layout option
  - Project icons
  - Progress indicators

#### 5.2 Project Overview Page
- **Changes**:
  - Dashboard-style layout
  - Key metrics visible
  - Recent activity

#### 5.3 Project Sidebar Menu
- **Changes**:
  - Clean navigation
  - Icons for each section
  - Active state

#### 5.4 Project Settings Layout
- **Changes**:
  - Tab navigation
  - Form layouts
  - CSS-only updates in `_projects.css`

#### 5.5 Project Jump Box
- **Changes**:
  - Autocomplete redesign
  - Better UX
  - CSS-only updates in `_projects.css`

### Verification Checklist
- [ ] Project list is modern
- [ ] Project overview is dashboard-like
- [ ] Navigation is intuitive
- [ ] Settings are organized

---

## Phase 6: Secondary Views & Components
**Goal**: Update remaining views (wiki, files, time tracking, etc.)

### Tasks

#### 6.1 Wiki Pages
- **File**: `app/assets/stylesheets/_secondary-views.css`
- **Typography updates**
- **Table of contents styling**
- **Edit mode improvements**

#### 6.2 Files/Documents View
- **File**: `app/assets/stylesheets/_secondary-views.css`
- **File list redesign**
- **Upload interface**
- **File type icons**

#### 6.3 Time Tracking
- **File**: `app/assets/stylesheets/_secondary-views.css`
- **Time log table**
- **Time entry form**

#### 6.4 Calendar View
- **File**: `app/assets/stylesheets/_secondary-views.css`
- **Modern calendar styling**
- **Event indicators**

#### 6.5 Gantt Chart
- **File**: `app/assets/stylesheets/gantt.css`
- **Cleaner bars**
- **Better colors**
- **Improved readability**

#### 6.6 Repository Browser
- **File**: `app/assets/stylesheets/scm.css`
- **File tree styling**
- **Diff view improvements**
- **Commit history**

### Verification Checklist
- [ ] Wiki is styled
- [ ] Files view is modern
- [ ] Time tracking is clean
- [ ] Calendar is updated
- [ ] Gantt is readable
- [ ] Repository view works

---

## Phase 7: Dark Mode & Theme Toggle
**Goal**: Implement full dark mode support

### Tasks

#### 7.1 Add Theme Toggle UI
- **Location**: `app/views/layouts/base.html.erb` (top bar)
- **Functionality**: Toggle between light/dark

#### 7.2 JavaScript Theme Handler
- **File**: `app/javascript/theme_toggle.js`
- **Features**:
  - Save preference to localStorage
  - Respect system preference
  - Toggle data-theme attribute

#### 7.3 Apply Dark Mode Styles
- **File**: `app/assets/stylesheets/_dark-mode.css`
- **Apply all dark mode overrides**

#### 7.4 Test All Components in Dark Mode
- **Verify all components look correct**

### Verification Checklist
- [ ] Theme toggle works
- [ ] Preference is saved
- [ ] System preference respected
- [ ] All components work in dark mode
- [ ] No contrast issues

---

## Phase 8: Polish & Performance
**Goal**: Final refinements, animations, and performance optimization

### Tasks

#### 8.1 Add Subtle Animations
- **Transitions on hovers**
- **Page transitions**
- **Modal animations**

#### 8.2 Loading States
- **Skeleton loaders**
- **Button loading states**

#### 8.3 Performance Audit
- **CSS optimization**
- **Remove unused styles**
- **Lighthouse testing**

#### 8.4 Accessibility Audit
- **axe DevTools testing**
- **Keyboard navigation**
- **Screen reader testing**

#### 8.5 Browser Testing
- **Chrome, Firefox, Safari, Edge**
- **Mobile browsers**

#### 8.6 Documentation Update
- **Component documentation**
- **Style guide page**

### Verification Checklist
- [ ] Animations are smooth
- [ ] Loading states work
- [ ] Lighthouse score > 80
- [ ] No accessibility issues
- [ ] Works in all browsers
- [ ] Documentation complete

---

## Implementation Order Summary

1. Phase 0: Foundation Setup
2. Phase 1: Global Chrome & Layout
3. Phase 2: Typography & Base Elements
4. Phase 3: Buttons & Form Controls
5. Phase 4: Issue List & Issue Detail Views
6. Phase 5: Project Views & Navigation
7. Phase 6: Secondary Views & Components
8. Phase 7: Dark Mode & Theme Toggle
9. Phase 8: Polish & Performance

Each phase MUST be completed and verified before moving to the next.
