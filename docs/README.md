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
- README.md
- IMPLEMENTATION-PLAN.md
- TASK-LIST.md
- design/
  - DESIGN-SYSTEM.md
- specs/
  - CONSTRAINTS.md
- phases/
  - PHASE-0-COMPLETE.md
  - PHASE-1-COMPLETE.md
  - PHASE-2-COMPLETE.md
  - PHASE-3-COMPLETE.md
  - PHASE-4-COMPLETE.md
  - PHASE-5-COMPLETE.md
  - PHASE-6-COMPLETE.md
  - PHASE-7-COMPLETE.md
  - PHASE-8-COMPLETE.md
  - ALL-PHASES-COMPLETE.md
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
| 0 | Implemented | Foundation Setup |
| 1 | Implemented | Global Chrome & Layout |
| 2 | Implemented | Typography & Base Elements |
| 3 | Implemented | Buttons & Form Controls |
| 4 | Implemented | Issue List & Issue Detail |
| 5 | Implemented | Project Views & Navigation |
| 6 | Implemented | Secondary Views |
| 7 | Implemented | Dark Mode |
| 8 | Implemented | Polish & Performance |

## Reference Applications

Study these for inspiration:
- [Linear](https://linear.app) - Speed, minimal design
- [Asana](https://asana.com) - Sidebar, task details
- [Jira](https://atlassian.com/jira) - Board views
- [Height](https://height.app) - Clean aesthetics
- [Plane](https://plane.so) - Open source, modern

