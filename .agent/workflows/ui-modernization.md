---
description: Redmine UI Modernization - Component-Level Implementation Guide
---

# Redmine UI Modernization - Agentic Component Implementation

## CRITICAL INSTRUCTIONS

**This workflow requires ACTIVE IMPLEMENTATION, not just verification.**

The agent MUST:
1. **EDIT CSS FILES** to modernize each component on every page
2. **CHECK THE BROWSER** after each change to see the visual result
3. **ITERATE** until each component matches the design system
4. **NOT STOP** until ALL components on ALL pages are modernized
5. **Create dedicated CSS sections** for each page if needed

**THE GOAL**: Transform EVERY visible element to match the Nordic Gray design system.

---

## Execution Protocol

```
FOR EACH PAGE in the list below:
  1. Navigate to the page URL
  2. Take screenshot to document current state
  3. FOR EACH COMPONENT on that page:
     a. Identify the CSS selector (use browser DevTools via evaluate)
     b. Check if component uses legacy styling
     c. WRITE CSS to modernize the component
     d. Verify the change visually
  4. Take final screenshot showing improvements
  5. Move to next page
  
REPEAT until ALL pages are FULLY MODERNIZED
```

---

## Page-by-Page Component Breakdown

### PAGE 1: Login Page
**URL**: `http://localhost:8080/login`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Login card container | `#login-form` | Orange/white background | White card with shadow, 16px border-radius |
| Username input | `#username` | Basic styling | Rounded corners, blue focus ring |
| Password input | `#password` | Basic styling | Rounded corners, blue focus ring |
| Login button | `input[type="submit"]` | Generic button | Dark (#222326), white text, hover effect |
| "Lost password" link | `.lost_password a` | Basic link | Soft blue (#3B82F6) |
| Form labels | `label` | Plain text | Subtle gray, proper spacing |
| Remember me checkbox | `#autologin` | Basic checkbox | Custom styled checkbox |

#### CSS to Write:
```css
/* Login Page Modernization */
#login-form {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 32px;
  max-width: 400px;
  margin: 80px auto;
}

#login-form input[type="text"],
#login-form input[type="password"] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  font-size: 15px;
  margin-bottom: 16px;
}

#login-form input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  outline: none;
}

#login-form input[type="submit"] {
  width: 100%;
  padding: 12px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 150ms;
}

#login-form input[type="submit"]:hover {
  background: var(--oc-gray-8);
}
```

---

### PAGE 2: Home Page
**URL**: `http://localhost:8080/`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Header bar | `#header` | Needs solid Nordic Gray | Solid #222326, no gradient |
| Top menu | `#top-menu` | Spacing issues | Clean horizontal nav |
| Main menu | `#main-menu` | Tab styling | Active tab indicator |
| Search box | `#quick-search` | Basic input | Rounded, icon inside |
| Project dropdown | `#project-jump` | Basic select | Custom styled dropdown |
| Welcome text box | `.welcome` | Plain text | Card styling if present |
| Footer | `#footer` | Basic styling | Subtle, centered |

#### CSS to Write:
```css
/* Home Page Components */
#header {
  background: var(--color-primary);
  padding: 0;
}

#top-menu {
  background: transparent;
  padding: 8px 16px;
}

#top-menu a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 4px 8px;
}

#top-menu a:hover {
  color: white;
}

#main-menu {
  background: var(--color-primary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#main-menu li a {
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 16px;
  display: block;
}

#main-menu li a:hover,
#main-menu li a.selected {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

#quick-search input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  padding: 6px 12px;
}

#quick-search input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
```

---

### PAGE 3: Projects List
**URL**: `http://localhost:8080/projects`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Projects table | `table.list.projects` | Basic table | Modern table styling |
| Project name links | `.name a` | Basic links | Bold, accent color |
| Description column | `.description` | Plain text | Muted gray |
| Table headers | `th` | Basic headers | Light gray bg, bold |
| Table rows | `tr` | Yellow hover | Subtle gray hover |
| Pagination | `.pagination` | Basic links | Pill-style pagination |

#### CSS to Write:
```css
/* Projects List */
table.list.projects {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

table.list.projects th {
  background: var(--oc-gray-1);
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  color: var(--oc-gray-7);
  border-bottom: 1px solid var(--color-border-default);
}

table.list.projects td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--oc-gray-2);
}

table.list.projects tr:hover {
  background: var(--oc-gray-0);
}

table.list.projects .name a {
  font-weight: 600;
  color: var(--color-accent);
}

table.list.projects .description {
  color: var(--oc-gray-6);
  font-size: 14px;
}
```

---

### PAGE 4: Issues List
**URL**: `http://localhost:8080/projects/test-project/issues`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Filter section | `fieldset#filters` | Basic fieldset | Card styling |
| Filter dropdowns | `select` | Basic selects | Rounded, styled |
| Apply button | `.buttons input` | Basic button | Primary button style |
| Issues table | `table.list.issues` | Yellow hover | Modern table |
| Status column | `td.status` | Plain text | Colored status badge |
| Priority column | `td.priority` | Plain text | Priority indicator |
| Subject links | `td.subject a` | Basic link | Accent color |
| Checkboxes | `input[type="checkbox"]` | Basic checkbox | Custom styled |
| Context menu | `#context-menu` | Basic menu | Rounded, shadow |
| Pagination | `.pagination` | Basic | Modern pagination |

#### CSS to Write:
```css
/* Issues List */
fieldset#filters {
  background: white;
  border: 1px solid var(--color-border-default);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

fieldset#filters legend {
  font-weight: 600;
  padding: 0 8px;
}

table.list.issues {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

table.list.issues td.status {
  position: relative;
  padding-left: 24px;
}

/* Status badge dots */
table.list.issues td.status::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
}

/* Priority coloring */
table.list.issues tr.priority-high td.priority {
  color: var(--oc-red-6);
  font-weight: 600;
}

table.list.issues tr.priority-urgent td.priority {
  color: var(--oc-red-8);
  font-weight: 700;
}
```

---

### PAGE 5: Issue Detail
**URL**: `http://localhost:8080/issues/1`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Issue header | `.issue .subject` | Plain text | Large, bold title |
| Issue properties box | `div.issue` | YELLOW BACKGROUND | Gray card |
| Status field | `.status` | Plain text | Colored badge |
| Priority field | `.priority` | Plain text | Priority badge |
| Assigned to | `.assigned-to` | Plain text | User avatar + name |
| Progress bar | `.progress` | Basic bar | Modern rounded bar |
| Description | `.description` | Plain text | Card with padding |
| Journal entries | `.journal` | Basic styling | Timeline style |
| Add comment form | `#update form` | Basic form | Card styling |
| Action buttons | `.contextual a` | Basic links | Icon buttons |

#### CSS to Write:
```css
/* Issue Detail Page */
div.issue {
  background: var(--oc-gray-0) !important;
  border-radius: 12px;
  border: 1px solid var(--color-border-default);
  padding: 24px;
  margin-bottom: 24px;
}

div.issue .subject h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--oc-gray-9);
}

div.issue .attributes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

div.issue .attribute {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

div.issue .attribute .label {
  font-size: 12px;
  text-transform: uppercase;
  color: var(--oc-gray-5);
  font-weight: 600;
}

div.issue .attribute .value {
  font-size: 14px;
  color: var(--oc-gray-8);
}

/* Progress bar */
.progress {
  background: var(--oc-gray-2);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
}

.progress .bar {
  background: linear-gradient(90deg, var(--oc-green-5), var(--oc-green-6));
  height: 100%;
  border-radius: 8px;
}

/* Journal entries */
.journal {
  background: white;
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.journal .user {
  font-weight: 600;
  color: var(--oc-gray-8);
}

.journal .details {
  margin-top: 8px;
  color: var(--oc-gray-6);
  font-size: 14px;
}
```

---

### PAGE 6: New Issue Form
**URL**: `http://localhost:8080/projects/test-project/issues/new`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Form container | `form#issue-form` | Basic form | Card styling |
| Tracker select | `#issue_tracker_id` | Basic select | Styled dropdown |
| Subject input | `#issue_subject` | Basic input | Full width, rounded |
| Description textarea | `#issue_description` | Basic textarea | Large, rounded |
| Wiki toolbar | `.jstElements` | Basic toolbar | Modern icon toolbar |
| Priority select | `#issue_priority_id` | Basic select | Styled dropdown |
| Status select | `#issue_status_id` | Basic select | Styled dropdown |
| Assignee select | `#issue_assigned_to_id` | Basic select | With avatar if possible |
| Start/Due date | `input[type="date"]` | Basic date | Styled date picker |
| Submit button | `input[name="commit"]` | Basic button | Primary button |
| Preview button | `.preview` | Basic button | Secondary button |

#### CSS to Write:
```css
/* New Issue Form */
form#issue-form {
  max-width: 900px;
}

form#issue-form .box {
  background: white;
  border-radius: 12px;
  border: 1px solid var(--color-border-default);
  padding: 24px;
  margin-bottom: 20px;
}

form#issue-form #issue_subject {
  width: 100%;
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-default);
}

form#issue-form #issue_description {
  width: 100%;
  min-height: 200px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-default);
  font-family: inherit;
  resize: vertical;
}

/* Wiki toolbar */
.jstElements {
  background: var(--oc-gray-0);
  border-radius: 8px 8px 0 0;
  padding: 8px;
  border: 1px solid var(--color-border-default);
  border-bottom: none;
}

.jstElements button {
  background: white;
  border: 1px solid var(--oc-gray-3);
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
}

.jstElements button:hover {
  background: var(--oc-gray-1);
}

/* Tabular form fields */
.tabular p {
  margin-bottom: 16px;
}

.tabular label {
  width: 150px;
  font-weight: 500;
  color: var(--oc-gray-7);
}

.tabular select,
.tabular input[type="text"] {
  min-width: 300px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--color-border-default);
}
```

---

### PAGE 7: Admin Dashboard
**URL**: `http://localhost:8080/admin`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Admin menu sidebar | `#admin-menu` | Basic list | Card with icons |
| Menu items | `#admin-menu a` | Basic links | Hover highlight |
| Active menu item | `#admin-menu .selected` | Basic highlight | Left border accent |
| Content area | `#content` | Basic styling | Clean spacing |
| Section titles | `h2, h3` | Basic headings | Proper typography |
| Info boxes | `.box` | Basic box | Rounded card |
| Action buttons | `.icon` | Icon + text | Clean icon buttons |

#### CSS to Write:
```css
/* Admin Dashboard */
#admin-menu {
  background: white;
  border-radius: 12px;
  border: 1px solid var(--color-border-default);
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

#admin-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#admin-menu li {
  margin-bottom: 2px;
}

#admin-menu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  color: var(--oc-gray-7);
  text-decoration: none;
  transition: background 150ms;
}

#admin-menu a:hover {
  background: var(--oc-gray-1);
  color: var(--oc-gray-9);
}

#admin-menu .selected a {
  background: var(--oc-blue-0);
  color: var(--color-accent);
  font-weight: 500;
}
```

---

### PAGE 8: Admin Settings
**URL**: `http://localhost:8080/settings`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Tab navigation | `#tab-content-general` etc | Basic tabs | Modern tab bar |
| Settings form | `.tabular` | Basic layout | Clean grid layout |
| Text inputs | `input[type="text"]` | Basic inputs | Rounded, focus ring |
| Selects | `select` | Basic selects | Styled dropdowns |
| Checkboxes | `input[type="checkbox"]` | Basic checkbox | Custom styled |
| Save button | `input[type="submit"]` | Basic button | Primary button |
| Hint text | `.info` | Basic text | Muted, smaller text |

#### CSS to Write:
```css
/* Admin Settings Tabs */
.tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--color-border-default);
  margin-bottom: 24px;
}

.tabs a {
  padding: 12px 20px;
  color: var(--oc-gray-6);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all 150ms;
}

.tabs a:hover {
  color: var(--oc-gray-8);
}

.tabs a.selected {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
  font-weight: 500;
}

/* Settings form fields */
.settings .tabular {
  max-width: 800px;
}

.settings .tabular p {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--oc-gray-1);
}

.settings .tabular label {
  min-width: 200px;
  font-weight: 500;
}

.settings .info {
  font-size: 13px;
  color: var(--oc-gray-5);
  margin-top: 4px;
}
```

---

### PAGE 9: User Management
**URL**: `http://localhost:8080/users`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| User search | `#content form` | Basic form | Inline search bar |
| Users table | `table.list.users` | Basic table | Modern styled table |
| User avatar | `.avatar` | Basic image | Rounded avatar |
| Status column | `.status` | Plain text | Status badge |
| Admin badge | `.admin` | Plain text | Badge styling |
| Action links | `.buttons a` | Basic links | Icon buttons |
| Pagination | `.pagination` | Basic links | Modern pagination |

---

### PAGE 10: Groups
**URL**: `http://localhost:8080/groups`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Groups table | `table.list` | Basic table | Modern table |
| Group name | `.name a` | Basic link | Bold, accent color |
| User count | Column | Plain text | Badge or count |
| Action buttons | Action column | Basic links | Icon buttons |

---

### PAGE 11: Roles and Permissions
**URL**: `http://localhost:8080/roles` and `/roles/permissions`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Roles table | `table.list` | Basic table | Modern table |
| Permissions grid | `table.permissions` | Dense grid | Zebra striping, spacing |
| Checkboxes | `input[type="checkbox"]` | Basic checkbox | Custom styled |
| Section headers | Category rows | Plain text | Bold, background |
| Submit button | `input[type="submit"]` | Basic button | Primary button |

---

### PAGE 12: System Info
**URL**: `http://localhost:8080/admin/info`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Check items | List items | Basic list | Icon + text with check marks |
| Environment table | `table` | Basic table | Definition list style |
| Version numbers | Values | Plain text | Monospace font |
| Warning items | Warnings | Basic text | Yellow warning card |

---

### PAGE 13: Trackers
**URL**: `http://localhost:8080/trackers`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Trackers table | `table.list` | Yellow rows | Modern table |
| Tracker name | `.name a` | Basic link | Bold text |
| Default status | Column | Plain text | Status badge |
| Drag handle | `.sort-handle` | Basic icon | Styled handle |
| Action buttons | Action links | Basic links | Icon buttons |

---

### PAGE 14: Issue Statuses
**URL**: `http://localhost:8080/issue_statuses`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Statuses table | `table.list` | Yellow rows | Modern table |
| Status name | `.name a` | Basic link | With color indicator |
| Closed checkbox | Checkbox column | Basic | Styled checkbox |
| Drag handle | `.sort-handle` | Basic | Styled handle |

---

### PAGE 15: Enumerations
**URL**: `http://localhost:8080/enumerations`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Category sections | Section headers | Basic headings | Card headers |
| Value tables | `table.list` | Multiple tables | Consistent styling |
| Default indicator | Checkmarks | Basic | Icon styling |
| Active indicator | Checkmarks | Basic | Badge styling |

---

### PAGE 16: My Account
**URL**: `http://localhost:8080/my/account`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Account info box | `.box` | Basic box | Card with avatar |
| Profile form | `.tabular` | Basic form | Clean layout |
| Email settings | Checkboxes | Basic | Styled checkboxes |
| Preferences section | Right column | Basic | Settings card |
| API key section | Token display | Basic | Monospace card |
| Save button | `input[type="submit"]` | Basic | Primary button |

---

### PAGE 17: Search Results
**URL**: `http://localhost:8080/search?q=test`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Search form | `form` | Basic form | Search bar styling |
| Search input | `input#search` | Basic input | Large, with icon |
| Scope checkboxes | Category checkboxes | Basic | Pill buttons/chips |
| Results list | `.results` | Basic list | Card per result |
| Result title | Result links | Basic links | Bold, accent |
| Result excerpt | Description | Plain text | Highlighted matches |

---

### PAGE 18: Gantt Chart
**URL**: `http://localhost:8080/projects/test-project/issues/gantt`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Filter panel | Filters section | Basic | Collapsible card |
| Gantt table | `.gantt-table` | Basic table | Clean timeline |
| Task bars | `.task-bar` | Basic bars | Colored by status |
| Today line | `.today` | Basic line | Red indicator line |
| Timeline header | Month/date headers | Basic | Sticky header |

---

### PAGE 19: Calendar
**URL**: `http://localhost:8080/projects/test-project/issues/calendar`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Month navigation | Nav buttons | Basic links | Arrow buttons |
| Calendar grid | `table.cal` | Basic table | Modern month grid |
| Day cells | `td` | Basic cells | Equal height, padding |
| Today cell | `.today` | Basic highlight | Blue outline |
| Issue entries | Issue links in cells | Yellow background | Status-colored dots |

---

### PAGE 20: Time Entries
**URL**: `http://localhost:8080/projects/test-project/time_entries`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Filter form | Filters | Basic | Card styling |
| Time table | `table.list` | Basic table | Modern table |
| Hours column | `.hours` | Plain numbers | Right-aligned, bold |
| Activity column | Activity | Plain text | Category badge |
| Total row | Totals | Basic | Bold, highlighted |

---

### PAGE 21: Reports
**URL**: `http://localhost:8080/projects/test-project/issues/report`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Report tables | Multiple tables | Basic tables | Dashboard cards |
| Table headers | `th` | Basic | Clean headers |
| Data cells | Numbers | Plain | Right-aligned |
| Totals row | Total rows | Basic | Bold, background |
| Section titles | Headings | Basic | Icon + title |

---

### PAGE 22: Documents
**URL**: `http://localhost:8080/projects/test-project/documents`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Category filter | Left sidebar | Basic | Filter card |
| Documents list | Main content | Basic | Document cards |
| Document title | Title links | Basic | Bold, icon |
| Upload date | Metadata | Plain text | Muted date format |
| Attachments | File links | Basic | File type icons |

---

### PAGE 23: Roadmap
**URL**: `http://localhost:8080/projects/test-project/roadmap`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Version filter | Checkboxes | Basic | Styled checkboxes |
| Version blocks | Version sections | Basic | Version cards |
| Progress bar | `.progress` | Basic bar | Modern progress |
| Issue counts | Statistics | Plain text | Badges |
| Due date | Date | Plain text | Styled date |

---

### PAGE 24: Wiki
**URL**: `http://localhost:8080/projects/test-project/wiki`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Wiki content | `.wiki` | Basic styling | Typography styling |
| Wiki headings | `h1, h2, h3` | Basic | Proper hierarchy |
| Code blocks | `pre, code` | Basic | Syntax highlighted |
| Tables | `table` | Basic | Styled tables |
| Links | `a` | Basic | Wiki link styling |
| Edit tools | Toolbar | Basic | Modern wiki toolbar |
| TOC | Table of contents | Basic | Sticky sidebar |

---

### PAGE 25: Forums
**URL**: `http://localhost:8080/projects/test-project/boards`

#### Components to Modernize:
| Component | Selector | Current Issue | Target Styling |
|-----------|----------|---------------|----------------|
| Forums table | `table.list` | Basic table | Modern table |
| Forum name | Name link | Basic | Bold, icon |
| Topic count | Count column | Plain number | Badge |
| Last post | Last message | Basic | User + time ago |
| New topic button | Action link | Basic | Primary button |

---

## CSS File Organization

Create or update these files with page-specific styles:

```
app/assets/stylesheets/
├── _pages/
│   ├── _login.css          # Login page styles
│   ├── _home.css           # Home page styles
│   ├── _projects.css       # Projects list
│   ├── _issues.css         # Issues list & detail
│   ├── _admin.css          # Admin pages
│   ├── _calendar.css       # Calendar view
│   ├── _gantt.css          # Gantt chart
│   ├── _wiki.css           # Wiki pages
│   └── _forums.css         # Forum pages
```

Or add sections to existing files with clear comments:

```css
/* ============================================
   LOGIN PAGE COMPONENTS
   ============================================ */

/* ============================================
   HOME PAGE COMPONENTS
   ============================================ */
```

---

## Verification Checklist

After implementing each page, verify:

- [ ] No yellow/orange backgrounds remain
- [ ] All buttons use dark (Nordic Gray) styling
- [ ] All inputs have blue focus rings
- [ ] All tables have subtle gray hover (not yellow)
- [ ] All cards have rounded corners (12px for large, 8px for small)
- [ ] All links use soft blue accent color
- [ ] Typography is consistent
- [ ] Spacing is consistent
- [ ] Shadows are subtle and consistent

---

## REMEMBER

1. **EDIT THE CSS** - Don't just verify, actually write the CSS
2. **CHECK THE BROWSER** - After every change, take a screenshot
3. **ITERATE** - If something doesn't look right, fix it
4. **DON'T STOP** - Continue until ALL 25 pages are FULLY modernized
5. **BE THOROUGH** - Check every component on every page
