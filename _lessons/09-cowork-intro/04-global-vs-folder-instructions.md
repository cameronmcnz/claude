---
layout: lesson
title: "Global Instructions vs. Per-Folder Instructions"
section: 9
section_title: "Meet Cowork — The Agentic Desktop"
section_slug: "09-cowork-intro"
order: 4
noindex: true
---

# Global Instructions vs. Per-Folder Instructions

Cowork supports two levels of standing instructions: global instructions that apply to all Cowork work, and per-folder instructions that apply to work within a specific folder or workspace. Getting this right means Claude always has the right context without you having to specify it in every prompt.

## Why this matters

Without standing instructions, every Cowork workflow starts cold. You either include all the necessary context in your prompt (inefficient) or Claude makes reasonable-but-wrong assumptions about how to approach the work (risky). The instruction layers eliminate both problems.

## Global instructions

Global instructions apply to every Cowork interaction, regardless of which folder you're working in or what task you're running. They're the things you always want Claude to know and always want Claude to do in your Cowork environment.

Good candidates for global instructions:
- Your name, role, and organization (general context Claude should always have)
- Your review and approval requirements ("always create a draft for my review before taking any action that affects an external party")
- Standing safety constraints ("do not delete files under any circumstances without explicit confirmation")
- Output format preferences that should apply everywhere
- Any hard limits on what Claude can do autonomously

Global instructions are the guardrails for your entire Cowork environment. Err on the side of more safety, less autonomy at this level.

## Per-folder instructions

Per-folder instructions apply to work within a specific folder. They're context and constraints relevant to the work in that workspace but not relevant everywhere.

Good candidates for per-folder instructions:
- What the folder contains and what its purpose is
- Specific output formats or naming conventions for files produced in this workspace
- Context about the project or client this folder relates to
- Any constraints specific to this type of work
- How Claude should handle edge cases in this specific context

Per-folder instructions override global instructions only for the specific folder they're set for. They supplement rather than replace global instructions.

## A practical configuration pattern

**Global instructions (short, safety-focused):**
> I'm a [role] at [organization]. In all Cowork work, always create drafts before sending anything external. Always notify me of any action taken. Do not delete files without explicit confirmation. Output files should be clearly named with date and type.

**Per-folder instructions (specific, context-rich):**
> This folder contains client deliverables for [client name]. Work here is confidential. Documents follow [style guide] format. Output files should go in the /drafts subfolder. Final approvals require my explicit confirmation before delivery.

## Try this in Claude

Draft your global instructions before touching any Cowork workflows. What are the three things that should always be true about how Claude operates in your Cowork environment? Write those as global instructions. Then think about your first intended Cowork folder: what context and constraints are specific to it? Write those as per-folder instructions.

## Quick summary

Global instructions set universal guardrails for all Cowork work. Per-folder instructions add specific context and constraints for individual workspaces. Configure global instructions first, keep them safety-focused, and add per-folder instructions as you build out specific workflows. The combination gives Claude the context to work effectively without you repeating it in every prompt.
