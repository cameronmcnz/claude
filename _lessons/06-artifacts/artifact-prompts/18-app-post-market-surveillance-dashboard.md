---
layout: lesson
title: "Post-Market Surveillance Dashboard"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Post-Market Surveillance Dashboard

An executive dashboard for tracking post-market safety, complaint rates, MDR filings, and CAPA status — styled for quarterly board reviews.

## Starter Prompt

Create a simulated post-market surveillance dashboard for a medical device company showing complaint trends by quarter, MDR filing counts, adverse event categories, and CAPA status — styled for an executive boardroom review.

---

## Expanded Prompt

Create a Claude Artifact called the **Post-Market Surveillance (PMS) Dashboard** — an interactive executive dashboard built with HTML, CSS, and JavaScript.

### Goal

Simulate the kind of post-market surveillance reporting that medical device executives review in quarterly business reviews and board meetings. Show complaint trends, MDR filings, adverse event breakdowns, and CAPA status in a single, polished view that demonstrates what a live data dashboard could look like.

### Audience

Medical device executives, VP of Quality, Chief Medical Officers, regulatory affairs leaders, and board members reviewing product safety and quality performance.

### Dashboard Sections

**1. Executive Summary Cards (top row)**

Display four KPI cards:

| Metric | Simulated Value |
| ------ | --------------- |
| Total Complaints (YTD) | 142 |
| MDR Filings (YTD) | 7 |
| Open CAPAs | 4 |
| Complaint Rate per 1,000 Units | 2.3 |

Color-code each card: green if within target, yellow if approaching threshold, red if over threshold.

**2. Complaint Trend Chart**

A line or bar chart showing complaint volume by quarter over the past 8 quarters:

| Quarter | Complaints |
| ------- | ---------- |
| Q3 2024 | 18 |
| Q4 2024 | 22 |
| Q1 2025 | 19 |
| Q2 2025 | 25 |
| Q3 2025 | 21 |
| Q4 2025 | 17 |
| Q1 2026 | 14 |
| Q2 2026 | 6 |

Add a trend line and a target threshold line at 20 complaints per quarter.

**3. Adverse Event Categories**

A donut or bar chart breaking down complaints by category:

| Category | Count |
| -------- | ----- |
| Device malfunction | 54 |
| Labeling / IFU issue | 28 |
| Performance concern | 22 |
| Packaging defect | 19 |
| Software issue | 12 |
| Other | 7 |

**4. MDR Filing Tracker**

A table listing recent MDR filings:

| Filing # | Date | Event Type | Product | Status |
| -------- | ---- | ---------- | ------- | ------ |
| MDR-2026-007 | May 2026 | Malfunction | Model X200 | Submitted |
| MDR-2026-006 | Apr 2026 | Injury | Model X100 | Closed |
| MDR-2026-005 | Mar 2026 | Malfunction | Model X200 | Closed |
| MDR-2025-004 | Nov 2025 | Malfunction | Model X100 | Closed |

Color-code status badges: Submitted = yellow, Closed = green, Under Review = orange.

**5. CAPA Status Tracker**

A table or card view showing open corrective actions:

| CAPA ID | Issue | Owner | Opened | Target Close | Status |
| ------- | ----- | ----- | ------ | ------------ | ------ |
| CAPA-042 | Recurring connector failure | J. Morales | Jan 2026 | Jul 2026 | In Progress |
| CAPA-039 | IFU clarity improvement | R. Chen | Oct 2025 | Jun 2026 | In Progress |
| CAPA-038 | Software edge case fix | L. Park | Sep 2025 | May 2026 | Overdue |
| CAPA-035 | Packaging seal improvement | M. Torres | Aug 2025 | Apr 2026 | Overdue |

Highlight overdue CAPAs in red.

### Design Requirements

- Executive-grade dashboard layout with a dark or light professional theme
- Card-based sections with clear headings
- Charts rendered with JavaScript (no external libraries required)
- Color-coded KPIs, badges, and status indicators throughout
- Clean data tables with alternating row shading
- A header with company name placeholder, dashboard title, and report date
- Suitable for a live boardroom presentation or a printed PDF

### Disclaimer

> *All data in this dashboard is simulated for demonstration purposes only. It does not represent real product performance, complaint data, or regulatory filings.*

---

## Tips for Refining

- *"Add a trend arrow to each KPI card showing whether the metric is improving or declining"*
- *"Add a section for field corrective actions (recalls)"*
- *"Make the complaint trend chart interactive with hover tooltips"*
- *"Add a date range selector to filter by quarter"*
