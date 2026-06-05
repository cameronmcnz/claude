---
layout: lesson
title: "Healthcare Device Risk Heat Map Generator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Healthcare Device Risk Heat Map Generator

An interactive 5×5 risk heat map for entering, scoring, and visualizing project or device risks by likelihood and impact.

## Starter Prompt

Create an interactive risk heat map tool for healthcare device executives where users can enter risks, score them by likelihood and impact, and see a color-coded 5x5 heat map with a ranked risk list and recommended actions.

---

## Expanded Prompt

Create a professional Claude Artifact called the **Healthcare Device Risk Heat Map Generator**.

### Goal

Build an interactive risk assessment dashboard for executives and teams in the healthcare device industry. Users enter risks, score them, and the tool generates a visual heat map, a ranked risk register, recommended actions, and an executive summary.

### Audience

Healthcare device executives, product leaders, quality and regulatory teams, engineering leaders, operations leaders, and risk and compliance stakeholders.

### Risk Inputs

For each risk, collect:

- Risk name
- Risk category (see list below)
- Short description
- Likelihood score: 1 to 5
- Impact score: 1 to 5
- Risk owner
- Current mitigation plan
- Optional notes

### Risk Categories

Patient safety, Product quality, Regulatory compliance, Cybersecurity, Supply chain, Manufacturing, Clinical validation, Data privacy, Software reliability, Market launch, Reputation, Financial impact

### Scoring Logic

```
Risk Score = Likelihood × Impact
```

| Score Range | Risk Level |
| ----------- | ---------- |
| 1–4         | Low        |
| 5–9         | Moderate   |
| 10–16       | High       |
| 17–25       | Critical   |

### Heat Map

Render a 5×5 matrix:

- X-axis: Impact (1 to 5)
- Y-axis: Likelihood (1 to 5)
- Plot each risk in the correct cell
- Color code: Low = green, Moderate = yellow, High = orange, Critical = red

### Display Requirements

**1. Executive Summary**
- Total risks entered
- Number of critical risks
- Number of high risks
- Top 3 risks requiring immediate attention

**2. Risk Heat Map**
- Clear 5×5 matrix
- Color-coded zones
- Readable in a boardroom setting

**3. Ranked Risk Register**
- Sorted highest to lowest score
- Columns: Name, Category, Likelihood, Impact, Score, Level, Owner, Mitigation

**4. Recommended Actions**
- Practical mitigation suggestions based on risk level
- Highlight critical risks requiring executive attention

### Preloaded Example Risks

| Risk Name | Category | Likelihood | Impact |
| --------- | -------- | ---------- | ------ |
| Device firmware vulnerability | Cybersecurity | 4 | 5 |
| Supplier delay for critical sensor | Supply chain | 3 | 4 |
| Incomplete clinical validation evidence | Clinical validation | 3 | 5 |
| Post-market adverse event trend | Patient safety | 2 | 5 |
| Regulatory submission delay | Regulatory compliance | 4 | 4 |

### Design Requirements

- Premium, executive-friendly dashboard layout
- Cards, tables, and color-coded badges
- Clean section headings and polished typography
- Suitable for a live boardroom workshop or strategy session
- Avoid clutter — prioritize clarity and decision-making value

### Disclaimer

> *This tool is for educational and planning purposes only. It does not replace formal risk management, regulatory review, quality system procedures, clinical evaluation, or legal advice.*

---

## Tips for Refining

- *"Remove the healthcare-specific categories and make it generic for any project"*
- *"Add a CSV export for the risk register"*
- *"Add a trend view showing how risk scores changed over time"*
- *"Add a print-friendly boardroom report view"*
