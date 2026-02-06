# Linear Design System - Technical Specification

## Core Design Philosophy
We are not just "cleaning up" Redmine. We are rebuilding it with a **"Premium Productivity"** aesthetic.
- **Micro-interactions matter**: Every hover, focus, and click should feel tactile.
- **Density is key**: Information should be dense but breathing.
- **Shadows over borders**: Use depth instead of lines to separate content where possible.
- **Typography is UI**: The font choice and weight carry the structure.

## 1. Design Tokens (The "Premium" Set)

### Colors (Refined Palette)
| Token | Value | Description |
|-------|-------|-------------|
| `--color-bg-base` | `#FAFBFC` | Main app background (slight cool gray) |
| `--color-bg-surface` | `#FFFFFF` | Cards, sidebars, modals |
| `--color-bg-subtle` | `#F4F5F8` | Secondary backgrounds, hovers |
| `--color-text-primary` | `#1C1F26` | Almost black, softer than #000 |
| `--color-text-secondary` | `#606770` | Muted text |
| `--color-text-tertiary` | `#8B949E` | Placeholders, meta info |
| `--color-accent` | `#5E6AD2` | **Indigo** (Linear Brand) or `#3B82F6` (Soft Blue) |
| `--color-accent-glow` | `rgba(94, 106, 210, 0.2)` | Focus rings |

### Borders (Glass-like)
| Token | Value |
|-------|-------|
| `--border-subtle` | `1px solid rgba(0, 0, 0, 0.06)` |
| `--border-default` | `1px solid rgba(0, 0, 0, 0.08)` |
| `--border-focus` | `1px solid var(--color-accent)` |

### Shadows (Multi-layered Depth)
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0px 1px 2px rgba(0,0,0,0.04)` | Buttons, small items |
| `--shadow-sm` | `0px 2px 4px rgba(0,0,0,0.04), 0px 8px 16px rgba(0,0,0,0.04)` | Cards, dropdowns |
| `--shadow-md` | `0px 4px 8px rgba(0,0,0,0.04), 0px 16px 32px rgba(0,0,0,0.08)` | Modals, active states |

### Typography (Inter)
| Token | Value |
|-------|-------|
| `--font-stack` | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |

---

## 2. Component Blueprints

### Buttons (`.button`, `input[type=submit]`)
**Visuals**:
- Height: 28px (Small) or 32px (Medium)
- Radius: `6px`
- Background: `linear-gradient(to bottom, #FFFFFF, #F9F9FB)` (Subtle gradient)
- Border: `1px solid rgba(0,0,0,0.1)`
- Shadow: `--shadow-xs`
- Font: 13px Medium

**Interaction**:
- Hover: Background `#F4F5F8`, Border color darker
- Active: `transform: scale(0.98)` (Tactile click)

### Inputs (`input[type=text]`, `select`)
**Visuals**:
- Background: `#FFFFFF`
- Border: `1px solid rgba(0,0,0,0.1)` (or no border with internal shadow)
- Radius: `6px`
- Padding: 6px 10px

**Interaction**:
- Focus: `box-shadow: 0 0 0 3px var(--color-accent-glow)` + `border-color: var(--color-accent)`
- Transition: `all 0.15s ease`

### Tables (`table.list`)
**Visuals**:
- Header: Background `transparent`, Border-bottom `--border-default`, Text uppercase/small/bold.
- Row: Height 36px/40px.
- Cell: Padding `8px 16px`, Border-bottom `--border-subtle`.
- Hover: Background `--color-bg-subtle` (very light gray).

### Sidebar (`#sidebar`)
**Visuals**:
- Background: Transparent (blends with page) or very faint gray.
- Links: Radius `4px`, Padding `4px 8px`.
- Active Link: Background `rgba(0,0,0,0.04)`, Text Primary.

---

## 3. Known Legacy Fixes (Reference)

### Force Remove Yellows
```css
/* Nuke all yellow backgrounds */
div.issue, .context-menu, table.list tr:hover {
  background-color: var(--color-bg-subtle) !important;
}
```

### Force Card Reset
```css
/* Reset basic boxes to Premium Cards */
.box, fieldset {
  background: var(--color-bg-surface);
  border: var(--border-subtle);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  padding: 24px;
}
```
