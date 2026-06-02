---
layout: lesson
title: "What Artifacts Are (And When to Ask for One)"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 1
noindex: true
---

# What Artifacts Are (And When to Ask for One)

A chat response is text. An Artifact is something Claude makes that you can use. The distinction sounds simple, but understanding it changes how you think about what to ask for and how to ask for it.

## Why this matters

Most people use Claude in text mode by default: they send a message, they receive a message back. This is fine for explanations, drafts, and analysis. It's the wrong mode for anything that needs to be interactive, rendered, or handed to someone else in a usable form.

Artifacts are the bridge between "Claude explained how to do this" and "Claude built this for me." When you know to ask for an Artifact, you get something you can share, click, and act on, not just read.

## The idea in plain English

An Artifact is a distinct output that Claude creates and presents in a separate panel alongside the conversation. It's rendered, meaning it displays as the finished thing rather than as the code or markup behind it.

Types of Artifacts Claude can produce:

**Documents:** Formatted text documents, reports, memos, briefs. When you ask for a long piece of writing, Claude often produces it as a renderable Artifact you can view cleanly and copy.

**Code:** Functional programs or scripts displayed in a code panel with syntax highlighting.

**HTML pages:** Rendered web pages. These can be simple formatted documents or interactive web apps with buttons, forms, and dynamic behavior.

**Data visualizations:** Charts, graphs, and visual data displays rendered in an interactive format.

**SVG graphics:** Scalable vector illustrations and diagrams.

**Markdown documents:** Structured text that renders with proper formatting, headers, and lists.

**React components:** Interactive interface components that run in the browser.

The key characteristic of an Artifact is that it renders and persists. You can return to it, share it (by copying the underlying code or content), and continue working on it through follow-up.

## How this differs from a chat response

A chat response:
- Lives in the conversation thread
- Is text (or inline code)
- Scrolls with the conversation
- Is useful for reading, but not interactive

An Artifact:
- Appears in a side panel
- Is rendered as the finished output
- Persists in that panel as you continue the conversation
- Can be interactive (for HTML and React Artifacts)
- Can be directly copied, downloaded, or extended

The practical difference: if you ask Claude to "write a report," it might produce a chat response. If you ask Claude to "create a formatted report document," it will often produce it as an Artifact you can view cleanly.

## How this works in Claude

You don't need to use special syntax to trigger Artifacts in most cases. When Claude recognizes that a request calls for an Artifact (code, a rendered document, a visualization, an interactive tool), it produces one automatically.

You can also be explicit: "Create this as an Artifact" or "Make this an interactive HTML page" will direct Claude toward Artifact output.

When an Artifact appears in the panel, you can:
- View it in the Preview tab (rendered)
- View it in the Code tab (the underlying source)
- Copy the content
- Ask Claude to modify it by continuing the conversation

## Practical example

A strategy consultant needs to explain a complex decision framework to her team. She could describe it in prose. She could paste bullet points. Or she could ask Claude for something more engaging.

She asks: "Create an interactive HTML page that shows our three-stage decision framework as a visual diagram. Each stage should be clickable and show a brief description when clicked."

Claude produces an Artifact: a rendered HTML page with three clickable stages, each revealing a description. It takes two minutes. She copies the HTML, shares it with her team via email, and they view it in any browser without installing anything.

The same framework as a chat response would have been a text description. As an Artifact, it's a usable team resource.

## Workflow design notes

Not everything needs to be an Artifact. Use Artifacts when:
- The output needs to be rendered, not just read
- You need to share the output with someone outside the conversation
- The output should be interactive (buttons, inputs, dynamic behavior)
- The output is substantial enough to benefit from a clean separate view

Use chat responses when:
- You need a quick answer, explanation, or analysis
- The output will be incorporated into something larger
- You're in the middle of a back-and-forth refinement

Artifacts are most powerful when you treat them as starting points, not final outputs. Ask for a first version, review it in the Preview pane, and iterate with follow-up requests until it's what you need.

## Try this in Claude

Ask Claude to create a simple interactive tool: "Make an HTML page with a simple calculator for [some calculation relevant to your work]." Observe how Claude produces it as an Artifact, how it renders in the Preview tab, and how you can ask for modifications. This is the fastest way to understand the Artifact workflow.

## Pro tips

- If Claude produces something as a chat response when you wanted an Artifact, add "create this as a rendered HTML Artifact" or "format this as a markdown Artifact" to your follow-up.
- Large Artifacts take slightly longer to generate than text responses. For complex interactive tools, be patient with the generation.
- The Code tab in the Artifact panel shows you the source. Even without coding knowledge, you can often see whether the Artifact is doing what you asked.

## Quick summary

Artifacts are rendered, persistent outputs that appear in a side panel alongside your conversation. They're the right format for interactive tools, formatted documents, visualizations, and anything that needs to be shared or used rather than just read. Claude produces them automatically for appropriate requests; you can also ask explicitly. Treat them as starting points to iterate on, not final deliverables after a single generation.
