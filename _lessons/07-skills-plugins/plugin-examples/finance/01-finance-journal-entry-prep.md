---
layout: lesson
title: "Journal Entry Prep"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: journal-entry-prep
order: 0
noindex: true
---

# finance:journal-entry-prep

**Prepare month-end journal entries and accruals.**

A step up from `finance:journal-entry` — this function handles the full slate of recurring and judgement-based entries needed to close a period properly. Give it your open items and period context and it prepares a complete set of entries with supporting rationale for each accrual.

---

## EverClean example

```
finance:journal-entry-prep

Period: June 2025 (EverClean's first month post-seed funding)

Open items to accrue or adjust:
- Engineering consulting invoice not yet received — estimated $22,000 based 
  on the SOW milestone reached June 28
- 6-month product liability insurance policy paid upfront June 1 — $9,600 total
- 3 units shipped to showroom partners June 30, recorded at manufacturing cost 
  of $2,100 each — not yet invoiced (consignment terms)
- Angel investor convertible note accrued interest at 6% annual rate
- Founder salaries of $12,500 each (x2) paid July 3 for June work

Basis: Accrual accounting, US GAAP
```

**What you'll get:** A full set of month-end journal entries — accrued expenses, prepaid amortization, deferred revenue, interest accrual, and accrued payroll — each with account codes, amounts, and a one-line rationale explaining the accounting treatment.

---

## Useful follow-up prompts

- *"Which of these entries will reverse in July and should be flagged as reversing entries?"*
- *"The engineering consultant came back with an invoice for $24,500 — prepare the entry to true up the accrual."*
- *"Prepare a summary memo of all June accruals suitable for our external bookkeeper to review."*
