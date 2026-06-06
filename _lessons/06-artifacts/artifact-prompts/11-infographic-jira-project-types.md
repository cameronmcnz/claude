---
layout: lesson
title: "Jira Project Types Infographic"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Jira Project Types Infographic

A visual comparison of Team-managed and Company-managed Jira projects — benefits, trade-offs, migration warnings, and a decision guide.


## Starter Prompt

Create an infographic comparing Team-managed and Company-managed projects in Jira, including their benefits, trade-offs, migration warnings, and a simple decision guide for which to choose.

---

## Expanded Prompt

Create a visual SVG or HTML infographic titled:

**How to Choose Between Team-Managed and Company-Managed Projects**

The infographic should help Jira users compare both project types and understand the risks of migrating between them.

### Layout

- Large title at the top
- Two side-by-side comparison cards (Team-managed vs. Company-managed)
- A comparison table showing benefits and disadvantages
- A highlighted warning box for migration risks
- A decision guide at the bottom

### Comparison Table

| Project Type    | Benefits | Possible Disadvantages |
| --------------- | -------- | ---------------------- |
| Team-managed | Better for smaller teams | Hard to scale; may need a separate cloud instance |
| Team-managed | Project admins control setup without needing a Jira admin | Admin management becomes difficult with many custom fields, schemes, and workflows |
| Team-managed | Migration to company-managed is possible | Custom field data must be manually recreated; data may be lost |
| Company-managed | Standardized configuration shared across projects | Configuration is more complex |
| Company-managed | Consistent workflows across all teams | Changes to settings and workflows affect all teams |
| Company-managed | Migration to team-managed is possible | Some project data may not migrate cleanly, especially sprints and components |

### Migration Warnings Section

Title this section: **Important Migration Warnings**

**Sprints**
Completed, planned, or active sprints will not move from a company-managed project to a team-managed project. Issues from the company-managed project will be added to the backlog of the team-managed project.

**Components**
Component fields are unique to every Jira project. Component data may be lost during migration.

**Custom Fields**
A Jira admin may need to recreate custom fields and add them to screen schemes and field configurations. If not done properly, custom field data may be lost.

### Decision Guide

**Choose Team-managed when:**
- The project is smaller
- The team wants local control
- Setup needs to be simple
- Heavy standardization is not needed

**Choose Company-managed when:**
- Standardized workflows are required
- Multiple teams need consistent configuration
- Jira admins need centralized control
- The organization needs stronger governance

### Design Requirements

- Modern SaaS-style infographic design
- Color-coded sections for easy scanning
- Professional and beginner-friendly
- Icons or visual symbols where helpful
- Clear section headings and concise wording
- Suitable for documentation, a slide deck, or a training session

---

## Tips for Refining

- *"Add a section on Next-gen vs Classic project terminology"*
- *"Make the migration warnings section more prominent with a red border"*
- *"Add a third column for Scrum vs Kanban board types"*
- *"Export this as a standalone HTML page I can share"*
