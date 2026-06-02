---
layout: lesson
title: "Choosing the Right Claude Model (And Why It Actually Matters)"
section: 1
section_title: "Foundations, Models & Safe Setup"
section_slug: "01-foundations"
order: 3
noindex: true
---

# Choosing the Right Claude Model (And Why It Actually Matters)

Picking the wrong Claude model for a task is like using a sledgehammer to hang a picture frame. The job gets done, sort of, but you've wasted effort and probably left marks you didn't intend. Model selection isn't a technical decision reserved for developers. It's a practical workflow choice that affects the quality of your results and how much time you spend getting there.

## Why this matters

Claude isn't one thing. It comes in distinct variants, each with different strengths, response styles, and costs in terms of speed and credits. Most users default to whatever model is pre-selected and never think about it again. That works fine for low-stakes tasks. It's a real liability when you're doing complex, ambiguous, or high-stakes work.

Getting model selection right means your outputs are better calibrated for the task. You stop getting overly elaborate answers to simple questions, and you stop getting surface-level responses to problems that actually require depth.

## The idea in plain English

At the time of this course, Claude's flagship model is **Opus** (currently Opus 4). Below it sits **Sonnet**, the mid-tier workhorse. There's also **Haiku**, the fastest and lightest option, useful for quick tasks where speed matters more than nuance.

Here's the practical frame:

**Sonnet** is your default for well-scoped, specific tasks. If you know exactly what you want and the request is clear, Sonnet handles it well and quickly. Think of it as the capable colleague who executes a clear brief without needing a lot of hand-holding.

**Opus** is built for tasks where Claude needs to figure out what you actually want. Ambiguous briefs, interpretive work, complex reasoning, nuanced writing, multi-layered problems, and situations where the "right answer" isn't obvious going in. Opus takes more time and costs more, but for genuinely hard work it earns the difference.

**Haiku** is for lightweight, repetitive tasks where you need speed and volume rather than depth. Not typically what you'd reach for in professional knowledge work, but worth knowing about.

## How this works in Claude

Model selection typically appears as a dropdown or selector in the chat interface before you start a conversation. In Claude's web app, it appears at the top of a new chat. In Cowork, you can set a default model for a workspace or change it per session.

The model you select applies to that conversation. If you start with Sonnet and find the task is more complex than expected, you can start a new conversation with Opus rather than trying to wrestle a better answer out of the wrong model.

## Practical example

Here's the same task handled by different model choices:

**Task A:** "Draft a follow-up email to a client who confirmed they'll renew their contract. Keep it warm, brief, and include a note about the onboarding call we scheduled for Thursday."

This is well-scoped and specific. You know the output you want. Sonnet is the right choice. Opus would produce a similarly good email, but you'd be spending more for no meaningful difference.

**Task B:** "We've had three high-performing team members leave in the past six months. I'm not sure whether it's a management issue, a compensation issue, or something cultural. Help me think through how to diagnose this and what questions I should be asking."

This is ambiguous. The problem isn't well-defined. The "answer" isn't a single output but a thinking process. Opus is the right choice here. It will engage with the complexity, ask clarifying questions internally as it reasons, and give you something that actually helps you think rather than a generic HR framework you could have Googled.

## A decision framework

| Task type | Recommended model | Why |
|---|---|---|
| Clear brief, specific output | Sonnet | Fast, accurate, no depth needed |
| Drafting from a template or example | Sonnet | Well-scoped by definition |
| Summarizing a document you provide | Sonnet | The content is given; reasoning load is low |
| Ambiguous problem requiring judgment | Opus | Figuring out the right question is half the work |
| Complex writing with voice and nuance | Opus | Tone, interpretation, and craft require it |
| Multi-step reasoning or analysis | Opus | Depth of reasoning matters |
| Quick reformatting or extraction | Haiku or Sonnet | Speed over depth |

## Workflow design notes

One common mistake is using Opus for everything because it feels safer. In practice, this leads to slower responses, higher credit usage, and sometimes overly elaborate answers to simple questions. Opus will write three paragraphs about why an email should be brief when Sonnet would have just written the brief email.

The inverse mistake is defaulting to Sonnet for everything and being puzzled when Claude gives you a shallow answer to a hard question. Sonnet isn't underperforming; it's optimized for a different job.

For automated workflows in Cowork, model selection matters especially because you're not in the loop to course-correct. A scheduled task running on the wrong model might produce technically correct but poorly calibrated output. When setting up automation, think carefully about the type of task and choose the model accordingly.

## Try this in Claude

Pick two tasks from your current workload: one that's clearly specified, and one that's genuinely ambiguous or interpretive. Run the specific task through Sonnet and the ambiguous one through Opus. Note the difference in how each model approaches the problem. This gives you a calibration point for your own work patterns.

## Pro tips

- When in doubt on a complex task, use Opus for the first pass to establish framing and structure, then use Sonnet for follow-up drafting or refinement within that structure.
- If Opus gives you an answer that seems overly cautious or hedged, it may be picking up on genuine ambiguity in your request. Tighten the brief before retrying.
- In Cowork, check the model setting whenever you set up a new scheduled task or workflow. The default may not be the right choice for what you're automating.
- Model capabilities improve over time. The best practice is to revisit your default choices periodically rather than set and forget.

## Quick summary

Sonnet handles clear, well-scoped tasks efficiently. Opus earns its place on ambiguous, interpretive, or complex work where Claude needs to reason about what you actually want. Choosing correctly isn't a technical detail; it's a professional judgment that affects output quality. Match the model to the task, and you'll get better results with less friction.
