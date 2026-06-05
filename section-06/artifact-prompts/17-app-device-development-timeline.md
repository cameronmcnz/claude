---
layout: lesson
title: "Medical Device Development Timeline"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Medical Device Development Timeline

## Starter Prompt

Create an interactive Gantt-style timeline for a medical device development program showing phases like Design Input, Design Output, Verification & Validation, and FDA Submission, where I can adjust start dates and durations and see the full schedule update.

---

## Expanded Prompt

Create a Claude Artifact called the **Medical Device Development Timeline** — an interactive Gantt-style project planner built with HTML, CSS, and JavaScript.

### Goal

Give medical device program managers and executives a visual, adjustable timeline that maps the full product development lifecycle from concept through regulatory submission and commercial launch. Make it instantly usable and impressive in a planning meeting or boardroom setting.

### Audience

Medical device program managers, product leaders, R&D directors, regulatory affairs teams, and executives overseeing device development programs.

### Development Phases to Include

Display these phases as horizontal Gantt bars, in sequence:

| # | Phase | Default Duration |
| - | ----- | ---------------- |
| 1 | Concept & Feasibility | 2 months |
| 2 | Design Planning | 1 month |
| 3 | Design Input | 2 months |
| 4 | Design Output | 3 months |
| 5 | Design Review — Stage Gate | 0.5 months |
| 6 | Verification | 3 months |
| 7 | Validation | 3 months |
| 8 | Design Transfer | 2 months |
| 9 | Regulatory Submission Prep | 2 months |
| 10 | FDA Review | 3 months |
| 11 | Commercial Launch Prep | 2 months |
| 12 | Launch | 0.5 months |

### Required Features

- **Adjustable start date** — user sets the program start date and all phases cascade from it
- **Editable durations** — user can change the duration of each phase in months
- **Live Gantt update** — the chart redraws whenever a date or duration changes
- **Phase dependencies** — each phase starts after the previous one ends (sequential by default)
- **Milestone markers** — visually mark Design Review, FDA Submission, and Launch as milestones
- **Total program duration** — display the calculated end-to-end timeline in months

### Display Requirements

**Gantt Chart**
- Horizontal bars proportional to duration
- Phase names on the left
- Month/quarter markers along the top axis
- Color-coded by phase category:
  - Design Control phases: blue
  - Testing phases (V&V): purple
  - Regulatory phases: orange
  - Launch phases: green
  - Milestones: diamond markers in a contrasting color

**Summary Panel**
- Program start date
- Projected submission date
- Projected launch date
- Total program duration in months

### Optional Controls

- Toggle to show/hide phase descriptions
- A "Reset to Defaults" button
- Phase status indicators: Not Started, In Progress, Complete (color-coded dots)

### Design Requirements

- Clean, modern project management aesthetic
- Suitable for executive presentations and program reviews
- Readable at a glance — no clutter
- Mobile-friendly with horizontal scroll on the Gantt chart
- Professional color palette

### Disclaimer

Include this note:

> *This timeline is for planning and illustration purposes only. Actual program timelines vary based on device complexity, regulatory pathway, clinical requirements, and organizational factors.*
