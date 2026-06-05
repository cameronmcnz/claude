---
layout: lesson
title: "Meeting Cost Calculator"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Meeting Cost Calculator

## Starter Prompt

Create an interactive calculator that shows how much a recurring meeting costs in salary, based on the number of attendees, their average salary, meeting length, and how often it repeats.

---

## Expanded Prompt

Create a professional Claude Artifact called the **Meeting Cost Calculator**.

### Goal

Build an interactive calculator that reveals the real financial cost of meetings — especially recurring ones. Help leaders understand how much salary time their meetings consume.

### Audience

Executives, managers, team leads, project managers, and operations leaders.

### Required Inputs

- Meeting name
- Number of attendees
- Average annual salary per attendee
- Meeting length in minutes
- Meeting frequency: one-time, daily, weekly, biweekly, or monthly
- Number of weeks or months to calculate
- Optional: estimated productivity loss after the meeting, in minutes

### Calculation Logic

```
Hourly Rate        = Annual Salary ÷ 2080
Meeting Cost       = Attendees × Hourly Rate × (Meeting Minutes ÷ 60)
Recurring Cost     = Meeting Cost × Number of Meetings

Productivity Loss  = Attendees × Hourly Rate × (Loss Minutes ÷ 60) × Number of Meetings
Total Cost         = Recurring Cost + Productivity Loss Cost
```

### Display Results

Show:

- Cost per meeting
- Total number of meetings in the selected period
- Total recurring cost
- Productivity loss cost (if entered)
- Grand total estimated cost
- Total employee hours consumed
- A plain-English summary of the results

### Executive Insight

Include a short, direct insight such as:

> *This 60-minute weekly meeting with 8 attendees costs approximately $X per meeting and $Y over 12 months. If this meeting does not create at least $Y in value, it may be worth shortening, reducing attendance, or replacing with an async update.*

### Recommendations

Based on the total cost, suggest practical improvements such as:

- Shorten the meeting
- Reduce the attendee list
- Switch to biweekly
- Replace with an async update
- Require a written agenda
- Define a clear decision or outcome before the next meeting

### Default Scenario

Preload with:

- Meeting name: Weekly Strategy Sync
- Attendees: 8
- Average salary: $150,000
- Length: 60 minutes
- Frequency: weekly
- Period: 12 months
- Productivity loss: 15 minutes

### Design Requirements

- Modern, executive-friendly dashboard layout
- Large, prominent cost numbers
- Dashboard cards for each result section
- Color coding to draw attention to high costs
- Clean SaaS-style interface
- Mobile-friendly
