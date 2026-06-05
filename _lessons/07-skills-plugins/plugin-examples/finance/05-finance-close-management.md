---
layout: lesson
title: "Close Management"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: close-management
order: 0
noindex: true
---

# finance:close-management

**Manage month-end close with task sequencing and dependencies.**

Generates a structured month-end close checklist — with tasks sequenced in the correct dependency order, owners assigned, and deadlines set relative to the close date. Adapts to your team size, accounting system, and close complexity. Flags tasks that block downstream work if delayed.

---

## EverClean example

```
finance:close-management

Close period: June 2025
Close target date: July 8, 2025 (5 business days after month-end)

Team:
- 1 founder handling finance (part-time, limited accounting background)
- 1 external bookkeeper (contracted, 4 hours/week)
- 1 CPA advisor (reviews only, not in the books)

Accounting system: QuickBooks Online

Key activities this close:
- First month with payroll (2 founders, bi-weekly)
- Insurance prepaid to amortize
- Engineering accrual (invoice not received)
- 3 consignment units shipped to showrooms — need inventory tracking
- Convertible note interest accrual
- Bank reconciliation
- Investor financial statements due July 10

Complexity: Simple — pre-revenue startup, no AR, minimal AP
```

**What you'll get:** A day-by-day close task list from July 1–8 — each task named, sequenced (e.g., bank rec must complete before financial statements), assigned to an owner, given a due date, and flagged if it blocks something downstream. Highlights the two tasks most likely to delay the July 10 investor deadline.

---

## Useful follow-up prompts

- *"The engineering invoice still hasn't arrived by July 5 — what do we do and how does it affect the close timeline?"*
- *"Turn this into a repeatable close template we can use every month, with placeholders for items that change."*
- *"Which tasks can the founder handle without the bookkeeper and which ones need a trained eye?"*
