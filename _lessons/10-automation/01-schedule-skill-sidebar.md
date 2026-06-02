---
layout: lesson
title: "The /schedule Skill and the Scheduled Tasks Sidebar"
section: 10
section_title: "Automation — Scheduled & Recurring Tasks"
section_slug: "10-automation"
order: 1
noindex: true
---

# The /schedule Skill and the Scheduled Tasks Sidebar

Scheduling a Cowork task involves two things: writing a complete prompt for what Claude should do, and telling Cowork when to run it. The /schedule skill is how you create a scheduled task from the Cowork conversation interface. The Scheduled Tasks sidebar is how you manage them after they're set up.

## Why this matters

Understanding the scheduling interface means you can set up automations quickly and correctly, and monitor them without uncertainty about whether they're running as intended.

## The /schedule skill

The /schedule skill is invoked by typing /schedule in the Cowork conversation interface. It starts a guided setup flow for creating a new scheduled task. You'll specify:

**The task prompt:** What Claude should do when the task runs. This is the most important element. It should be written as a complete, self-contained instruction that Claude can follow without any additional context from you.

**The cadence:** When the task runs. Options typically include specific times (daily at 7am, weekdays at 8:30am) and intervals (every four hours, every Monday at 9am).

**The resources:** Which folders, connectors, and plugins the task should have access to when it runs.

**The output:** Where results should go. A folder where Claude writes output files. A notification. A combination.

After setup, the task appears in the Scheduled Tasks sidebar and begins running on its configured schedule.

## Writing a complete scheduled task prompt

The most important thing to understand about scheduled task prompts: Claude has no opportunity to ask clarifying questions when the task runs. Everything it needs must be in the prompt.

A good scheduled task prompt specifies:
- What to read or access (which folders, which connectors, what data)
- What to do with it (what analysis, what synthesis, what generation)
- What the output should look like (format, structure, length)
- Where to put the output (which folder, what file name pattern)
- How to handle edge cases (no new items, data that doesn't fit the expected pattern)

A prompt that would work for an interactive conversation often fails as a scheduled task because it relies on back-and-forth that doesn't exist in automation.

## The Scheduled Tasks sidebar

The Scheduled Tasks sidebar shows all your configured tasks, their cadences, their last run status, and their next scheduled run. From here you can:
- Enable or disable tasks without deleting them
- View the log of recent runs
- Edit the task prompt or cadence
- Delete tasks that are no longer needed

Build a habit of reviewing the sidebar periodically: are all tasks running as expected? Are any failing silently? Are any producing output you're no longer reviewing?

## Try this in Claude

Before creating your first scheduled task, write the prompt as if you were going to run it manually right now. Run it manually and verify the output is what you want. If it is, schedule it. This "manual first" pattern prevents the frustration of scheduling a task and then discovering the prompt doesn't produce what you expected.

## Quick summary

The /schedule skill guides you through scheduled task setup. Write complete, self-contained task prompts that don't rely on back-and-forth clarification. The Scheduled Tasks sidebar is your ongoing management interface: review it regularly for task status and output quality. Always test a task manually before scheduling it.
