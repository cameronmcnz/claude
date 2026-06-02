# The Four-Part Prompt: Role, Task, Context, and Output Format

Most Claude prompts fail not because the model is bad but because the brief is incomplete. You would not hand a new colleague a sticky note and expect a finished report. You'd explain who they are in this context, what you need, what they need to know to do it, and what the finished thing should look like. That same discipline applied to Claude prompts produces dramatically better results.

## Why this matters

Vague prompts produce responses that are technically responsive but practically useless. "Help me with my presentation" is a prompt. "Write the executive summary slide for a board presentation on Q2 performance, written for a financially sophisticated audience, in five bullet points of no more than fifteen words each" is a brief. The second one takes thirty seconds longer to write and saves thirty minutes of revision.

The four-part structure is not a formula you have to follow rigidly for every message. It's a checklist that helps you notice when you're leaving something important out.

## The idea in plain English

**Role** tells Claude what perspective or expertise to bring to the task. It answers the question: who is Claude being right now?

Examples:
- "You are an experienced HR consultant."
- "You are a plain-language editor."
- "Act as a skeptical CFO reviewing this proposal."

Role shapes tone, vocabulary, and the assumptions Claude brings to the work. A response from "an experienced HR consultant" reads differently from a response from "a friendly generalist assistant." Both might answer your question, but only one is calibrated to your actual need.

**Task** is what you want done. It should be specific and action-oriented.

Examples:
- "Review this job description and identify any language that might discourage qualified candidates."
- "Rewrite this paragraph in plain English for a non-technical audience."
- "List the five strongest objections a CFO would raise to this proposal."

**Context** is the relevant background Claude needs to do the task well. It includes information about your situation, constraints, audience, existing work, or anything else that would affect what a good response looks like.

Examples:
- "The audience is senior executives who are not technical. They have fifteen minutes and want conclusions, not methodology."
- "We are a 40-person professional services firm in the UK."
- "The tone of our existing documentation is formal but accessible."

**Output format** specifies what the finished product should look like: length, structure, format, what to include, what to omit.

Examples:
- "Return a numbered list of no more than six items."
- "Write this as a three-paragraph memo, not longer than 200 words."
- "Format as a markdown table with columns for Risk, Likelihood, and Mitigation."

## How this works in Claude

Claude responds to these elements whether you label them explicitly or embed them naturally in your prompt. Both of these work:

**Labeled version:**
> Role: You are a plain-language editor.
> Task: Rewrite the paragraph below.
> Context: The reader is a first-time homebuyer with no legal background.
> Format: Match the original paragraph length. Avoid jargon.

**Natural version:**
> Rewrite this paragraph as a plain-language editor would for a first-time homebuyer with no legal background. Keep it roughly the same length and avoid jargon.

The natural version is often faster and reads better. The labeled version is useful when you're learning the structure, when prompts are complex, or when you want to be especially precise.

## Practical example

**Before (weak prompt):**
> Write a bio for our new VP of Marketing.

**After (four-part prompt):**
> You are a professional copywriter specializing in executive communications. Write a 100-word professional bio for our new VP of Marketing, Sarah Chen. Context: Sarah joins us from a Series B fintech startup where she led a team of twelve and grew inbound pipeline by 40% in eighteen months. She's joining a 200-person B2B software company. The audience for this bio is our website, LinkedIn, and conference programs. Tone: confident and warm, not corporate. Format: one short paragraph, 90-110 words, third person.

The second prompt takes forty-five extra seconds to write. It produces a usable draft on the first try. The first prompt will require three or four back-and-forth exchanges to get to the same place.

## Workflow design notes

The four-part structure is especially valuable for recurring tasks. If you write the same type of prompt repeatedly, build a template that pre-fills role, context, and format, leaving only the task variable to fill in each time. This is the foundation of Skills and reusable instructions, which you'll build in Section 7.

For automated workflows in Cowork, complete prompts are not optional. Claude has no opportunity to ask clarifying questions mid-run. Every piece of context that might affect the output needs to be in the prompt upfront. The habit of complete briefs you build now pays compounding dividends in Act 2.

## Try this in Claude

Take a prompt you've written recently that produced a mediocre result. Rebuild it using the four-part structure. Add role, check that the task is specific, add relevant context, and specify the output format. Run both versions and compare the output quality.

## Pro tips

- If Claude's response is generic, the most likely cause is insufficient context. Ask yourself: what would a smart colleague need to know to do this task well?
- For creative or persuasive tasks, role is often the highest-leverage element. "Write a pitch" and "Write a pitch as a seasoned venture capitalist who has heard a thousand pitches" produce noticeably different outputs.
- Output format is the most commonly skipped element. Specifying format prevents Claude from making layout decisions you'll have to undo.
- You don't need all four elements every time. A simple task with obvious context doesn't need a full brief. Use the structure when you notice your prompts are producing outputs you have to heavily revise.

## Quick summary

The four-part prompt structure, role, task, context, and output format, turns vague requests into clear briefs. It's not a rigid formula but a checklist for noticing what's missing. Complete prompts produce better first drafts, reduce revision time, and become the foundation of reusable templates and automated workflows.
