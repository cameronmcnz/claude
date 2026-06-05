---
layout: lesson
title: "Nearest Wind Turbine Locator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Nearest Wind Turbine Locator

## Starter Prompt

Create an interactive app where I can enter my GPS coordinates, upload a CSV of wind turbine locations, and find the nearest turbine with the distance shown on a map.

---

## Expanded Prompt

Create a Claude Artifact called the **Nearest Wind Turbine Locator** — an interactive web app built with HTML, CSS, and JavaScript.

### Goal

Let users enter GPS coordinates, load a wind turbine dataset, calculate the nearest turbine using the Haversine formula, and display both locations on an interactive zoomable map.

### Dataset Structure

The CSV dataset has these columns:

| Column     | Meaning                   |
| ---------- | ------------------------- |
| `case_id`  | Unique turbine record ID  |
| `t_state`  | State                     |
| `t_county` | County                    |
| `p_name`   | Project or wind farm name |
| `xlong`    | Longitude                 |
| `ylat`     | Latitude                  |

### Required Features

- Upload or paste a CSV dataset of wind turbine locations
- Enter current latitude and longitude
- Click **Find Nearest Wind Turbine**
- Display the nearest turbine result
- Show both locations on an interactive map

### Calculation Requirements

- Use the **Haversine formula** for GPS distance
- Display distance in both **miles** and **kilometers**

### Result Display

When the nearest turbine is found, show:

- Project name
- Case ID
- State and county
- Turbine latitude and longitude
- Distance in miles
- Distance in kilometers

### Map Requirements

- Zoomable interactive map (use Leaflet if available, otherwise build an SVG visualization)
- Distinct markers for user location and nearest turbine
- Visual line connecting the two points
- Different colors or icons for each marker type

### Input Validation

Validate:

- Missing latitude or longitude
- Latitude outside −90 to 90
- Longitude outside −180 to 180
- Missing or malformed CSV rows
- Rows missing `xlong` or `ylat` values

### Default Sample Data

Include this sample so the app works before a full CSV is uploaded:

```csv
case_id,t_state,t_county,p_name,xlong,ylat
3123484,OK,Ellis County,25 Mile Creek,-99.7994,36.4407
```

### Design Requirements

- Modern geospatial dashboard aesthetic
- Input cards, result cards, and a map panel
- Clean spacing, readable labels, professional colors
- Clear error messages for invalid input
- Responsive on desktop and mobile
