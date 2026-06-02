---
layout: lesson
title: "Writing Project Instructions That Actually Work"
section: 5
section_title: "Projects as Your Workspace"
section_slug: "05-projects"
order: 4
noindex: true
---

# Writing Project Instructions That Actually Work

Project instructions are the standing brief Claude reads at the start of every conversation in a Project. Done well, they eliminate a category of repetitive prompting and make every interaction more immediately useful. Done poorly, they're either ignored (too vague) or a source of friction (too rigid). This lesson covers how to write instructions that reliably improve outputs without getting in the way.

## Why this matters

Instructions are the most powerful per-conversation time-saver in a Project. Every constraint, preference, context note, or standing direction that lives in the instructions doesn't need to be in your prompts. A style guide instruction applied once to every conversation is more reliable than a style reminder that you sometimes remember to include.

They also encode your judgment. The best Project instructions capture decisions you've already made: the tone this client expects, the format this report always takes, the topics that are always out of scope. That decision doesn't need to be made again for each conversation.

## The idea in plain English

Project instructions can include several types of content:

**Context:** Background information that applies to all work in this Project. Who the client is, what the product does, what the goals of the engagement are.

**Persona or role:** How Claude should approach this work. "Act as an experienced marketing consultant" or "take the perspective of a junior analyst writing for a senior audience" changes the frame for every response.

**Tone and style:** How Claude should sound. "Direct and concise, no corporate filler" or "formal but accessible, appropriate for a regulatory audience."

**Format preferences:** What outputs should look like by default. "Always use bullet points for lists, never numbered lists unless sequence matters." "Keep responses under 300 words unless asked for more."

**Standing constraints:** What Claude should never do in this context. "Do not name competitors." "Do not include pricing assumptions." "Always flag when something requires legal review."

**Reference notes:** Key facts Claude should always have in mind. "The client's primary market is the UK and Ireland, not North America." "The product is in beta; do not describe it as production-ready."

## How this works in Claude

When you open a Project's settings, you'll find the instructions field. Write your instructions there as plain text. They don't need to be formatted in any special way; Claude reads them as a standing brief.

A useful structure for Project instructions:

```
About this project:
[One paragraph of context: what this work is, who it's for, what the goals are]

How to approach this work:
[Role, tone, and style guidance]

Format defaults:
[Any output format preferences that apply across all conversations]

Standing constraints:
[Things Claude should always or never do in this context]

Key facts to keep in mind:
[Reference notes that should inform every response]
```

This is a template, not a requirement. Instructions can be as short as two sentences or as detailed as a full page, depending on the complexity of the work.

## Practical example

A PR agency creates a Project for a financial services client. Their instructions read:

---

*About this project:*
This Project supports content and communications work for Clearwater Capital, a London-based wealth management firm serving high-net-worth individuals. Their key differentiator is personalized service and long-term relationship focus, not product breadth.

*Tone and approach:*
Write with authority but warmth. Avoid financial jargon unless the audience is clearly specialist. Never use hyperbole about returns or performance. The compliance team reviews all external content, so flag anything that makes specific financial claims or predictions.

*Format defaults:*
For client-facing content: short paragraphs, no bullet points, formal register. For internal briefings: bullet points are fine, concise is better than comprehensive.

*Standing constraints:*
Do not mention competitors by name. Do not make specific return or performance claims. Do not use the word "guaranteed" in any context. Always end client communications with the regulatory disclaimer prompt: [reminder to add disclaimer].

*Key facts:*
The firm manages approximately £2.4bn in assets. Primary client base is 40-65, predominantly professionals and business owners. UK and Ireland only; no international operations.

---

Every conversation in this Project starts with Claude knowing all of that. No prompt in this Project needs to include any of it.

## Workflow design notes

Instructions should be treated as living documents. Review and update them when:
- The work changes significantly (new scope, new constraints)
- You notice Claude consistently doing something you don't want (add a constraint)
- A standing preference you've been including in every prompt belongs in instructions instead

Instructions can also be tested in a lightweight way: start a conversation in the Project with a simple request and check whether Claude applies the instructions correctly. If it doesn't, the instructions may be ambiguous or conflicting.

One important note: instructions have a length limit. Very long instruction sets may be partially applied or may leave less room for document context and conversation content. Keep instructions focused. If you find yourself writing a long instruction document, ask whether some of it belongs in a reference file instead.

## Try this in Claude

Write the first version of instructions for the Project you've been building. Start with three elements: one sentence of context, one sentence of tone guidance, and one standing constraint. That's a minimum viable instruction set. Run a test conversation and check whether Claude applies all three. Expand from there.

## Pro tips

- Instructions written as "always do X" and "never do Y" are clearer and more reliably applied than instructions written as "try to X" or "prefer Y."
- If you're unsure what to put in instructions, run a few conversations without them first. Note everything you include in prompts that you repeat across multiple sessions. Those are your instruction candidates.
- For shared Projects (where multiple team members have access), instructions also serve as a shared briefing for how Claude should behave in this context. Write them to be useful for anyone on the team, not just yourself.

## Quick summary

Project instructions are standing directions Claude applies to every conversation in the Project. They can include context, persona, tone, format preferences, constraints, and key facts. Write them clearly using "always/never" language, keep them focused, and treat them as living documents to update as the work evolves. A good instruction set eliminates the need to repeat context in every prompt.
