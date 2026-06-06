---
layout: lesson
title: "Medtech Executive KPI Dashboard"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Medtech Executive KPI Dashboard

A board-level KPI dashboard for medical device companies — financial performance, quality metrics, operations, and product pipeline in one polished view.


## Starter Prompt

Create a polished executive KPI dashboard for a medical device company showing key metrics like revenue by product line, complaint rate, on-time delivery, regulatory submission success, and CAPA closure rate — styled for a board-level presentation.

---

## Expanded Prompt

Create a Claude Artifact called the **Medtech Executive KPI Dashboard** — a boardroom-ready performance dashboard built with HTML, CSS, and JavaScript.

### Goal

Simulate the kind of executive scorecard a medical device CEO, CFO, or board member would review in a quarterly business review. Show financial, quality, operational, and regulatory metrics in a single polished view that demonstrates the power of a live, shareable dashboard built in Claude.

### Audience

Medical device CEOs, CFOs, VPs of Operations, Chief Quality Officers, board members, and investors reviewing company-wide performance.

### Dashboard Layout

Organize the dashboard into four sections:

---

#### Section 1 — Financial Performance

**KPI Cards (top row):**

| Metric | Value | vs. Target |
| ------ | ----- | ---------- |
| Total Revenue (YTD) | $47.2M | 94% of target |
| Gross Margin | 61% | On target |
| R&D Spend | $8.1M | 17% of revenue |
| New Product Revenue | $12.4M | 26% of total |

**Revenue by Product Line (bar chart):**

| Product Line | Revenue |
| ------------ | ------- |
| Diagnostic Devices | $19.8M |
| Monitoring Systems | $15.3M |
| Surgical Tools | $8.6M |
| Software & Services | $3.5M |

**Quarterly Revenue Trend (line chart, 8 quarters):**

| Quarter | Revenue |
| ------- | ------- |
| Q3 2024 | $9.8M |
| Q4 2024 | $11.2M |
| Q1 2025 | $10.1M |
| Q2 2025 | $11.8M |
| Q3 2025 | $10.9M |
| Q4 2025 | $12.3M |
| Q1 2026 | $11.4M |
| Q2 2026 | $12.1M |

---

#### Section 2 — Quality & Regulatory

**KPI Cards:**

| Metric | Value | Status |
| ------ | ----- | ------ |
| Complaint Rate (per 1,000 units) | 2.3 | On target |
| MDR Filings (YTD) | 7 | Within threshold |
| Open CAPAs | 4 | 2 overdue |
| Regulatory Submissions On Time | 92% | Above target |

**CAPA Closure Rate by Quarter (bar chart):**

| Quarter | % Closed on Time |
| ------- | ---------------- |
| Q3 2024 | 78% |
| Q4 2024 | 82% |
| Q1 2025 | 75% |
| Q2 2025 | 88% |
| Q3 2025 | 91% |
| Q4 2025 | 85% |
| Q1 2026 | 89% |
| Q2 2026 | 93% |

---

#### Section 3 — Operations & Supply Chain

**KPI Cards:**

| Metric | Value | Status |
| ------ | ----- | ------ |
| On-Time Delivery | 96% | Above target |
| Manufacturing Yield | 98.2% | On target |
| Inventory Days on Hand | 42 days | Slightly high |
| Supplier Scorecard (avg) | 87/100 | On target |

**On-Time Delivery by Quarter (line chart, same 8 quarters, values ranging 91–97%)**

---

#### Section 4 — Pipeline & Growth

**KPI Cards:**

| Metric | Value |
| ------ | ----- |
| Active Development Programs | 5 |
| Programs in FDA Review | 2 |
| Expected Launches (next 12 months) | 2 |
| Patent Applications Filed (YTD) | 8 |

**Pipeline Milestone Table:**

| Program | Stage | Expected Submission | Expected Launch |
| ------- | ----- | ------------------- | --------------- |
| Project Apex | V&V | Q4 2026 | Q2 2027 |
| Project Orion | FDA Review | — | Q3 2026 |
| Project Nova | Design Input | Q2 2027 | Q4 2027 |
| Project Helix | Feasibility | Q1 2028 | Q3 2028 |
| Project Crest | FDA Review | — | Q4 2026 |

---

### Design Requirements

- Premium executive dashboard aesthetic — dark sidebar or clean white with strong typography
- Section tabs or a scrollable single-page layout
- Color-coded KPI cards: green (on/above target), yellow (approaching threshold), red (below target or overdue)
- Charts rendered in pure JavaScript — no external libraries required
- Status badges on pipeline table: In Progress, FDA Review, On Track, At Risk
- A header with company name placeholder, dashboard title, and report period
- Print-friendly layout option (optional)
- Suitable for a live board meeting or investor presentation

### Disclaimer

> *All data in this dashboard is simulated for demonstration purposes only. It does not represent the financial, quality, or operational performance of any real company.*

---

## Tips for Refining

- *"Add a market share trend chart"*
- *"Make the revenue chart interactive with clickable product line drill-downs"*
- *"Swap in data for a different industry (SaaS, manufacturing, retail)"*
- *"Add a slide export or print view"*
