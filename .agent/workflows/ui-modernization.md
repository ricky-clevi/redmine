---
description: Redmine UI Upgrade - "Linear-Grade" Polishing Protocol
---

# Agentic Protocol: "Linear-Grade" UI Polish

## Mission
Do not just "modernize" Redmine. **Rebuild it to feel like Linear.**
This means focusing on **Tactility**, **Density**, and **Subtlety**. 
If a component feels "default CSS", it is WRONG.

---

## 1. The "Premium" Checklist (Mental Model)
Before marking any page as "Done", ask:
1.  **Are borders glass-like?** (Transparent RGBA, not solid hex)
2.  **Are shadows layered?** (No single-layer fuzz)
3.  **Is text strictly hierarchical?** (Black for primary, Gray for secondary, tertiary for meta)
4.  **Do buttons click?** (Scale down on active)
5.  **Is there whitespace?** (Linear is dense but breathes)

---

## 2. Iterative Execution Loop

```
FOR EACH PAGE:
  1.  **VISUAL AUDIT**
      - Navigate to page.
      - Screenshot.
      - Identify "Cheap" UI elements (solid borders, yellow backgrounds, default inputs).

  2.  **ACTION: APPLY PREMIUM TOKENS**
      - Replace solid borders with `var(--border-subtle)`.
      - Replace standard shadows with `var(--shadow-sm)` or `var(--shadow-md)`.
      - Enforce `Inter` font stack.
      - Add micro-interactions (`transform: scale(0.98)` on active).

  3.  **VERIFY: THE "FEEL" CHECK**
      - Does the button feel tactile?
      - Does the dropdown float (shadow) or just sit there?
      - Is the issue list readable at a glance?

  4.  **REFINE**
      - Adjust padding by 1-2px pixels if needed.
      - Tweak color weights.

  5.  **FINALIZE**
      - Screenshot final state.
      - Move to next page.
```

---

## 3. Page Targets (Priority Order)

### Tier 1: Core "Feel" (The 90% Usage)
*   **Action**: These pages MUST be pixel-perfect.
    1.  **Login Page**: The first impression. Needs perfect card physics.
    2.  **Home / Dashboard**: The "Command Center".
    3.  **Issue List**: The "Spreadsheet". Needs high information density, perfect alignment.
    4.  **Issue Detail**: The "Document". Needs readability focus.

### Tier 2: Project Views
    5.  **New Issue Form**: Needs to feel like a modern form wizard.
    6.  **Roadmap**: Needs perfect progress bars and typography.
    7.  **Boards (Kanban)**: Needs draggable-feel cards (visual only).

### Tier 3: Admin & Meta
    8.  **Settings**: Clean tabs, aligned forms.
    9.  **User Profile**: Clean avatar, clean fields.

---

## 4. Key CSS Signatures to Implement

**The "Glass" Border:**
```css
border: 1px solid rgba(0,0,0,0.06); /* NOT #E1E4E8 */
```

**The "Floaty" Shadow:**
```css
box-shadow: 0px 2px 4px rgba(0,0,0,0.04), 0px 8px 16px rgba(0,0,0,0.06);
```

**The "Tactile" Button:**
```css
.button:active { transform: scale(0.98); }
.button { transition: all 100ms ease-out; }
```

**The "Glow" Focus:**
```css
input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(94, 106, 210, 0.2);
}
```

---

## 5. Recovery Strategy
- If a page looks "broken" (layout shift): Revert to `_legacy-base.css` values and apply strictly via overrides.
- If shadows look "dirty": Reduce alpha opacity by 50%.
- If text looks "blurry": Ensure `-webkit-font-smoothing: antialiased`.
