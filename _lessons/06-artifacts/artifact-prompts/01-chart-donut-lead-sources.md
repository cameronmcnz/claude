---
layout: lesson
title: "Donut Chart"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Donut Chart

An interactive donut chart showing marketing lead sources — a clean example of pasting data into Claude and getting a polished, interactive visualization back.

## Starter Prompt

I have data about where our leads come from: Organic search 34%, Paid ads 28%, Referral 18%, Events 12%, Other 8%. Make a clean donut chart with these percentages and a legend.

---

## Expanded Prompt

Create an interactive donut chart as a Claude Artifact using HTML, CSS, and JavaScript.

### Data to Visualize

Use the following lead source breakdown:

| Source         | Percentage |
| -------------- | ---------: |
| Organic Search |        34% |
| Paid Ads       |        28% |
| Referral       |        18% |
| Events         |        12% |
| Other          |         8% |

### Chart Requirements

- Render a clean donut chart with clearly sized segments
- Each segment should be proportional to its percentage value
- Include a center label showing either the total or a selected segment's value
- Add a legend below or beside the chart with color swatches and labels

### Interactivity

- Hovering or clicking a segment highlights it and displays the label and percentage
- The center of the donut updates dynamically to show the hovered segment's name and value
- Segments animate in smoothly on load

### Design Requirements

- Use a modern, professional color palette with good contrast between segments
- Clean sans-serif typography
- Responsive layout that works on desktop and mobile
- Minimal, uncluttered design with generous whitespace

### Technical Requirements

- Single self-contained HTML file
- No external libraries required (use SVG or Canvas)
- Works immediately without any setup or data upload

---

## Tips for Refining

- *"Swap in my own data: [your categories and percentages]"*
- *"Use our brand colors: [hex codes]"*
- *"Add a title above the chart"*
- *"Make it a pie chart instead"*
