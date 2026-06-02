---
layout: lesson
title: "Cowork Instructions vs. Project Instructions"
section: 9
section_title: "Meet Cowork — The Agentic Desktop"
section_slug: "09-cowork-intro"
order: 6
noindex: true
---

# Cowork Instructions vs. Project Instructions

You now have two types of standing instructions available: Project instructions (from Section 5) and Cowork instructions (global and per-folder, from this section). They serve different purposes and live in different places. Understanding the relationship prevents double-configuration and conflicting guidance.

## The key distinction

**Project instructions** live in Chat's Project system. They apply to conversations within that Project in the Chat environment. They're available across chat sessions but don't automatically apply to Cowork automated tasks unless the Cowork task explicitly references the Project.

**Cowork instructions** live in the Cowork environment. They apply to Cowork work: scheduled tasks, Dispatch commands, interactive Cowork conversations. They're not visible to Chat unless you're working in a Cowork-connected conversation.

Think of them as belonging to different surfaces that can work with the same content but have separate instruction sets.

## When you need both

For work that happens both in Chat and in Cowork, you may want to configure instructions in both places:

- A client Project in Chat (for interactive conversations, document uploads, analytical work) with Project instructions
- A corresponding Cowork folder configuration with Cowork instructions (for automated tasks that read that client's files and produce outputs)

The instructions don't need to be identical, but they should be consistent: the same constraints, the same context, the same output standards.

## When one is sufficient

If a workflow only happens in Chat (interactive conversations, manual document review), Project instructions are sufficient. Cowork instructions are not needed.

If a workflow only happens in Cowork (fully automated file processing, scheduled reports), Cowork instructions are sufficient. Project instructions may not add value.

If a workflow happens in both, configure both.

## Avoiding conflicts

A practical check: if Claude behaves unexpectedly in Cowork, look for conflicts between your Cowork global instructions, your per-folder instructions, and any Project instructions that might also be in scope. Identify which layer is producing the unexpected behavior and resolve it at that layer.

## Try this in Claude

Look at your most-used Chat Project. Would you want the same context available in a Cowork automated workflow? If yes, plan where those Cowork instructions would live (global or per-folder) and note any differences between what the Project version and the Cowork version would say. This exercise makes any needed configuration explicit before you start building automation.

## Quick summary

Project instructions live in Chat and govern Chat conversations. Cowork instructions live in Cowork and govern automated and agentic work. For workflows that span both surfaces, configure instructions in both places consistently. Check for conflicts when Claude behaves unexpectedly; resolve at the source layer.
