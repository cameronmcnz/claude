---
layout: lesson
title: "What Cowork Is and How It Differs from Chat"
section: 9
section_title: "Meet Cowork — The Agentic Desktop"
section_slug: "09-cowork-intro"
order: 1
noindex: true
---

# What Cowork Is and How It Differs from Chat

Cowork and Chat both use Claude. The similarity ends roughly there. Cowork is a desktop agentic environment designed for Claude to do work on your machine, not just produce text in a window. If Chat is Claude as a knowledgeable assistant who advises you, Cowork is Claude as an assistant who can walk over to your desk, open your files, and do the work.

## Why this matters

The mental model you use for Chat will mislead you in Cowork. In Chat, nothing happens until you decide to act on Claude's output. In Cowork, Claude can act. Understanding what that means, practically and consequentially, is the foundation for using Cowork well.

## The core differences

**File system access.** In Chat, you bring files to Claude by uploading them. In Cowork, Claude can access files in folders you've authorized, read them without uploading, write new files, and update existing ones. Your machine's file system is part of Claude's working environment.

**Scheduled operations.** Chat is interactive: you ask, Claude responds. Cowork can run on a schedule without you being present. You configure a task to run every morning, and it runs every morning, accessing your files and connectors, producing output or taking actions, whether or not you're at your desk.

**Dispatch.** Cowork accepts instructions from your phone via the Claude mobile app. You send a task from your phone; Cowork executes it on your desktop. This is covered in Section 11.

**Computer use.** Cowork can control applications on your computer: move the mouse, click buttons, type text, navigate interfaces. This is the most powerful and most carefully governed feature. Covered in Section 12.

**Action-taking.** Cowork workflows can take actions with real effects: create documents, send emails (with write-enabled connectors), update records, trigger processes. These actions happen whether or not you review them before they execute, depending on how you've configured the workflow.

## What stays the same

The Claude model is the same. Your prompting skills, your knowledge of Projects, Artifacts, Skills, and Plugins, all apply in Cowork the same way they do in Chat. The connector infrastructure you configured in Act 1 is available in Cowork without reconfiguration. The quality-control habits from Section 8 apply here with higher importance.

Cowork is not a different Claude. It's the same Claude with a broader set of capabilities and a more consequential operating environment.

## The trust calibration question

In Chat, you choose what to do with what Claude produces. In Cowork, you configure what Claude does and then (often) it does it. The appropriate level of trust to extend to Cowork workflows is the central design question for anyone building them.

The answer depends on:
- How well-defined the task is (clear scope = higher trust)
- How reversible the actions are (reversible = higher trust)
- How well you understand the workflow's failure modes (well-understood = higher trust)
- How long the workflow has been running reliably (proven track record = higher trust)

Start with less autonomy. Add more as you verify that the workflow behaves as intended.

## How this works in Claude

Cowork appears as a tab in the Claude desktop app. When you open Cowork, you're in the agentic environment. The interface is similar to Chat (a conversation area, a sidebar) but with additional elements: folder navigation, workflow configuration, a scheduled tasks view.

The key setup step before any of Cowork's additional capabilities work: authorizing folder access and granting the necessary permissions. The app walks you through this when you first open Cowork.

## Practical example

A freelance consultant uses Chat for all her writing, analysis, and communication work. She runs a monthly client report that involves reading notes from five client folders, pulling in calendar data, and producing a progress report for each client.

Before Cowork: she opens each folder, copies relevant content into Claude, asks Claude to produce the report, reviews and sends. About four hours of work.

After Cowork: she builds a workflow that reads her notes folders directly, accesses her calendar connector, produces a draft report for each client, and puts the drafts in a review folder. She reviews and sends. About forty-five minutes.

The work is the same. The workflow is different. Cowork handles the mechanical parts; she handles the judgment parts.

## Try this in Claude

Open the Cowork tab in the desktop app. Before touching any settings, explore the interface: where does folder authorization happen? Where are scheduled tasks configured? Where does Dispatch appear? Getting familiar with the surface before configuring it prevents setup mistakes.

## Pro tips

- Think of Cowork as earning trust, not assuming it. Start with read-only folder access, then add write access for specific folders when a specific workflow needs it.
- The most useful first Cowork workflow is typically a simple one: read a folder you know well and produce a summary. This verifies folder access and Claude's behavior with your actual files before you build anything more complex.

## Quick summary

Cowork is the desktop agentic mode of Claude: same model, broader capabilities. File system access, scheduled operations, Dispatch, and computer use distinguish it from Chat. Actions in Cowork have real effects. The right mental model is Claude as an assistant who can act on your machine, not just advise you. Start with limited scope and expand as you verify workflows behave as intended.
