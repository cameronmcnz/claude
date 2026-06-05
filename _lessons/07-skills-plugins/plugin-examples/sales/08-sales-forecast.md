---
layout: lesson
title: "Sales Forecast"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: sales
function: forecast
order: 0
noindex: true
---

# sales:forecast

**Generate weighted sales forecasts with best/likely/worst scenarios and gap analysis.**

The most analytical function in the Sales Plugin. Takes your pipeline with deal values, stages, and close probabilities and produces a three-scenario forecast — best case, most likely, and worst case — with a gap analysis against target and specific recommendations for closing the gap. Designed for weekly or monthly review with founders or sales leadership.

---

## EverClean example

```
sales:forecast

Forecast period: July 2025
Revenue target: $25,000 (5 units at average $5,000)

Pipeline (with assigned close probabilities):

Deal                          Value    Stage              Close Prob   Expected Close
----------------------------  -------  -----------------  -----------  ---------------
Westlake Build (Hargrove)     $11,400  Verbal yes         85%          July 16
Stonehaven (2-unit trial)     $18,000  Negotiation        60%          July 25
Henderson Project             $9,800   Design consult     40%          Aug 5 (slipped)
Holloway quote to send        $14,200  Quoted today       35%          July 28
Ashworth — Malibu             $9,800   Quote sent 8d      20%          Unknown
Premier Kitchens Dallas       $27,000  Spec sheet only    15%          Unknown

Assumptions:
- Westlake probability drops to 30% if signed form not received by July 18
- Stonehaven is contingent on confirming Aug 15 delivery
- Henderson likely slips to August based on build timeline
```

**What you'll get:** A three-scenario July forecast — best case (Westlake + Stonehaven + Holloway all close: ~$43,600), most likely (Westlake + Stonehaven close, others push: ~$29,400), worst case (only Westlake closes, Stonehaven misses on delivery risk: ~$11,400) — each with a probability-weighted expected value. Includes a gap analysis against the $25k target and a ranked list of the two or three specific actions most likely to close the gap if the worst-case scenario begins to materialise.

---

## Useful follow-up prompts

- *"The Stonehaven delivery date is in doubt — recalculate the forecast if Stonehaven drops to 20% probability."*
- *"What does our pipeline need to look like in August to hit $40k given the current conversion rates?"*
- *"Write a one-paragraph forecast summary I can include in this week's investor update — honest but not alarming."*
