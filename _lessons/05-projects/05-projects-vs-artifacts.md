---
layout: lesson
title: "Projects vs. Artifacts: Inputs vs. Outputs"
section: 5
section_title: "Projects as Your Workspace"
section_slug: "05-projects"
order: 5
noindex: true
---

# Projects vs. Artifacts: Inputs vs. Outputs

Projects and Artifacts are both things Claude produces and manages, but they serve fundamentally different functions. Mixing them up creates confusion about where work lives and how to access it. Understanding the distinction cleanly makes your Claude workspace significantly easier to navigate.

## Why this matters

Once you're using Claude regularly for real work, you end up with a lot of things: source documents, reference materials, drafts, polished outputs, ongoing conversations, one-off responses. Without a clear mental model for what goes where, everything ends up in a pile. You lose track of where to find things, and you don't take advantage of how Claude actually stores and manages different types of content.

The Projects vs. Artifacts distinction is the key structural concept that organizes your Claude workspace.

## The idea in plain English

**Projects are inputs.** A Project holds everything Claude needs to do a category of work: the documents, the instructions, the reference context. These are things you put into Claude to inform what it produces. They persist because you want them to be available across many conversations.

**Artifacts are outputs.** An Artifact is something Claude produces: a document, a report, a mini-app, a visualization, a piece of code. Artifacts are things Claude creates that you can view, save, edit, and use. They persist so you can return to them, share them, or continue working on them.

The flow goes: Project (context in) → Conversation (Claude works) → Artifact (output out).

A concrete analogy: a Project is the brief, the source documents, and the style guide you hand a writer. An Artifact is the article they produce.

## How Artifacts work in Claude Chat

When Claude produces a substantial piece of output (a document, a piece of code, a data visualization), it often appears as an Artifact in a separate panel alongside the conversation. You can:
- View it rendered (not just as raw text)
- Copy it
- Edit it directly
- Expand on it through follow-up conversation
- Share it (where sharing is supported)

Artifacts are interactive outputs. They're designed to be used and refined, not just read.

In Chat, Artifacts are the outputs you produce within a conversation. They persist as long as the conversation does, and can be revisited by returning to that conversation.

In Cowork (covered in Act 2), Artifacts can be live and connected to data sources, refreshing automatically. That's a more advanced capability covered in Section 13.

## The practical distinction

When you're deciding where something goes, ask one question: is this something I bring to Claude, or something Claude produces for me?

| Type | Where it lives | Examples |
|---|---|---|
| Background document | Project (input) | Client overview, style guide, policy document |
| Reference research | Project (input) | Industry report, competitor analysis |
| Standing instructions | Project (input) | Tone guide, constraints, persona |
| Draft document | Artifact (output) | Proposal draft, report, email |
| Data visualization | Artifact (output) | Chart, dashboard |
| Mini tool | Artifact (output) | Interactive calculator, tracker |
| Finished content | Artifact (output) | Blog post, case study, presentation outline |

## Practical example

A consultant uses a single Project for a client engagement. The Project holds: the client brief, the contract scope, an example of a past deliverable they liked, and her standing instructions for tone and format.

In each conversation within that Project, she produces Artifacts: a discovery document from the first session, a risk register from the second, a strategy memo from the third. Each Artifact is the output of that conversation, shaped by the Project context she built.

The Project doesn't change much over the course of the engagement (she updates it when scope changes). The Artifacts accumulate as the work progresses.

When she needs to reference the strategy memo in a later conversation, she either opens the conversation where it was produced, or pastes the relevant section into the current conversation. The distinction between where she put inputs (Project) and where she finds outputs (conversation Artifacts) makes this navigation natural.

## Workflow design notes

One practical consideration: finished outputs sometimes become future inputs. A strategy memo produced as an Artifact in one conversation might be added to the Project as a reference document for future conversations. That's a deliberate transition: something that was an output (Artifact) becomes part of the standing context (Project file).

This is intentional, not a contradiction of the model. As work evolves, things shift from outputs to inputs. A first draft becomes a reference example. An initial report becomes background for the next one. The Project-Artifact distinction describes the current role of each piece, not a permanent categorization.

## Try this in Claude

Open a Project conversation and ask Claude to produce a document of some kind. When Claude produces it as an Artifact, note where it appears and how you can interact with it. Then ask yourself: is there any case where this Artifact would become a reference document you'd add to the Project? Identify one output type where you'd regularly promote outputs to Project inputs.

## Pro tips

- Don't clutter your Project with every output. Only add Artifacts back to the Project when they'll genuinely serve as reference for future conversations.
- In long engagements, create a lightweight "deliverables log" in the Project: a text document listing the Artifacts you've produced, where to find them, and their status (draft, approved, delivered). This is faster than hunting through conversation history.

## Quick summary

Projects hold inputs: documents, instructions, and reference context that inform Claude's work. Artifacts are outputs: documents, visualizations, and tools Claude produces. The flow is inputs in, work happens, outputs out. Some outputs later become inputs, but the distinction helps you navigate where to find things and understand what's persistent context versus produced deliverable.
