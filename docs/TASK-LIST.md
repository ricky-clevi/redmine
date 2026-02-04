# Redmine UI Modernization - Detailed Task List

This document contains the complete, non-ambiguous task list for the UI modernization project. Each task is atomic, testable, and has clear acceptance criteria.

---

## Legend

- **Status**: `[ ]` = Not Started, `[P]` = In Progress, `[X]` = Complete
- **Priority**: `P1` = Critical, `P2` = High, `P3` = Medium, `P4` = Low
- **Effort**: `S` = Small (< 1 hour), `M` = Medium (1-4 hours), `L` = Large (4-8 hours), `XL` = Extra Large (> 8 hours)

## File Mapping (Source of Truth)

- Phase 0: `_design-tokens.css`, `_modern-reset.css`, `_dark-mode.css`, `_legacy-base.css`, `application.css`
- Phase 1: `_modern-layout.css`
- Phase 2: `_modern-typography.css`
- Phase 3: `_buttons.css`, `_forms.css`
- Phase 4: `_issues.css`
- Phase 5: `_projects.css`
- Phase 6: `_secondary-views.css` (except Gantt in `gantt.css` and repository views in `scm.css`)
- Phase 7: `app/views/layouts/base.html.erb`, `app/javascript/theme_toggle.js`, `_dark-mode.css`
- Phase 8: `_polish.css`

Note: `application.css` is a manifest only and should not contain style rules.

---

## PHASE 0: Foundation Setup

### 0.1 Design Token CSS File
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 0.1.1 | Create `_design-tokens.css` file in `app/assets/stylesheets/` | `_design-tokens.css` | P1 | M | [X] |
| 0.1.2 | Add color CSS variables (primary, neutral, success, warning, danger) | `_design-tokens.css` | P1 | S | [X] |
| 0.1.3 | Add typography CSS variables (font-family, font-sizes, font-weights, line-heights) | `_design-tokens.css` | P1 | S | [X] |
| 0.1.4 | Add spacing CSS variables (space-1 through space-16) | `_design-tokens.css` | P1 | S | [X] |
| 0.1.5 | Add border-radius CSS variables (radius-none through radius-full) | `_design-tokens.css` | P1 | S | [X] |
| 0.1.6 | Add shadow CSS variables (shadow-sm through shadow-xl) | `_design-tokens.css` | P1 | S | [X] |
| 0.1.7 | Add transition CSS variables (transition-fast, transition-normal, transition-slow) | `_design-tokens.css` | P1 | S | [X] |

**Acceptance Criteria:**
- All variables from `docs/design/DESIGN-SYSTEM.md` are defined
- File has no syntax errors
- Variables use `--` prefix

### 0.2 Application CSS Update
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 0.2.1 | Add `@import url('/_design-tokens.css');` as second import (after open-color.css) in `application.css` | `application.css` | P1 | S | [X] |
| 0.2.2 | Verify page loads without CSS errors in browser console | - | P1 | S | [ ] |

**Acceptance Criteria:**
- Import statement added at line 8 (after open-color import)
- Browser console shows no CSS errors
- Page renders correctly

### 0.3 Dark Mode CSS Foundation
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 0.3.1 | Create `_dark-mode.css` file in `app/assets/stylesheets/` | `_dark-mode.css` | P1 | S | [X] |
| 0.3.2 | Add `[data-theme="dark"]` selector block with inverted semantic color variables | `_dark-mode.css` | P1 | M | [X] |
| 0.3.3 | Add import for `_dark-mode.css` in `application.css` (after design tokens) | `application.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Dark mode file created
- Variables defined for dark theme
- Import added
- No visual changes yet (dark mode not applied)

### 0.4 Modern CSS Reset
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 0.4.1 | Create `_modern-reset.css` with box-sizing: border-box on all elements | `_modern-reset.css` | P2 | S | [X] |
| 0.4.2 | Add margin: 0 for body, h1-h6, p, ul, ol | `_modern-reset.css` | P2 | S | [X] |
| 0.4.3 | Add list-style: none for ul, ol where class is applied | `_modern-reset.css` | P2 | S | [X] |
| 0.4.4 | Add import for `_modern-reset.css` in `application.css` | `application.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Reset file created
- Import added
- Layouts not broken

### 0.5 Legacy Base Extraction
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 0.5.1 | Create `_legacy-base.css` and move all existing `application.css` rules into it | `_legacy-base.css` | P1 | M | [X] |
| 0.5.2 | Convert `application.css` into a manifest with only `@import` statements | `application.css` | P1 | S | [X] |
| 0.5.3 | Ensure `_legacy-base.css` is imported before `_modern-*.css` files | `application.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Legacy styles load before modern overrides
- No visual regressions from lost base styles

---

## PHASE 1: Global Chrome & Layout

### 1.1 Top Menu Bar Redesign
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.1.1 | Change `#top-menu` background from `#3E5B76` to `var(--color-bg-secondary)` | `_modern-layout.css:78` | P1 | S | [X] |
| 1.1.2 | Change `#top-menu` color from `var(--oc-white)` to `var(--color-text-primary)` | `_modern-layout.css:79` | P1 | S | [X] |
| 1.1.3 | Set `#top-menu` min-height to 36px | `_modern-layout.css:77-83` | P1 | S | [X] |
| 1.1.4 | Add `border-bottom: 1px solid var(--color-border-subtle)` to `#top-menu` | `_modern-layout.css` | P1 | S | [X] |
| 1.1.5 | Update `#top-menu a` color to `var(--color-text-secondary)` | `_modern-layout.css:92` | P1 | S | [X] |
| 1.1.6 | Add hover state to `#top-menu a` with background `var(--color-bg-hover)` and text `var(--color-text-primary)` | `_modern-layout.css` | P2 | S | [X] |
| 1.1.7 | Update `#loggedas` color to `var(--color-text-muted)` | `_modern-layout.css:93` | P2 | S | [X] |

**Acceptance Criteria:**
- Top menu has light background
- Text is dark
- Border separates from header
- Hover states work

### 1.2 Main Header Redesign
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.2.1 | Remove `background: linear-gradient(...)` from `#header` | `_modern-layout.css:100` | P1 | S | [X] |
| 1.2.2 | Add `background: var(--color-primary-700)` to `#header` | `_modern-layout.css` | P1 | S | [X] |
| 1.2.3 | Reduce `#header` vertical padding to `var(--space-3)` / `var(--space-10)` | `_modern-layout.css:98` | P1 | S | [X] |
| 1.2.4 | Add `box-shadow: var(--shadow-sm)` to `#header` | `_modern-layout.css` | P2 | S | [X] |
| 1.2.5 | Update `#header h1` font-size to `var(--text-xl)` | `_modern-layout.css:107` | P2 | S | [X] |
| 1.2.6 | Style `#quick-search #q` with new design tokens | `_modern-layout.css:111-117` | P2 | S | [X] |

**Acceptance Criteria:**
- Header has solid color (no gradient)
- Header is shorter
- Typography is updated
- Search input styled

### 1.3 Main Menu Modernization
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.3.1 | Remove background from `#main-menu li a.selected` | `_modern-layout.css:152` | P1 | S | [X] |
| 1.3.2 | Add `border-bottom: 2px solid var(--oc-white)` for selected state | `_modern-layout.css` | P1 | S | [X] |
| 1.3.3 | Remove `border-radius` from `#main-menu li a` | `_modern-layout.css:147-149` | P1 | S | [X] |
| 1.3.4 | Add `transition: var(--transition-fast)` to menu links | `_modern-layout.css` | P2 | S | [X] |
| 1.3.5 | Update hover state to underline instead of background | `_modern-layout.css:150` | P2 | S | [X] |

**Acceptance Criteria:**
- Menu items use underline for active/hover
- Transitions are smooth
- Tab style removed

### 1.4 Sidebar Redesign
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.4.1 | Change `#sidebar` background to `var(--color-bg-primary)` | `_modern-layout.css:181` | P1 | S | [X] |
| 1.4.2 | Change `#sidebar` border to `var(--color-border-subtle)` | `_modern-layout.css:181` | P1 | S | [X] |
| 1.4.3 | Update `#sidebar h3` to use `var(--text-sm)`, `var(--font-semibold)`, uppercase, letter-spacing | `_modern-layout.css:188` | P2 | S | [X] |
| 1.4.4 | Add padding to `#sidebar` of `var(--space-4)` | `_modern-layout.css:181` | P2 | S | [X] |
| 1.4.5 | Style sidebar links with hover effects | `_modern-layout.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Sidebar has white background
- Section headers are styled
- Links have hover states

### 1.5 Footer Minimization
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.5.1 | Reduce `#footer` padding to `var(--space-4)` | `_modern-layout.css` | P2 | S | [X] |
| 1.5.2 | Change `#footer` text color to `var(--color-text-muted)` | `_modern-layout.css` | P2 | S | [X] |
| 1.5.3 | Reduce `#footer` font-size to `var(--text-xs)` | `_modern-layout.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Footer is minimal and unobtrusive

### 1.6 Content Area Updates
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 1.6.1 | Add max-width to `#content` of 1400px | `_modern-layout.css` | P2 | S | [X] |
| 1.6.2 | Update `#content` padding to `var(--space-6)` | `_modern-layout.css` | P2 | S | [X] |
| 1.6.3 | Center `#content` with margin: 0 auto | `_modern-layout.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Content has maximum readable width
- Padding is consistent

---

## PHASE 2: Typography & Base Elements

### 2.1 Headings
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 2.1.1 | Update `h1` to font-size: `var(--text-3xl)`, font-weight: `var(--font-semibold)` | `_modern-typography.css:49-56` | P1 | S | [X] |
| 2.1.2 | Update `h2` to font-size: `var(--text-2xl)`, font-weight: `var(--font-semibold)` | `_modern-typography.css:57` | P1 | S | [X] |
| 2.1.3 | Update `h3` to font-size: `var(--text-xl)`, font-weight: `var(--font-medium)` | `_modern-typography.css:58` | P1 | S | [X] |
| 2.1.4 | Update `h4` to font-size: `var(--text-lg)`, remove border-bottom | `_modern-typography.css:59` | P1 | S | [X] |
| 2.1.5 | Update `h5`, `h6` to use design tokens | `_modern-typography.css` | P2 | S | [X] |
| 2.1.6 | Set heading color to `var(--color-text-primary)` | `_modern-typography.css:56` | P1 | S | [X] |
| 2.1.7 | Set heading margin-bottom to `var(--space-4)` | `_modern-typography.css:53` | P2 | S | [X] |

**Acceptance Criteria:**
- Headings use new sizes
- Colors use tokens
- Margins are consistent

### 2.2 Body Text
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 2.2.1 | Update `body` font-size to `var(--text-sm)` | `_modern-typography.css:47` | P1 | S | [X] |
| 2.2.2 | Update `body` color to `var(--color-text-primary)` | `_modern-typography.css:47` | P1 | S | [X] |
| 2.2.3 | Update `body` line-height to `var(--leading-normal)` | `_modern-typography.css` | P1 | S | [X] |
| 2.2.4 | Add `p` margin-bottom of `var(--space-4)` | `_modern-typography.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Body text is readable
- Paragraphs have proper spacing

### 2.3 Links
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 2.3.1 | Create base `a` styles with color: `var(--color-primary-600)` | `_modern-typography.css` | P1 | S | [X] |
| 2.3.2 | Add text-decoration: none to links | `_modern-typography.css` | P1 | S | [X] |
| 2.3.3 | Add `a:hover` with text-decoration: underline | `_modern-typography.css` | P1 | S | [X] |
| 2.3.4 | Add `a:focus-visible` with outline ring | `_modern-typography.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Links have consistent color
- Hover underline works
- Focus is visible

### 2.4 Tables
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 2.4.1 | Update `table` border-collapse and width | `_modern-typography.css` | P1 | S | [X] |
| 2.4.2 | Style `th` with background: `var(--color-bg-secondary)`, font-weight: `var(--font-medium)` | `_modern-typography.css` | P1 | S | [X] |
| 2.4.3 | Style `td` with padding: `var(--space-3)` | `_modern-typography.css` | P1 | S | [X] |
| 2.4.4 | Add border-bottom to `tr` | `_modern-typography.css` | P1 | S | [X] |
| 2.4.5 | Add `tr:hover` background color | `_modern-typography.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Tables look modern
- Headers are styled
- Rows have hover state

### 2.5 Code Blocks
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 2.5.1 | Update `code` font-family to `var(--font-mono)` | `_modern-typography.css:60` | P1 | S | [X] |
| 2.5.2 | Add inline `code` background and padding | `_modern-typography.css` | P2 | S | [X] |
| 2.5.3 | Style `pre` blocks with background and padding | `_modern-typography.css` | P2 | M | [X] |

**Acceptance Criteria:**
- Code uses monospace font
- Inline code has background
- Code blocks are readable

---

## PHASE 3: Buttons & Form Controls

### 3.1 Button Base Styles
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 3.1.1 | Create `_buttons.css` file | `_buttons.css` | P1 | S | [X] |
| 3.1.2 | Add import for `_buttons.css` in `application.css` | `application.css` | P1 | S | [X] |
| 3.1.3 | Create `.btn` base class with height, padding, border-radius, font properties | `_buttons.css` | P1 | M | [X] |
| 3.1.4 | Create `.btn--primary` with background: `var(--color-primary-600)`, color: white | `_buttons.css` | P1 | S | [X] |
| 3.1.5 | Add `.btn--primary:hover` with background: `var(--color-primary-700)` | `_buttons.css` | P1 | S | [X] |
| 3.1.6 | Add `.btn--primary:active` with background: `var(--color-primary-800)` | `_buttons.css` | P1 | S | [X] |
| 3.1.7 | Create `.btn--secondary` with border, transparent background | `_buttons.css` | P1 | S | [X] |
| 3.1.8 | Create `.btn--danger` with red colors | `_buttons.css` | P2 | S | [X] |
| 3.1.9 | Create `.btn--sm` and `.btn--lg` size variants | `_buttons.css` | P2 | S | [X] |
| 3.1.10 | Add transition and focus styles to all buttons | `_buttons.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Buttons have modern styling
- Multiple variants work
- Hover/active/focus states work

### 3.2 Apply Button Styles to Existing Buttons
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 3.2.1 | Style `input[type="submit"]` to match `.btn--primary` | `_buttons.css` | P1 | M | [X] |
| 3.2.2 | Style `input[type="button"]` to match `.btn--secondary` | `_buttons.css` | P1 | S | [X] |
| 3.2.3 | Style `.icon-add`, `.icon-del` and other icon buttons | `_buttons.css` | P2 | M | [X] |

**Acceptance Criteria:**
- All submit buttons are styled
- All button inputs are styled
- Icon buttons are consistent

### 3.3 Form Inputs
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 3.3.1 | Create `_forms.css` file | `_forms.css` | P1 | S | [X] |
| 3.3.2 | Add import for `_forms.css` in `application.css` | `application.css` | P1 | S | [X] |
| 3.3.3 | Style text inputs with height: 36px, border-radius: 6px, border color | `_forms.css` | P1 | M | [X] |
| 3.3.4 | Add input focus state with ring | `_forms.css` | P1 | S | [X] |
| 3.3.5 | Style textarea to match inputs | `_forms.css` | P1 | S | [X] |
| 3.3.6 | Style select dropdowns with custom arrow | `_forms.css` | P1 | M | [X] |
| 3.3.7 | Create custom checkbox styles | `_forms.css` | P2 | M | [X] |
| 3.3.8 | Create custom radio button styles | `_forms.css` | P2 | M | [X] |
| 3.3.9 | Style labels with proper font-weight and spacing | `_forms.css` | P1 | S | [X] |

**Acceptance Criteria:**
- All form inputs have consistent styling
- Focus states are visible
- Checkboxes/radios are custom styled

---

## PHASE 4: Issue List & Issue Detail Views

### 4.1 Issue List Table
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.1.1 | Create `_issues.css` file | `_issues.css` | P1 | S | [X] |
| 4.1.2 | Add import for `_issues.css` in `application.css` | `application.css` | P1 | S | [X] |
| 4.1.3 | Style issue list table with clean borders | `_issues.css` | P1 | M | [X] |
| 4.1.4 | Reduce row height for compact display | `_issues.css` | P1 | S | [X] |
| 4.1.5 | Add row hover highlight | `_issues.css` | P2 | S | [X] |
| 4.1.6 | Style issue ID column as link | `_issues.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Issue table is clean and modern
- Rows are compact
- Hover states work

### 4.2 Status Badges
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.2.1 | Create `.status-badge` base class | `_issues.css` | P1 | M | [X] |
| 4.2.2 | Create `.status-badge--new` (blue) | `_issues.css` | P1 | S | [X] |
| 4.2.3 | Create `.status-badge--in-progress` (yellow) | `_issues.css` | P1 | S | [X] |
| 4.2.4 | Create `.status-badge--resolved` (green) | `_issues.css` | P1 | S | [X] |
| 4.2.5 | Create `.status-badge--closed` (gray) | `_issues.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Status badges are color-coded
- Pill shape
- Readable text

### 4.3 Priority Badges
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.3.1 | Create `.priority-badge` base class | `_issues.css` | P1 | S | [X] |
| 4.3.2 | Create variants for Low, Normal, High, Urgent, Immediate | `_issues.css` | P1 | M | [X] |

**Acceptance Criteria:**
- Priority badges are distinct
- Color coding is intuitive

### 4.4 Issue Filters
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.4.1 | Style filter form with inline layout | `_issues.css` | P1 | M | [X] |
| 4.4.2 | Create pill-style active filter indicators | `_issues.css` | P2 | M | [X] |
| 4.4.3 | Style "Clear" button | `_issues.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Filters are in a clean bar
- Active filters are visible
- Easy to clear filters

### 4.5 Issue Detail Header
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.5.1 | Create `.issue-header` class | `_issues.css` | P1 | M | [X] |
| 4.5.2 | Style issue title prominently | `_issues.css` | P1 | S | [X] |
| 4.5.3 | Group status/priority/assignee in header | `_issues.css` | P1 | M | [X] |
| 4.5.4 | Style action buttons (Edit, Watch, etc.) | `_issues.css` | P2 | M | [X] |

**Acceptance Criteria:**
- Issue detail header is clean
- Key info is prominent
- Actions are accessible

### 4.6 Issue Properties Panel
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.6.1 | Create two-column layout for properties | `_issues.css` | P1 | M | [X] |
| 4.6.2 | Style property labels and values | `_issues.css` | P1 | S | [X] |
| 4.6.3 | Add dividers between property groups | `_issues.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Properties are organized
- Labels are muted, values are prominent

### 4.7 Issue History/Journal
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 4.7.1 | Create timeline-style history layout | `_issues.css` | P1 | L | [X] |
| 4.7.2 | Style comments with card treatment | `_issues.css` | P1 | M | [X] |
| 4.7.3 | Style change indicators (field changes) | `_issues.css` | P2 | M | [X] |
| 4.7.4 | Add avatars to comments | `_issues.css` | P3 | M | [X] |

**Acceptance Criteria:**
- History is readable
- Comments are distinct
- Changes are clear

---

## PHASE 5: Project Views & Navigation

### 5.1 Project List
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 5.1.1 | Create `_projects.css` file | `_projects.css` | P1 | S | [X] |
| 5.1.2 | Add import for `_projects.css` in `application.css` | `application.css` | P1 | S | [X] |
| 5.1.3 | Style project list as cards or clean list | `_projects.css` | P1 | M | [X] |
| 5.1.4 | Add project icon/avatar placeholder | `_projects.css` | P2 | M | [X] |
| 5.1.5 | Show project metadata (issues count, activity) | `_projects.css` | P2 | M | [X] |

**Acceptance Criteria:**
- Project list is modern
- Cards are clean
- Metadata is visible

### 5.2 Project Overview
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 5.2.1 | Create dashboard-style layout for project overview | `_projects.css` | P1 | L | [X] |
| 5.2.2 | Add issue count widgets | `_projects.css` | P2 | M | [X] |
| 5.2.3 | Style recent activity section | `_projects.css` | P2 | M | [X] |

**Acceptance Criteria:**
- Overview shows key metrics
- Activity is visible
- Layout is organized

### 5.3 Project Navigation
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 5.3.1 | Modernize project menu in sidebar | `_projects.css` | P1 | M | [X] |
| 5.3.2 | Add icons to project menu items | `_projects.css` | P2 | M | [X] |
| 5.3.3 | Add active state indicator | `_projects.css` | P1 | S | [X] |

**Acceptance Criteria:**
- Navigation is intuitive
- Active state is clear

### 5.4 Project Settings Layout
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 5.4.1 | Add padding to project settings tab content sections | `_projects.css` | P2 | S | [X] |
| 5.4.2 | Align module checkbox labels for project settings | `_projects.css` | P2 | S | [X] |

**Acceptance Criteria:**
- Settings tabs have consistent spacing
- Module lists read cleanly

### 5.5 Project Jump Box
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 5.5.1 | Style project jump select width and wrapper | `_projects.css` | P2 | S | [X] |
| 5.5.2 | Style project autocomplete dropdown | `_projects.css` | P2 | M | [X] |

**Acceptance Criteria:**
- Jump box select feels consistent with inputs
- Autocomplete dropdown is readable

---

## PHASE 6: Secondary Views

### 6.1 Wiki
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.1.1 | Style wiki content area | `_secondary-views.css` | P2 | M | [X] |
| 6.1.2 | Style wiki table of contents | `_secondary-views.css` | P2 | S | [X] |
| 6.1.3 | Style wiki edit toolbar | `_secondary-views.css` | P2 | M | [X] |

### 6.2 Files/Documents
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.2.1 | Style file list | `_secondary-views.css` | P2 | M | [X] |
| 6.2.2 | Add file type icons | `_secondary-views.css` | P3 | M | [X] |
| 6.2.3 | Style upload form | `_secondary-views.css` | P2 | S | [X] |

### 6.3 Time Tracking
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.3.1 | Style time log table | `_secondary-views.css` | P2 | M | [X] |
| 6.3.2 | Style time entry form | `_secondary-views.css` | P2 | S | [X] |

### 6.4 Calendar
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.4.1 | Modernize calendar grid | `_secondary-views.css` | P2 | L | [X] |
| 6.4.2 | Style event indicators | `_secondary-views.css` | P2 | M | [X] |

### 6.5 Gantt Chart
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.5.1 | Update Gantt bar colors | `gantt.css` | P2 | M | [X] |
| 6.5.2 | Clean up Gantt grid lines | `gantt.css` | P2 | S | [X] |

### 6.6 Repository
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 6.6.1 | Style file tree | `scm.css` | P3 | M | [X] |
| 6.6.2 | Style diff view | `scm.css` | P3 | L | [X] |

---

## PHASE 7: Dark Mode

### 7.1 Theme Toggle
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 7.1.1 | Add theme toggle button to top bar or user menu | `app/views/layouts/base.html.erb` | P1 | M | [X] |
| 7.1.2 | Create `theme_toggle.js` in app/javascript | `theme_toggle.js` | P1 | M | [X] |
| 7.1.3 | Implement localStorage preference saving | `theme_toggle.js` | P1 | S | [X] |
| 7.1.4 | Implement system preference detection | `theme_toggle.js` | P2 | M | [X] |
| 7.1.5 | Import theme toggle module in `app/javascript/application.js` | `application.js` | P1 | S | [X] |

**Acceptance Criteria:**
- Toggle button visible
- Clicking toggles theme
- Preference persists

### 7.2 Apply Dark Mode Styles
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 7.2.1 | Complete all semantic color overrides in `_dark-mode.css` | `_dark-mode.css` | P1 | L | [X] |
| 7.2.2 | Test all Phase 1-6 components in dark mode | - | P1 | L | [ ] |
| 7.2.3 | Fix any contrast issues | `_dark-mode.css` | P1 | M | [ ] |
| 7.2.4 | Test images and icons in dark mode | - | P2 | M | [ ] |

**Acceptance Criteria:**
- All components work in dark mode
- No contrast issues
- Images/icons visible

---

## PHASE 8: Polish & Performance

### 8.1 Animations
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.1.1 | Add transition to all interactive elements | Various | P3 | M | [X] |
| 8.1.2 | Add subtle hover animations to cards | Various | P3 | S | [X] |
| 8.1.3 | Add modal/panel slide animations | Various | P3 | M | [X] |

### 8.2 Loading States
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.2.1 | Create skeleton loader component | `_polish.css` | P2 | M | [X] |
| 8.2.2 | Add loading state to buttons | `_buttons.css` | P2 | S | [X] |

### 8.3 Performance
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.3.1 | Audit and remove unused CSS | Various | P2 | L | [ ] |
| 8.3.2 | Run Lighthouse test | - | P2 | M | [ ] |
| 8.3.3 | Optimize images | `app/assets/images` | P3 | M | [ ] |

### 8.4 Accessibility
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.4.1 | Run axe DevTools audit | - | P1 | M | [ ] |
| 8.4.2 | Fix any accessibility issues | Various | P1 | L | [ ] |
| 8.4.3 | Test keyboard navigation | - | P1 | M | [ ] |

### 8.5 Cross-Browser Testing
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.5.1 | Test in Chrome | - | P1 | M | [ ] |
| 8.5.2 | Test in Firefox | - | P1 | M | [ ] |
| 8.5.3 | Test in Safari | - | P1 | M | [ ] |
| 8.5.4 | Test in Edge | - | P2 | M | [ ] |
| 8.5.5 | Test on mobile browsers | - | P2 | M | [ ] |

### 8.6 Documentation
| ID | Task | File | Priority | Effort | Status |
|----|------|------|----------|--------|--------|
| 8.6.1 | Update design system docs for new tokens and components | `docs/design/DESIGN-SYSTEM.md` | P3 | S | [X] |
| 8.6.2 | Update phase completion docs and project README | `docs/phases/*.md`, `docs/README.md` | P3 | M | [X] |

**Acceptance Criteria:**
- Documentation reflects current implementation
- Phase summaries describe the work done

---

## Summary Statistics

| Phase | Total Tasks | P1 Tasks | P2 Tasks | P3 Tasks |
|-------|-------------|----------|----------|----------|
| 0 | 19 | 15 | 4 | 0 |
| 1 | 29 | 13 | 16 | 0 |
| 2 | 23 | 17 | 6 | 0 |
| 3 | 22 | 17 | 5 | 0 |
| 4 | 27 | 20 | 6 | 1 |
| 5 | 15 | 6 | 9 | 0 |
| 6 | 14 | 0 | 11 | 3 |
| 7 | 9 | 7 | 2 | 0 |
| 8 | 18 | 6 | 6 | 6 |
| **Total** | **176** | **101** | **65** | **10** |





