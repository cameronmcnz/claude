---
layout: lesson
title: "Nearest Wind Turbine Locator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Nearest Wind Turbine Locator

Upload a CSV of wind turbine locations, enter GPS coordinates, and find the nearest turbine with distance shown on a map — a good example of Claude building a data-driven interactive tool.

<div style="margin:1.5rem 0;padding:1rem 1.25rem;background:#fff8f0;border:2px solid #ff6b00;border-radius:10px;display:flex;align-items:center;gap:1rem;">
  <span style="font-size:1.5rem;">📥</span>
  <div>
    <strong style="color:#c2410c;">Sample data file required:</strong>
    <a href="{{ site.baseurl }}/turbines.csv" download style="color:#c2410c;font-weight:700;margin-left:0.4rem;">Download turbines.csv</a>
    — upload this file into the app below to try it out.
  </div>
</div>


## Starter Prompt

Create an interactive app where I can enter my GPS coordinates, upload a CSV of wind turbine locations, and find the nearest turbine with the distance shown on a map.

---

## Expanded Prompt

Create a Claude Artifact called the **Nearest Wind Turbine Locator** — an interactive browser-based tool built with HTML, CSS, and JavaScript.

### Goal

Build a tool that lets users upload a dataset of wind turbine GPS coordinates, enter their own location, and instantly find the closest turbine with the distance calculated and displayed on an interactive map.

### Audience

Renewable energy professionals, field technicians, site assessors, researchers, and developers working with wind energy data.

### Required Features

**1. User Location Input**
- A form where the user enters their latitude and longitude
- Optionally, a button to use the browser's built-in geolocation API

**2. CSV Upload**
- A file upload input that accepts a CSV file
- Expected CSV format: columns for turbine ID, latitude, longitude, and optionally name/site/capacity
- Parse the CSV client-side using JavaScript — no server required

**3. Distance Calculation**
- Use the Haversine formula to calculate great-circle distance between the user's location and each turbine
- Return the nearest turbine with the calculated distance in both kilometers and miles

**4. Results Display**
- Show the nearest turbine's ID, name (if available), coordinates, and distance
- Display a ranked list of the 5 nearest turbines

**5. Map View**
- Render a simple interactive map using Leaflet.js (loaded from CDN)
- Plot the user's location and the nearest turbine
- Draw a line between them
- Optionally show all turbines as smaller markers

### Sample CSV Format

```csv
turbine_id,name,latitude,longitude,capacity_mw
WT001,North Ridge A,43.6532,-79.3832,2.5
WT002,North Ridge B,43.6601,-79.3900,2.5
WT003,East Farm,43.7102,-79.4200,3.0
```

### Design Requirements

- Clean, functional interface suitable for field use
- Mobile-friendly layout
- Clear error handling if the CSV format is wrong or location is missing
- Map takes up a prominent portion of the screen

### Technical Requirements

- Single self-contained HTML file
- Leaflet.js loaded via CDN for mapping
- All other logic in vanilla JavaScript — no build tools required
- Works immediately in any modern browser

---

## Tips for Refining

- *"Add a radius filter to show only turbines within 50km"*
- *"Color-code turbines by capacity"*
- *"Add a search bar to look up turbines by name"*
- *"Make the map full-screen on mobile"*
