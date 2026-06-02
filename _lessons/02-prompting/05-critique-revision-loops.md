---
layout: lesson
title: "Critique and Revision Loops: Using Claude to Improve Claude's Own Output"
section: 2
section_title: "Prompting & Iteration"
section_slug: "02-prompting"
order: 5
noindex: true
---

# Critique and Revision Loops: Using Claude to Improve Claude's Own Output

One of the more useful and underused Claude techniques is asking Claude to critique something it just produced. Claude can identify weaknesses in its own output, apply a different evaluative lens, and revise against specific criteria. When you build this into your workflow deliberately, you consistently arrive at better results than accepting the first draft.

## Why this matters

The first thing Claude produces is shaped by its interpretation of your prompt. That interpretation is often slightly off, and the output reflects it. Critique and revision loops catch that misalignment before it becomes your problem to fix manually.

More practically: professional writing, business analysis, and strategic communications benefit from multiple passes. The critique pass forces a different evaluative mode. It catches things that a direct revision prompt might miss. And asking Claude to argue against its own output produces a level of rigor that single-pass generation rarely achieves.

## The idea in plain English

A revision loop works in stages:

**Stage 1: Generate.** Ask Claude to produce the initial output. Don't over-specify in this stage; let Claude show you what it would produce with the information you've given.

**Stage 2: Critique.** Ask Claude to evaluate what it just produced against specific criteria. "What are the three weakest parts of this?" or "Read this as a skeptical [audience type]. What would they find unconvincing?" or "Does this actually answer the question I asked, or does it answer an easier version of it?"

**Stage 3: Revise.** Use the critique to drive a targeted revision. "Rewrite it, fixing the issues you identified." Or, if you have your own critique to add: "In addition to your own notes, also [your specific change]. Now revise."

**Stage 4 (optional): Second opinion.** "Now read the revised version with the same critical eye. What's still weak?"

You don't always need all four stages. For low-stakes work, one critique-and-revise cycle is often enough. For high-stakes outputs, two or three passes are worth the investment.

## How this works in Claude

Claude is reasonably good at self-critique when given a clear evaluative frame. Vague critique prompts ("is this good?") produce vague assessments. Specific frames produce useful ones.

Useful critique frames:
- "Read this as [specific audience]. What would they find missing, unconvincing, or off-putting?"
- "Does this have a clear recommendation, or does it hedge?"
- "What claims in this document are not supported by the evidence provided?"
- "Is the structure logical, or does it bury the main point?"
- "Rate the opening paragraph on: hook quality, clarity, and whether it makes the reader want to continue."
- "What would a good editor cut from this?"

After the critique, you can either ask Claude to revise directly, or take the critique as input and write your own revised prompt with the issues addressed.

## Practical example

A senior analyst needs to produce a strategic memo recommending one of three market expansion options for her leadership team.

She asks Claude to draft a recommendation. The draft is thorough but buries the recommendation on page two and spends too much time on methodology that the leadership team doesn't need.

She runs a critique prompt: "Read this memo as a time-pressed C-suite executive. What's wrong with it structurally, and what information is here that they don't need?"

Claude identifies: the recommendation should lead, not follow the analysis; the methodology section is three times longer than necessary; and the risk section doesn't include a mitigation for the highest-priority risk.

She then asks: "Revise the memo with the recommendation leading, cut the methodology section to two sentences, and add a mitigation for the market entry risk." The revised version is exactly what she would have produced herself after reading Claude's first draft and rewriting it, except she spent ten minutes instead of sixty.

## Workflow design notes

Critique loops are most valuable for outputs that will be shared externally, presented to decision-makers, or used as the basis for action. For internal rough notes and quick summaries, the overhead may not be worth it.

For Cowork automations, you can build critique into a multi-step workflow: step one generates the output, step two runs a structured critique prompt against it, step three produces a final revised version. This is overkill for daily routine tasks but powerful for scheduled reports or documents that need consistent quality without human review.

Build your critique criteria based on what you've actually had to fix in the past. The best critique prompts come from remembering the specific mistakes Claude has made in your context.

## Try this in Claude

Take any Claude output from today or this week that you edited significantly. Paste the original output back into Claude and say: "Tell me what's weak about this and why you think I edited it." Then say: "Now produce a revised version that addresses those issues."

Compare the revised version to your own edited version. Note where Claude's revision and your edits converged, and where they diverged. The divergences tell you where your own judgment adds value beyond what Claude can self-correct.

## Pro tips

- Use role-based critique frames for audience-specific work: "Read this as a lawyer looking for liability exposure" or "Read this as a technical evaluator who cares about implementation feasibility."
- If Claude's self-critique is too gentle or general, push it: "Be more critical. What are the genuine weaknesses, not just the minor improvements?"
- Critique prompts also work for your own writing, not just Claude's. "Here's a document I wrote. Read it as a critical editor and tell me what's not working."
- When you find yourself running the same revision request repeatedly (always shortening, always removing hedging language, always making the recommendation clearer), add those as constraints to your base prompt. The critique loop teaches you what your prompts are missing.

## Quick summary

Critique and revision loops produce better output than single-pass generation. Ask Claude to evaluate its output against specific criteria, then revise based on the findings. The critique frame matters: vague asks produce vague critiques; specific evaluative lenses produce actionable ones. For high-stakes outputs, two passes are almost always worth the extra five minutes. For repeated tasks, let the critique results inform your base prompt to reduce the need for loops over time.
