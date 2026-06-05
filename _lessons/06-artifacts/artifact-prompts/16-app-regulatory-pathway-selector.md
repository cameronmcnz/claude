---
layout: lesson
title: "FDA Regulatory Pathway Selector"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# FDA Regulatory Pathway Selector

An interactive decision tree for selecting the right FDA regulatory pathway — 510(k), De Novo, PMA, or Exempt — for medical devices.

## Starter Prompt

Create an interactive decision tree that helps medical device companies determine whether their device requires a 510(k), De Novo, PMA, or is FDA exempt, based on answers to questions about device class, risk, and predicate devices.

---

## Expanded Prompt

Create a Claude Artifact called the **FDA Regulatory Pathway Selector** — an interactive step-by-step decision tool built with HTML, CSS, and JavaScript.

### Goal

Guide medical device professionals through a structured series of questions to identify the most likely FDA regulatory pathway for their device. Replace the experience of manually reading through CFR parts and FDA guidance documents with a clean, interactive tool.

### Audience

Medical device executives, regulatory affairs professionals, product managers, startup founders, and engineers entering the US market for the first time.

### The Four Pathways

| Pathway   | Description |
| --------- | ----------- |
| **Exempt** | Low-risk Class I devices that do not require a premarket submission |
| **510(k)** | Substantial equivalence to a legally marketed predicate device |
| **De Novo** | Novel low-to-moderate risk devices with no valid predicate |
| **PMA** | High-risk Class III devices requiring clinical evidence of safety and effectiveness |

### Decision Tree Logic

Walk users through questions in this sequence:

**Step 1 — Device Classification**
> Is your device a Class I, Class II, or Class III device under 21 CFR?
- I'm not sure → Guide them to the FDA Product Classification Database
- Class I → Go to Step 2
- Class II → Go to Step 3
- Class III → Go to Step 5

**Step 2 — Class I Exemption Check**
> Is your Class I device listed as exempt in 21 CFR Parts 862–892?
- Yes → **Result: Exempt** (general controls only apply)
- No → **Result: 510(k) required**

**Step 3 — Predicate Device**
> Does a legally marketed predicate device exist with the same intended use and similar technological characteristics?
- Yes → Go to Step 4
- No → Go to Step 6

**Step 4 — Substantial Equivalence**
> Does your device raise new questions of safety and effectiveness compared to the predicate?
- No → **Result: 510(k)**
- Yes → Go to Step 6

**Step 5 — PMA Exemption Check**
> Has FDA approved a PMA or Product Development Protocol (PDP) for this device type, or is it reclassified?
- Yes, reclassified to Class II → Go to Step 3
- No → **Result: PMA required**

**Step 6 — De Novo Eligibility**
> Is your device low-to-moderate risk, and could general and special controls provide reasonable assurance of safety and effectiveness?
- Yes → **Result: De Novo request**
- No → **Result: PMA required**

### Result Display

For each outcome, show:

- **Pathway name** (large, prominent)
- **Plain-English explanation** of what the pathway means
- **Typical timeline** (e.g., 510(k): 3–12 months; PMA: 1–3+ years)
- **Key submission requirements** (brief bullet list)
- **FDA resource link suggestion** (e.g., "Visit FDA's 510(k) Premarket Notification page")
- A **Start Over** button

### Design Requirements

- One question displayed at a time — clean, focused, uncluttered
- Progress indicator showing how far through the decision tree the user is
- Large, clear answer buttons
- Smooth transitions between steps
- Professional color palette suited for a regulatory or legal context
- Mobile-friendly
- A **Back** button on every step

### Disclaimer

> *This tool provides general educational guidance only. Regulatory pathway determinations are complex and fact-specific. Always consult with a qualified regulatory affairs professional or FDA directly before making submission decisions.*

---

## Tips for Refining

- *"Add a section for EU MDR pathways as a comparison"*
- *"Add more detail to the De Novo result explaining when it was introduced"*
- *"Add a summary PDF export of the pathway selected and the answers given"*
- *"Extend the tree to cover IVD devices under IVDR"*
