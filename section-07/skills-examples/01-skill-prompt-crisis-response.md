---
layout: lesson
title: "Healthcare Crisis Statement Drafter"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
skill_type: "Crisis Comms"
order: 0
noindex: true
---

<!--
  Claude Skill Definition
  name: healthcare-crisis-statement-drafter
description: Draft calm, responsible executive messaging for healthcare organizations during sensitive situations, including AI errors, scheduling issues, patient communication problems, service disruptions, privacy concerns, operational failures, and public trust incidents.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

## Default Example Request

Draft a public statement about an AI scheduling error that affected patient appointments.

## Example Response Style

Use plain English. Be specific enough to feel credible, but cautious enough for a sensitive healthcare situation.

The writing should feel like it came from a thoughtful healthcare executive, not a legal robot.

## Sample Output For The Default Scenario

# Crisis Statement Draft

## 1. Recommended Public Statement

[Organization Name] is reviewing an issue involving one of our scheduling systems that may have affected appointment information for some patients.

We understand how important accurate scheduling is for patients, families, clinicians, and care teams. When appointment information is delayed or incorrect, it can create confusion and stress. We take that seriously.

Our team is working to identify the affected appointments, correct any inaccurate information, and contact patients directly where follow-up is needed. Patients who are unsure about an upcoming appointment should contact [Contact Number] or visit [Website] for assistance.

At this time, our priority is to support affected patients, correct the scheduling information, and review the process that led to the issue. We are also evaluating additional safeguards to reduce the likelihood of a similar problem in the future.

We appreciate the patience of our patients and families as we work through this carefully and responsibly.

## 2. Short Holding Statement

[Organization Name] is reviewing a scheduling system issue that may have affected appointment information for some patients. We are working to correct the issue and contact affected patients directly. Patients with questions about an upcoming appointment should contact [Contact Number].

## 3. Internal Leadership Note

We are reviewing a scheduling issue involving one of our systems. Please avoid speculation about the cause until the review is complete. Our immediate priorities are correcting appointment information, supporting affected patients, and ensuring consistent communication across teams.

## 4. Key Messages

* We understand accurate scheduling is essential to patient trust and care coordination.
* We are reviewing what happened and correcting affected appointment information.
* We are contacting affected patients directly where follow-up is needed.
* Patients with questions should use the official contact channel.
* We are evaluating additional safeguards based on what we learn.

## 5. What Not To Say

* "The AI made a mistake, but it is not our fault."
* "No patients were harmed" unless this has been verified.
* "This will never happen again."
* "It was only a minor issue."
* "The vendor caused the problem."

## 6. Optional Stronger Version

[Organization Name] is addressing a scheduling system issue that may have created confusion for some patients regarding appointment times or confirmations.

We apologize for the concern and inconvenience this may have caused. Accurate scheduling is a basic part of patient trust, and we are treating this matter with the seriousness it deserves.

Our teams are correcting affected records, contacting patients directly where needed, and reviewing the safeguards around the scheduling process. Patients who have questions about an upcoming appointment should contact [Contact Number] for confirmation and support.

We will continue to focus on correcting the issue, supporting patients, and strengthening the process based on what we learn.

### Example 1

Use the healthcare crisis statement drafter skill.

Scenario: An AI scheduling tool sent incorrect appointment reminders to 200 patients at a regional hospital network. Some patients may have arrived at the wrong time. We are still investigating. Draft a public statement, a short holding statement, an internal leadership note, key messages, and what not to say.

### Example 2

Use the healthcare crisis statement drafter skill.

Scenario: A hospital piloted an AI scheduling assistant. The system incorrectly prioritized some routine follow-up appointments and delayed reminders for several specialty clinics. We do not yet know whether any care was delayed. Draft calm executive messaging that is transparent but legally careful.