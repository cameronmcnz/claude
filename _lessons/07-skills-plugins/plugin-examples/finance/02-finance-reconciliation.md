---
layout: lesson
title: "Reconciliation"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: reconciliation
order: 2
noindex: true
---

# finance:reconciliation

**Reconcile accounts — bank, GL-to-subledger, and intercompany.**

Paste two sets of records and describe the reconciliation type, and it identifies the differences, categorises each one (timing, error, missing entry), and produces a formatted reconciliation workpaper with an explanation for each variance.

---

## EverClean example

```
finance:reconciliation

Type: Bank reconciliation

GL cash balance June 30: $463,840

Bank statement ending balance June 30: $478,215

Known differences:
- Cheque #1042 issued June 29 to tooling vendor ($8,200) — not yet cleared
- Cheque #1043 issued June 30 to engineering consultant ($9,600) — not yet cleared
- Wire received June 30 from showroom deposit ($3,425) — posted in bank, 
  not yet recorded in GL

Unknown: GL and bank still do not agree after the above — difference of $420. 
         Need help identifying and categorising it.

Period: June 2025
Preparer: EverClean Finance Team
```

**What you'll get:** A formatted bank reconciliation workpaper — GL balance adjusted for outstanding items, bank balance adjusted for deposits in transit, a reconciled balance that ties, and an investigation note on the unexplained $420 difference with suggested next steps to trace it.

---

## Useful follow-up prompts

- *"The $420 difference turned out to be a bank fee we weren't notified about — prepare the journal entry to record it."*
- *"Build a reconciliation template we can reuse each month for EverClean's operating account."*
- *"We have three showroom partners holding consignment inventory — what would an inventory-to-subledger reconciliation look like for those units?"*
