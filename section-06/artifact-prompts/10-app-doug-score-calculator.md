---
layout: lesson
title: "DougScore Calculator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# DougScore Calculator

## Starter Prompt

Create a DougScore calculator based on Doug DeMuro's YouTube scoring format. Score a vehicle across Weekend categories (Styling, Acceleration, Handling, Fun Factor, Cool Factor) and Daily categories (Features, Comfort, Quality, Practicality, Value), then calculate the total DougScore out of 100.

---

## Expanded Prompt

Create a Claude Artifact for an interactive DougScore Calculator, inspired by Doug DeMuro's vehicle scoring format.

### Goal

Build a calculator that lets users score any vehicle using two categories — Weekend and Daily — then calculate the final DougScore out of 100.

### Vehicle Information

Ask the user to enter:

- Year
- Make
- Model
- Video link (optional)
- Filming location (optional)
- Vehicle country (optional)

### Weekend Score Categories

Each scored from 1 to 10:

| Category     | Score |
| ------------ | ----- |
| Styling      | 1–10  |
| Acceleration | 1–10  |
| Handling     | 1–10  |
| Fun Factor   | 1–10  |
| Cool Factor  | 1–10  |

**Weekend Total = sum of the five scores (max 50)**

### Daily Score Categories

Each scored from 1 to 10:

| Category    | Score |
| ----------- | ----- |
| Features    | 1–10  |
| Comfort     | 1–10  |
| Quality     | 1–10  |
| Practicality | 1–10 |
| Value       | 1–10  |

**Daily Total = sum of the five scores (max 50)**

### Final Calculation

```
DougScore = Weekend Total + Daily Total  (max 100)
```

### Example Data

Preload with this sample vehicle:

| Field        | Value           |
| ------------ | --------------- |
| Year         | 2020            |
| Make         | McLaren         |
| Model        | Speedtail       |
| Styling      | 8               |
| Acceleration | 10              |
| Handling     | 10              |
| Fun Factor   | 10              |
| Cool Factor  | 10              |
| Weekend Total | 48             |
| Features     | 7               |
| Comfort      | 4               |
| Quality      | 7               |
| Practicality | 2               |
| Value        | 6               |
| Daily Total  | 26              |
| DougScore    | 74              |

### Display Requirements

Show:

- Vehicle name and details
- Weekend score breakdown with individual scores
- Daily score breakdown with individual scores
- Weekend Total and Daily Total
- Final DougScore (prominently displayed out of 100)
- A short plain-English interpretation of the score

### Design Requirements

- Clean, fun, automotive dashboard aesthetic
- Mobile-friendly
- Each individual score clearly labeled as out of 10
- Final DougScore clearly labeled as out of 100
- Easy to read at a glance
