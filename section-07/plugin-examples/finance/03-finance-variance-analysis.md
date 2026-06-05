---
layout: lesson
title: "Variance Analysis"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: variance-analysis
order: 3
noindex: true
---

# finance:variance-analysis

**Decompose financial variances with narrative explanations.**

Paste your budget versus actuals data and it returns a structured variance analysis — line by line decomposition of what drove each difference, whether it is price, volume, timing, or a one-time item, and a narrative explanation suitable for a management report or investor update.

---

## EverClean example

```
finance:variance-analysis

Period: Q2 2025 (April–June), EverClean pre-revenue phase

Budget vs Actuals:

                          Budget      Actual      Variance
R&D / Engineering        $45,000     $61,400      ($16,400)
Tooling & Prototyping    $30,000     $27,800        $2,200
Marketing & Events       $15,000     $22,600       ($7,600)
Legal & IP               $8,000      $8,000             —
Admin & Overhead         $6,000      $7,320        ($1,320)
Total Operating Spend    $104,000    $127,120      ($23,120)

Context: EverClean is a pre-revenue startup. The board expected a $104k 
         burn rate for Q2. Actual burn was $127k. We need to explain 
         this to investors at next week's board meeting.

Audience: Board of directors
Format: Narrative memo with line-by-line breakdown
```

**What you'll get:** A board-ready variance memo — an executive summary of the overall $23,120 unfavourable variance, a line-by-line breakdown with probable causes (scope creep in engineering, event costs for a trade show, etc.), and a closing paragraph on what the team is doing to manage burn in Q3.

---

## Useful follow-up prompts

- *"We attended the Kitchen & Bath Industry Show in June — that explains $6,800 of the marketing variance. Revise the memo to call this out as a strategic investment, not an overrun."*
- *"Rewrite the executive summary to be two sentences — the CFO wants something she can read aloud at the top of the meeting."*
- *"Project Q3 burn based on Q2 actuals plus the new hire starting in July at $8,500/month."*
