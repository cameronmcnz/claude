---
layout: lesson
title: "Customer Onboarding Flowchart"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Customer Onboarding Flowchart

A visual flowchart of a customer onboarding process — a good example of turning a described workflow into a rendered diagram.

## Starter Prompt

Create a flowchart for a customer onboarding process. Start with account creation, then email verification, then ask: did they complete profile setup? If yes, go to product tour then active user. If no, send a reminder email and loop back.

---

## Expanded Prompt

Create a clear, polished customer onboarding flowchart as a Claude Artifact.

### Process to Show

Follow this exact sequence:

1. **Start**
2. **Account Creation**
3. **Email Verification**
4. **Profile Setup**
5. **Decision: Did they complete their profile?**

**If Yes:**
- Proceed to **Product Tour**
- End at **Active User**

**If No:**
- Go to **Send Reminder Email**
- Loop back to **Profile Setup**
- Return to the same decision point

### Required Nodes

Include all of the following as labeled nodes:

- Start
- Account Creation
- Email Verification
- Profile Setup
- Decision: Profile Completed?
- Product Tour
- Send Reminder Email
- Active User (End)

### Flow Requirements

- Use a proper **decision diamond** for the profile completion check
- Clearly label branches **Yes** and **No**
- Show the reminder email loop returning the user back to profile setup
- Flow should read naturally from top to bottom
- Keep it simple enough to understand at a glance

### Design Requirements

- Modern, professional visual style
- Rounded rectangles for process steps
- Diamond shape for the decision point
- Arrows with clear direction indicators
- Subtle color coding:
  - Blue or neutral for standard steps
  - A contrasting color for the decision diamond
  - A distinct color or dashed line for the reminder loop
- Clean enough to use in a slide deck, document, or training material

---

## Tips for Refining

- *"Add a step for credit card setup before the product tour"*
- *"Make the background white so I can paste it into a document"*
- *"Add a second decision branch for enterprise vs. standard accounts"*
- *"Export this as a Mermaid diagram instead"*
