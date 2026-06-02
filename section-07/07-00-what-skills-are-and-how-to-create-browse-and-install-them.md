# What Skills Are and How to Use Them

A Skill is a reusable instruction set that tells Claude how to approach a specific type of task. Instead of writing a detailed prompt every time you need Claude to do the same thing, you install the Skill once, and Claude knows how to behave whenever you invoke it. Skills are how repeated tasks stop being repetitive.

## Why this matters

The best prompts you write are worth more than a single use. If you've crafted an excellent prompt for summarizing client calls, reviewing documents, generating weekly reports, or rewriting content in your brand voice, that prompt is reusable intellectual property. Saving it as a Skill means you never have to reconstruct it, you share it consistently with anyone who needs it, and you can improve it over time without having to remember where you left the original prompt.

## The idea in plain English

A Skill has two main components:

**An invocation:** A name or trigger phrase that activates the Skill. When you type the Skill's name (usually preceded by /) or use the designated trigger, Claude knows to follow the Skill's instructions for this conversation.

**An instruction set (SKILL.md):** The detailed instructions that tell Claude what to do when the Skill is invoked. This is essentially a standing prompt encoded into a structured format. It can include: what the task is, what inputs to expect, how to handle them, what the output should look like, any constraints, and examples if useful.

From a user perspective, invoking a Skill is faster than writing a prompt. You type /summarize-meeting and Claude knows exactly what format to produce, what to extract, and how to present it, because the Skill's instructions encode all of that.

## Types of tasks that benefit from Skills

Skills are most valuable when:
- You do the same type of task repeatedly (weekly reports, meeting summaries, content reviews)
- The task requires a consistent output format across multiple uses or multiple team members
- The task has a complex setup that you don't want to re-explain each time
- You want to share a workflow with colleagues without each person having to figure out the prompt

Examples of useful Skills:
- Meeting note summarizer (extracts decisions, action items, and open questions)
- Email drafter (takes a brief description and produces a draft in your voice)
- Document reviewer (checks a document against a specific rubric)
- Weekly report generator (formats metrics into a standing report structure)
- Content toner (rewrites content to match a brand voice)
- Risk identifier (reads a document and extracts potential risks)

## How Skills work in Claude

Skills appear in the Skills section of the Claude interface or in the Skills marketplace. You can browse installed Skills, install new ones from the marketplace, and in some configurations create your own.

When a Skill is installed, its name typically appears as a slash command in the chat interface. Typing / brings up a list of available Skills and their descriptions, letting you select the one you need.

Some Skills work in specific contexts (within a Project, with a specific connector) and some work generally across any conversation.

Creating your own Skills involves writing a SKILL.md file that follows a defined structure. Cowork exposes this directly: you can browse, install, and build Skills from within the Cowork interface. This is covered further in the Cowork sections.

## Practical example

A communications team produces ten client briefing documents per month. Each one follows the same format: executive summary, key themes, recommended actions. Until now, each team member writes their own prompt, which produces slightly inconsistent outputs that all require editing.

The team creates a "Client Briefing" Skill with a SKILL.md that specifies: the exact sections, the length requirements per section, the tone, and the specific extraction task (the inputs are a set of meeting notes and the client context). They install it in their shared Project.

Now every team member invokes /client-briefing, pastes the meeting notes and client context, and receives a consistently structured briefing document. The QA burden drops because the Skill's instructions encode the team's quality standards.

## Workflow design notes

Skills work best for well-defined, repeatable tasks. They're less useful for tasks that require significant variability or judgment in the setup, because the Skill's instructions assume a consistent structure.

One common mistake: building Skills for tasks you don't actually repeat often. The overhead of creating a Skill (writing the SKILL.md, testing it, installing it) is worthwhile for tasks you do weekly or more. For monthly-or-less tasks, a saved prompt document is usually more practical.

Skills also degrade if the underlying task changes. If your report format changes or your output requirements evolve, the Skill needs to be updated to match. Build in a habit of reviewing Skills when you notice their outputs drifting from your current standard.

## Try this in Claude

Identify the one task you've done with Claude most frequently in this course. Describe it as if you were writing instructions for a new colleague: what's the input, what's the process, what's the output? That description is the first draft of a Skill. In Section 9 (Cowork), you'll see how to turn it into an actual installable Skill.

## Pro tips

- Name Skills clearly and specifically. "Summarize" is too vague. "Client-meeting-summary" tells you exactly when to use it.
- Test a new Skill on five real examples before relying on it. Edge cases reveal gaps in the instructions that weren't apparent in design.
- Keep SKILL.md instructions focused. The more a Skill tries to do, the harder it is to do any one thing consistently. One task per Skill is a good rule of thumb.

## Quick summary

A Skill is a reusable instruction set that tells Claude how to handle a specific type of task. It's invoked by name and produces consistent output without requiring a detailed prompt each time. Skills are most valuable for repeated tasks with consistent inputs and outputs. Create them for tasks you do weekly or more; name them specifically; test them before relying on them.
