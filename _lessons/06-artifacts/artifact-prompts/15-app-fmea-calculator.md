---
layout: lesson
title: "FMEA Risk Calculator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# FMEA Risk Calculator

An interactive Failure Mode and Effects Analysis tool with Severity, Occurrence, and Detection scoring that calculates Risk Priority Numbers automatically.

## Starter Prompt

Create an interactive FMEA (Failure Mode and Effects Analysis) table for medical devices where I can enter failure modes, rate Severity, Occurrence, and Detection from 1–10, and automatically calculate the RPN score with color-coded risk levels.

---

## Expanded Prompt

Create a Claude Artifact called the **Medical Device FMEA Risk Calculator** — an interactive Failure Mode and Effects Analysis tool built with HTML, CSS, and JavaScript.

### Goal

Build a professional FMEA table that allows quality engineers, product teams, and risk managers to enter failure modes, score them across three dimensions, and instantly see calculated Risk Priority Numbers (RPN) with color-coded severity levels and a sorted risk register.

### Audience

Medical device quality engineers, design engineers, regulatory affairs teams, product managers, and risk and compliance leads.

### What is FMEA?

FMEA is a structured method for identifying potential failure modes in a product or process, assessing their impact, and prioritizing which risks need mitigation. It is required under ISO 14971 (medical device risk management) and FDA design control expectations.

### Required Inputs Per Row

For each failure mode, collect:

- **Item / Function** — the component or process step being analyzed
- **Failure Mode** — how this item could fail
- **Failure Effect** — the consequence of that failure on the patient or user
- **Severity (S)** — how serious is the effect? (1 = negligible, 10 = catastrophic)
- **Failure Cause** — the root cause of the failure mode
- **Occurrence (O)** — how likely is the failure to occur? (1 = almost never, 10 = almost certain)
- **Current Controls** — existing design or process controls
- **Detection (D)** — how likely is the failure to be detected before reaching the patient? (1 = almost certain detection, 10 = undetectable)
- **Recommended Actions** — mitigation steps to reduce risk
- **Responsible Owner** — who owns the action

### RPN Calculation

```
RPN = Severity × Occurrence × Detection
Maximum RPN = 1000
```

### Risk Level Color Coding

| RPN Range | Risk Level | Color  |
| --------- | ---------- | ------ |
| 1–49      | Low        | Green  |
| 50–99     | Moderate   | Yellow |
| 100–199   | High       | Orange |
| 200–1000  | Critical   | Red    |

### Display Requirements

**1. FMEA Table**
- All input fields inline and editable
- RPN auto-calculates as S, O, D values are entered
- Each row color-coded by risk level
- Ability to add and delete rows

**2. Risk Summary Panel**
- Total failure modes entered
- Count by risk level (Critical, High, Moderate, Low)
- Highest RPN item highlighted
- Average RPN across all items

**3. Sorted Risk Register**
- Separate view sorted highest RPN to lowest
- Quick scan of the most critical items

### Preloaded Example Rows

| Item | Failure Mode | Effect | S | Cause | O | Controls | D | RPN |
| ---- | ------------ | ------ | - | ----- | - | -------- | - | --- |
| Battery | Battery depletion during use | Device shuts down mid-procedure | 8 | Inadequate charge indicator | 3 | Low battery warning | 4 | 96 |
| Firmware | Software crash | Incorrect reading displayed | 9 | Unhandled exception in edge case | 2 | Software testing | 5 | 90 |
| Connector | Loose cable connection | Intermittent signal loss | 6 | Mechanical wear over time | 4 | Connection indicator light | 6 | 144 |
| Display | Screen failure | User cannot read output | 7 | Display driver fault | 2 | Alarm if display unresponsive | 3 | 42 |

### Design Requirements

- Clean, professional table layout suitable for a design review or audit
- Mobile-friendly with horizontal scroll on small screens
- Export to CSV button (optional but impressive)
- Clear typography and generous spacing
- Color-coded badges for risk levels throughout
- Tone: serious, regulatory-grade, boardroom-ready

### Disclaimer

> *This tool is for educational and planning purposes only. It does not replace a formal FMEA conducted under ISO 14971, your quality management system procedures, or regulatory guidance.*

---

## Tips for Refining

- *"Add a post-action RPN column to track improvement after mitigation"*
- *"Add a print view formatted for a design review meeting"*
- *"Remove the medical device context and make it generic for manufacturing"*
- *"Add a CSV export button"*
