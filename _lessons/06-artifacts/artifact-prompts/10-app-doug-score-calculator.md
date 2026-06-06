---
layout: lesson
title: "DougScore Calculator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# DougScore Calculator

Score any vehicle using Doug DeMuro's famous 100-point format — Weekend and Daily categories, total DougScore, and a polished results display.


## Starter Prompt

Create a DougScore calculator based on Doug DeMuro's YouTube scoring format. Score a vehicle across Weekend categories (Styling, Acceleration, Handling, Fun Factor, Cool Factor) and Daily categories (Features, Comfort, Quality, Practicality, Value), then calculate the total DougScore out of 100.

---

## Expanded Prompt

Create a Claude Artifact called the **DougScore Calculator** — an interactive vehicle scoring tool built with HTML, CSS, and JavaScript, modeled on automotive reviewer Doug DeMuro's signature scoring format.

### Goal

Build a fun, interactive scoring tool that lets users rate any vehicle across the same categories Doug uses in his YouTube reviews, calculate the total DougScore out of 100, and display a polished results card.

### Scoring Categories

**Weekend Score (out of 45)**

| Category    | Max Points |
| ----------- | ---------: |
| Styling     |         10 |
| Acceleration|         10 |
| Handling    |         10 |
| Fun Factor  |          7 |
| Cool Factor |          8 |

**Daily Score (out of 55)**

| Category    | Max Points |
| ----------- | ---------: |
| Features    |         15 |
| Comfort     |         10 |
| Quality     |         10 |
| Practicality|         10 |
| Value       |         10 |

**Total DougScore = Weekend Score + Daily Score (out of 100)**

### Input Requirements

- A text field for the vehicle name (e.g., "2024 Porsche 911 GT3")
- A slider or numeric input for each scoring category
- Enforce min/max limits per category
- Running subtotals for Weekend and Daily as scores are entered

### Results Display

Show:

- Vehicle name as the heading
- Weekend Score (X / 45)
- Daily Score (X / 55)
- Total DougScore (X / 100) — large and prominent
- A brief characterization based on the score (e.g., "Excellent", "Great Daily Driver", "Weekend Warrior")
- A breakdown bar or visual for each category

### Design Requirements

- Clean, automotive-inspired design
- Bold typography for the final score
- Color-coded bars or gauges for each category
- Mobile-friendly layout
- A "Score Another Car" reset button

### Technical Requirements

- Single self-contained HTML file
- No external libraries required
- Works immediately without setup

---

## Tips for Refining

- *"Pre-fill the scores for a specific car I describe"*
- *"Add a comparison view to score two cars side by side"*
- *"Export the score card as an image"*
- *"Add a note field for each category"*
