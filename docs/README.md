# Redmine UI Modernization - Documentation

## Overview

This directory contains all documentation for the Redmine UI Modernization project.

## Quick Links

| Document | Purpose |
|----------|---------|
| [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md) | High-level phased implementation plan |
| [TASK-LIST.md](./TASK-LIST.md) | Detailed task list with status tracking |
| [design/DESIGN-SYSTEM.md](./design/DESIGN-SYSTEM.md) | Design tokens and component specifications |
| [specs/CONSTRAINTS.md](./specs/CONSTRAINTS.md) | Hard constraints and rules |

## Directory Structure

```
docs/
├── README.md                    # This file
├── IMPLEMENTATION-PLAN.md       # Phased implementation plan
├── TASK-LIST.md                 # Detailed task tracking
├── design/
│   └── DESIGN-SYSTEM.md         # Design tokens, components, patterns
├── specs/
│   └── CONSTRAINTS.md           # Rules and constraints
└── phases/
    ├── PHASE-0-COMPLETE.md      # Phase 0 completion summary (create when done)
    ├── PHASE-1-COMPLETE.md      # Phase 1 completion summary
    └── ...                      # Additional phase summaries
```

## Development Workflow

### Before Starting Work

1. Read [AGENTS.md](../AGENTS.md) in the root directory
2. Read [specs/CONSTRAINTS.md](./specs/CONSTRAINTS.md)
3. Review the current phase in [IMPLEMENTATION-PLAN.md](./IMPLEMENTATION-PLAN.md)
4. Check task status in [TASK-LIST.md](./TASK-LIST.md)

### Running the Application

```bash
# Start Redmine
docker compose up -d

# View logs
docker compose logs -f

# Stop Redmine
docker compose down
```

**URL**: http://localhost:8080
**Login**: admin / admin

### After Completing Work

1. Update task status in [TASK-LIST.md](./TASK-LIST.md)
2. When a phase is complete, create `phases/PHASE-X-COMPLETE.md`
3. Commit with message format: `[Phase X] Description`

## Phase Completion Checklist

Before marking a phase complete:

- [ ] All P1 tasks for the phase are done
- [ ] All P2 tasks for the phase are done (or documented as deferred)
- [ ] Application loads without errors
- [ ] No JavaScript console errors
- [ ] Visual changes look correct
- [ ] Tested in Chrome and Firefox
- [ ] Accessibility not regressed
- [ ] Phase summary document created

## Current Progress

| Phase | Status | Description |
|-------|--------|-------------|
| 0 | Not Started | Foundation Setup |
| 1 | Not Started | Global Chrome & Layout |
| 2 | Not Started | Typography & Base Elements |
| 3 | Not Started | Buttons & Form Controls |
| 4 | Not Started | Issue List & Issue Detail |
| 5 | Not Started | Project Views & Navigation |
| 6 | Not Started | Secondary Views |
| 7 | Not Started | Dark Mode |
| 8 | Not Started | Polish & Performance |

## Reference Applications

Study these for inspiration:
- [Linear](https://linear.app) - Speed, minimal design
- [Asana](https://asana.com) - Sidebar, task details
- [Jira](https://atlassian.com/jira) - Board views
- [Height](https://height.app) - Clean aesthetics
- [Plane](https://plane.so) - Open source, modern
