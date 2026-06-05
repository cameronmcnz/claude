---
layout: lesson
title: "Tip Calculator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Tip Calculator

## Starter Prompt

Create a tip calculator that tips 12% on buffet-style food and 18% on everything else. Do not tip on the tax.

---

## Expanded Prompt

Create a Claude Artifact for an interactive Tip Calculator.

### Goal

Build a clean, easy-to-use calculator that helps users calculate the correct tip based on the type of meal, without accidentally tipping on the tax amount.

### Tip Rules

- Buffet-style food: tip **12%**
- All other food or service types: tip **18%**
- Tip is calculated on the **subtotal only** — never on tax

### Required Inputs

Ask the user for:

- Subtotal (before tax)
- Tax amount
- Meal type: **Buffet** or **Other**

### Calculation Logic

```
If Buffet:   Tip = Subtotal × 0.12
If Other:    Tip = Subtotal × 0.18
Total:       Subtotal + Tax + Tip
```

### Display Results

Show a clear breakdown with:

- Subtotal
- Tax amount
- Tip percentage used
- Tip amount
- Final total

### Design Requirements

- Clean, modern layout styled like a restaurant bill or receipt
- Mobile-friendly
- Easy for anyone to use without instructions
- Make it visually obvious that the tip is calculated before tax
- Use clear labels and well-spaced inputs
