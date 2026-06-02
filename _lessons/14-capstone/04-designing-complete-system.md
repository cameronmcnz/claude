---
layout: lesson
title: "Designing a Complete Claude System: The Capstone Framework"
section: 14
section_title: "Managed Agents, Capstone & Graduating to Claude Code"
section_slug: "14-capstone"
order: 4
noindex: true
---

# Designing a Complete Claude System: The Capstone Framework

You've reached the end of the course. This final lesson isn't a summary of what you've learned; it's a framework for putting it to use. A complete Claude system is a workflow that someone could evaluate, audit, and improve. This lesson shows you how to design one.

## Why this matters

Understanding Claude's capabilities individually is useful. Combining them into a coherent, governed, evaluable system is what makes Claude transformatively valuable to your work. The capstone exercise is the difference between "I've learned about these features" and "I've designed a system that uses them responsibly and effectively."

## The five dimensions of a complete Claude system

A well-designed Claude system addresses five dimensions explicitly:

### 1. The use case: what problem this solves

Be specific about the problem. "Save time" is not a use case. "Reduce the time from client call to delivered meeting notes from four hours to thirty minutes" is a use case. Specificity makes it possible to know whether the system is working.

The use case should include: the current process, the pain point, the expected improvement, and who benefits.

### 2. The features: what capabilities are involved

Map the features from this course onto your use case. Which combination of capabilities does this workflow require? Typical systems use five or more features. A complete system might involve: a Project (for context), a connector (for data access), a Skill (for the core task), a Cowork scheduled task (for automation), and an Artifact (for the output).

Be explicit about each feature and why it's in the design.

### 3. The privacy rules: what data is involved and how it's protected

Every Claude system that handles real data needs explicit privacy rules. These address:
- What data the system accesses (be specific: which folders, which connectors)
- What data the system produces and where it goes
- What data should never be in the system (client PII, regulated data, confidential information)
- How long outputs are retained and by whom they can be accessed

Privacy rules aren't a legal exercise; they're a practical decision about acceptable risk. Write them down so they can be audited and updated.

### 4. The review steps: where human judgment is required

Map the review gates explicitly. For every action the system takes, answer:
- Who reviews this before it proceeds?
- What does a "pass" look like?
- What does a "fail" look like (and what happens when it fails)?
- What's the escalation path for edge cases?

For fully automated workflows, the review happens when the output is checked; specify the cadence and who's responsible.

### 5. The success criteria: how you know it's working

Define what success looks like before you deploy. Success criteria should be:
- Measurable: specific metrics, not impressions
- Time-bounded: evaluated at a specific interval (weekly, monthly)
- Honest about what they're measuring: output volume is not the same as output quality

Example success criteria:
- Meeting notes produced within 30 minutes of call end, 90% of the time
- No factual errors in client deliverables over a 30-day period
- Time saved per week, as measured by before/after comparison

## The capstone deliverable

Your capstone is a written system design that addresses all five dimensions. It can be a document, a structured Artifact, a Project instruction set, or any format that makes the design clear and reviewable. Length is less important than specificity: a two-page design with clear answers to all five dimensions is more valuable than a ten-page document that's vague about review steps or success criteria.

## The design process

Work backwards from the use case:
1. Start with the problem: what takes too long, produces inconsistent results, or doesn't happen reliably?
2. Define the success state: what would need to be true for this to be solved?
3. Map the features: which Claude capabilities address each part of the problem?
4. Design the review gates: at each stage where an error would matter, what's the gate?
5. Write the privacy rules: what's the data handling scope?
6. Define the success criteria: how will you know in 30 days whether this is working?

## An example system design sketch

**Use case:** Weekly client status reports currently take 90 minutes per client. They require reading meeting notes from the past week, synthesizing progress against the project plan, and drafting a clear narrative. I have 12 active clients. 90 × 12 = 18 hours per month on this one task.

**Features:** Project (client context and report template), email connector (read), calendar connector (read), Cowork scheduled task (runs Friday afternoons), file access (meeting notes folders), Artifact (report output format).

**Privacy rules:** Meeting notes and client project files in authorized Cowork folders. Report drafts go to my review folder before any client-facing use. Client names and project details never enter Claude memory or general Projects.

**Review steps:** Every draft report reviewed by me before sending. Any report with specific commitments or financial figures gets a second read. Reports go out from my email, not automatically.

**Success criteria:** Report drafts delivered to review folder by 4pm Friday, every week. Average review time under 15 minutes per report (down from 90). Zero reports sent with factual errors over the first 60 days.

## Try this in Claude

Write your capstone system design. Use a real use case from your work. Be specific about all five dimensions. When you've finished, review it against this question: could someone else read this design and understand not just what it does but why it's built this way, and whether it's working? If yes, you have a complete system design.

## Quick summary

A complete Claude system addresses five dimensions: the use case (what problem), the features (what capabilities), the privacy rules (what data, how protected), the review steps (where human judgment is required), and the success criteria (how you know it works). The capstone exercise is designing a real system across all five dimensions. Specificity is what makes the design evaluable and improvable. This is the foundation for using Claude not just effectively but responsibly at scale.
