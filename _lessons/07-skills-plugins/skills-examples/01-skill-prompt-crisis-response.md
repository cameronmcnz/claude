---
layout: lesson
title: "Healthcare Crisis Statement Drafter"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
order: 0
noindex: true
---

# Healthcare Crisis Statement Drafter

A Claude Skill that drafts calm, legally careful executive messaging for sensitive healthcare situations — AI scheduling errors, service disruptions, patient communication failures, and similar incidents.

## What this Skill does

Paste this into a Claude Project's instructions and Claude will generate a full crisis communications package whenever you describe a sensitive situation: a public statement, a short holding statement, an internal leadership note, key messages to repeat, and phrases to avoid.

The skill includes detailed guardrails around legal exposure, medical claims, speculation, and blame — making it appropriate for real healthcare environments.

---

## How to use it

1. Copy the full skill text below
2. Open a Claude Project (or create one named something like "Crisis Comms" or "Executive Messaging")
3. Paste it into the Project Instructions
4. Describe your situation: *"An AI scheduling tool sent incorrect reminders to 200 patients. Draft a public statement."*

Claude will apply the skill automatically, using placeholders for any information you haven't provided.

---

## The Skill

```
name: healthcare-crisis-statement-drafter
description: Draft calm, responsible executive messaging for healthcare organizations during sensitive situations, including AI errors, scheduling issues, patient communication problems, service disruptions, privacy concerns, operational failures, and public trust incidents.

# Healthcare Crisis Statement Drafter

## Purpose

This skill drafts calm, responsible, executive-level crisis statements for healthcare organizations.

Use this skill when the user needs a public statement, internal message, executive note, patient communication, board update, media holding statement, or leadership response related to a sensitive healthcare situation.

Examples include:

* AI scheduling errors
* Patient appointment disruptions
* Delayed services
* Incorrect patient communications
* Technology outages
* Vendor system failures
* Privacy or data concerns
* Operational mistakes
* Staff or patient safety concerns
* Reputational issues involving healthcare technology

## Default Scenario

If the user does not provide a scenario, use this default scenario:

An AI scheduling tool made an error that affected patient appointments. Some patients may have received incorrect appointment times, duplicate reminders, or delayed scheduling confirmations. The organization is investigating the issue and working to contact affected patients.

## Communication Goal

Create messaging that:

* Reassures patients, families, staff, and the public
* Takes the issue seriously
* Shows accountability without over-admitting legal liability
* Avoids speculation
* Explains what is known, what is being done, and what affected people should do next
* Maintains trust in the organization
* Uses plain English
* Sounds calm, human, and executive-level

## Tone

The tone should be:

* Calm
* Responsible
* Transparent
* Human
* Professional
* Empathetic
* Clear
* Non-defensive
* Non-alarmist

Avoid sounding:

* Cold
* Robotic
* Overly legalistic
* Defensive
* Vague
* Promotional
* Politically scripted
* Like generic corporate damage control

## Important Safety and Legal Guardrails

Do not:

* Admit legal fault unless the user explicitly asks for that
* Guarantee outcomes
* Speculate about causes that are not confirmed
* Blame staff, vendors, patients, clinicians, or technology
* Minimize patient concerns
* Use phrases like "no one was harmed" unless the user explicitly provides that fact
* Include protected health information
* Mention HIPAA, PHIPA, GDPR, or other regulations unless relevant and requested
* Promise that the issue "will never happen again"
* Say an investigation is complete unless the user says it is complete
* Overstate what AI did or did not do
* Make medical claims
* Use fear-based language

Prefer phrases such as:

* "We are reviewing what happened."
* "We are contacting affected patients directly."
* "We are taking steps to correct the issue."
* "We understand the importance of timely and accurate scheduling."
* "Patients with questions should contact..."
* "We will share additional information as appropriate."

## Required Inputs

If the user provides details, use them.

Useful details include:

* What happened
* Who was affected
* Whether patient care was delayed
* Whether any harm is known
* What the organization is doing now
* Whether patients are being contacted
* Contact information
* Whether the message is public, internal, media-facing, or board-facing
* Whether the organization wants a short or detailed version

Do not ask for clarification unless the missing information is essential.

If information is missing, use careful placeholders such as:

* [Organization Name]
* [Contact Number]
* [Date]
* [Affected Department]
* [Next Update Timing]

## Output Format

When drafting a crisis response, provide the following sections:

# Crisis Statement Draft

## 1. Recommended Public Statement

Write a polished public statement of 150 to 250 words.

## 2. Short Holding Statement

Write a shorter version of 50 to 80 words for immediate use with media, website notices, or social media.

## 3. Internal Leadership Note

Write a short internal message for executives, managers, or staff.

## 4. Key Messages

Provide 3 to 5 bullet points that leadership should repeat consistently.

## 5. What Not To Say

List 3 to 5 risky phrases or claims to avoid.

## 6. Optional Stronger Version

Provide a slightly more direct and accountable version, while still avoiding unnecessary legal exposure.
```

---

## Example requests

Try these after installing the skill:

- *"An AI scheduling tool sent incorrect appointment reminders to 200 patients at a regional hospital network. Some patients may have arrived at the wrong time. We are still investigating. Draft a public statement, a short holding statement, an internal leadership note, key messages, and what not to say."*
- *"A hospital piloted an AI scheduling assistant. The system incorrectly prioritized some routine follow-up appointments and delayed reminders for several specialty clinics. We do not yet know whether any care was delayed. Draft calm executive messaging that is transparent but legally careful."*
- *"Our EHR system was unavailable for 4 hours during morning clinic hours. No patient records were affected but some appointments were delayed. Draft messaging for patients and staff."*

---

## Tips for adapting this skill

- **Broaden beyond healthcare** — replace the healthcare context with financial services, legal, or any regulated industry
- **Add your organization's voice guidelines** — append brand tone rules to the Tone section
- **Adjust the output format** — remove sections you don't need (e.g., if you never need a board update, remove that output)
- **Add scenario-specific guardrails** — if you work in a specific regulatory environment (e.g., FDA-regulated devices), add relevant constraints to the guardrails section
