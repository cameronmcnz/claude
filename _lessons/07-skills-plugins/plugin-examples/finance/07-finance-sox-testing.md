---
layout: lesson
title: "SOX Testing"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: sox-testing
order: 7
noindex: true
---

# finance:sox-testing

**Generate SOX sample selections and testing workpapers.**

The most specialised function in the Finance Plugin. Produces formal SOX testing artefacts — sample selection methodology, population definitions, testing scripts, attribute definitions, and workpaper templates — for a given control. Used by internal audit teams, external auditors, and finance teams supporting a SOX 404 programme.

---

## EverClean example

```
finance:sox-testing

Context: EverClean has grown rapidly following Series A and is now subject to 
         SOX 404(b) requirements ahead of a planned IPO in 18 months. We are 
         formalising our internal audit function and need to test our first 
         set of key controls.

Control to test: 
  Control ID: CC-04
  Control name: Cash Disbursement Approval
  Control description: All vendor payments over $5,000 require dual approval 
  from the CFO and one other officer before release. Payments are processed 
  in NetSuite with an electronic approval workflow.
  Control frequency: Every occurrence (transaction-level)
  Control type: Preventive

Population: 847 vendor payments processed in the 12-month period ended 
            June 30, 2026, totalling $4.2M

Risk: Unauthorised or fraudulent disbursements; management override of controls

Confidence level: 95%
Tolerable deviation rate: 5%
```

**What you'll get:** A complete SOX testing workpaper for CC-04 — a statistically valid sample size using attribute sampling at 95% confidence, a step-by-step testing script (what to inspect for each sample item, what constitutes a deviation, how to document exceptions), a workpaper header with all required fields, and a conclusion template for recording results and evaluating whether the control is operating effectively.

---

## Useful follow-up prompts

- *"Two of the sampled payments were approved by only one officer — the CFO was travelling. How do I evaluate whether this is a control deviation and what is the impact on my conclusion?"*
- *"Generate a workpaper for the complementary IT general control — access provisioning to NetSuite's payment approval workflow."*
- *"Write a management response template for the control deficiency finding to include in the SOX 404 report."*
