# Where Claude Excels (And Where It Will Let You Down)

Knowing what a tool does well is useful. Knowing where it quietly fails is essential. Claude has genuine strengths that most professionals underuse, and predictable failure modes that catch people off guard every time. This lesson maps both so you can deploy Claude where it helps and stay skeptical where it doesn't.

## Why this matters

The most expensive Claude mistakes don't come from obvious errors. They come from plausible-sounding output that's wrong in subtle ways: a date that's slightly off, a statistic that's close but fabricated, a legal principle that's nearly right but not quite. People trust it because it sounds authoritative. They act on it. Then something goes wrong.

The other cost is missed opportunity. People who treat Claude as a drafting tool and nothing more are leaving most of its value on the table. Claude can do far more than polish sentences. Understanding its real strengths changes how ambitiously you use it.

## The idea in plain English

Claude's strengths cluster around language, reasoning, and structure. Its failure modes cluster around facts, numbers, and anything that requires access to current or external information.

**Where Claude is genuinely strong:**

*Drafting and rewriting.* Claude is fast, consistent, and good at matching tone. It can draft a client email, a board memo, a job posting, or a product brief in a fraction of the time it would take to write from scratch. It can rewrite your draft to be more concise, more formal, or more persuasive on request.

*Summarization.* Give Claude a long document, thread, or transcript, and it will pull out the key points accurately and quickly. It handles legal documents, research papers, meeting notes, and dense reports well. This is one of its most reliable use cases.

*Explanation and teaching.* Claude is an excellent explainer. It can take a complex concept and render it clearly for a non-expert audience. This makes it useful for onboarding materials, training content, FAQs, and customer-facing documentation.

*Reasoning through problems.* Claude can walk through a decision, weigh tradeoffs, identify risks, and structure a recommendation. It's not infallible here, but for many professional decisions it gives you a thoughtful sounding board that's available instantly.

*Structuring unstructured input.* You give Claude a brain dump, a set of rough notes, or a disorganized list. It returns a structured document. This is surprisingly useful and underused.

*Translation and adaptation.* Not just language translation. Claude can translate ideas between audiences: take a technical spec and rewrite it for a business audience, take a regulatory document and surface the parts that matter to a specific team.

**Where Claude fails:**

*Precise facts, especially recent ones.* Claude has a training cutoff. It doesn't know what happened last week. Even within its training data, it can confuse specifics: wrong years, wrong figures, misattributed quotes. If the fact matters, verify it independently.

*Arithmetic and calculation.* Claude can reason about math, but it makes arithmetic errors. It's better than it used to be, and worse than a calculator. For anything financial or quantitative, verify the numbers.

*Citations.* Claude will sometimes invent sources. It generates plausible-sounding references that don't exist. Never use a Claude-supplied citation without checking that the source is real.

*Your internal information.* Claude doesn't know your company, your clients, your policies, or your history unless you tell it. It will fill gaps with plausible-sounding generic content if you don't provide the specifics.

*Predicting outcomes.* Claude can reason about probability and risk, but it is not a forecasting tool. Treat its predictions as structured thinking prompts, not forecasts.

## A practical map

| Task | Claude reliability | Notes |
|---|---|---|
| Drafting emails and documents | High | Review tone and specifics |
| Summarizing long text | High | Works well with supplied documents |
| Explaining complex concepts | High | Verify technical accuracy in specialized domains |
| Structuring rough notes | High | Useful and underused |
| Recent news or events | Low | Training cutoff applies |
| Precise statistics | Low | Verify independently |
| Citations and references | Low | Often fabricated; always check |
| Arithmetic | Medium | Use a calculator for anything that matters |
| Your internal business data | N/A | Claude only knows what you share |

## Practical example

A consultant uses Claude to prepare for a client workshop on supply chain risk. She pastes in a 40-page industry report and asks Claude to summarize the top five risks and flag any that apply to her client's industry. Claude produces a sharp summary in two minutes.

She then asks Claude: "What was the global average lead time for electronics components in Q3 last year?" Claude gives a number with confidence. She doesn't verify it. It ends up in her slide deck. At the workshop, a client asks for the source. She can't provide one because the number was fabricated.

The summary: reliable. The specific statistic: not. Same session, same tool, very different reliability depending on the type of task.

## Workflow design notes

Design Claude into workflows based on where it's strong. Use it to draft, summarize, explain, and structure. Build in human verification for any output involving specific facts, numbers, dates, or citations that will be published or acted upon.

In Cowork, as Claude starts doing more autonomous work, these failure modes matter more. An automated email drafted with a fabricated statistic, sent without review, is a problem. The solution is to identify which parts of a workflow carry factual risk and build review steps around them.

## Try this in Claude

Send this prompt:

> "I need to write a short briefing document on [a topic relevant to your work]. Before you draft it, tell me: which parts of this topic are you confident about, and where should I verify your output before using it?"

This builds a useful habit: asking Claude to flag its own uncertainty before you commit to anything.

## Pro tips

- Always supply source material for fact-sensitive tasks. Don't ask Claude to recall facts from training when you can paste in the actual document.
- For anything you'll share externally, read it as if you're the skeptical recipient. Claude's confident tone is not the same as accuracy.
- Use Claude for the thinking and drafting. Use your own judgment and primary sources for verification.
- The more specific and bounded the task, the more reliable the output. "Draft an agenda for a 45-minute team retrospective" is better than "help me with my team."

## Quick summary

Claude is strong at drafting, summarizing, explaining, reasoning, and structuring. It is unreliable on precise facts, recent events, arithmetic, and citations. Knowing the difference is not a caution label; it's the operating manual. Design your use of Claude around its actual strengths, and build verification into any workflow where accuracy matters.

---

This is a 14-section course (7 Chat · 1 Bridge · 6 Cowork), with the sections being:
Section 1 (Chat): Foundations, Models & Safe Setup
- What Claude is and how it differs from search
- Where Claude is strong and where it can fail
- Choosing a model: Sonnet for well-scoped, specific tasks; Opus for ambiguous or interpretive work where Claude must figure out what you actually want
- Memory: now available on all tiers, auto-summarizing past conversations; how to view, edit, and delete it in Settings
- Searching and referencing past chats
- Privacy basics and human review

Section 2 (Chat): Prompting & Iteration
- Role, task, context, and output format
- Adding examples and constraints
- Asking for tables, outlines, and checklists
- Using follow-up questions
- Critique and revision loops

Section 3 (Chat): Voice, Files & Everyday Knowledge Work
- Using voice on desktop and mobile
- Turning speech into notes, plans, and drafts
- Uploading files and documents
- Summarizing PDFs, notes, and transcripts
- Extracting action items, risks, and follow-up questions

Section 4 (Chat): Connectors: Email, Calendar & the Connector Ecosystem
- Searching email with natural language
- Summarizing email threads
- Drafting replies from inbox context
- Finding free time and scheduling time blocks
- Analyzing calendar patterns against goals
- Preview: the same connectors will power Dispatch in Act 2

Section 5 (Chat): Projects as Your Workspace
- What Claude Projects are
- Projects as context folders
- Adding documents, PDFs, and reference material
- Writing Project instructions
- Projects vs Artifacts: persistent inputs vs the things you produce
- Using Projects for research, content, and collaboration

Section 6 (Chat): Artifacts, Interactive Visuals & Claude Design
- What Artifacts are and how they differ from chat responses
- Creating mini apps and editable tools
- Visualizing frameworks and processes
- Inline interactive charts (paste numbers, get an interactive chart in the chat)
- Pitch decks, one-pagers, and landing-page mockups with Claude Design
- Reviewing and refining AI-generated designs
- Teaser: live artifacts as the Cowork upgrade (Section 13)

Section 7 (Chat): Skills, Plugins & Chat Power Features
- What Skills are and how to create, browse, and install them
- Plugins and the plugin marketplace: bundles of skills, connectors, and knowledge in one install
- The hierarchy: prompt < Skill < Plugin < Project
- Power features: Fork, /rewind, /recap, /btw
- Output Styles for consistent formatting
- Choosing the right tool for a repeated task

Section 8 (Bridge): Quality Control & Responsible Use
- Why AI output needs review
- Checking facts, dates, and assumptions
- Spotting hallucinations and unsupported claims
- Reviewing connected-tool and automation output
- The stakes shift: reading output vs authorizing actions
- Building quality-control checklists

Section 9 (Cowork): Meet Cowork: The Agentic Desktop
- What Cowork is and how it differs from Chat
- The three-tab desktop app: Chat, Cowork, and Code
- File-system access and the permission dialogs you grant on setup
- Global instructions vs per-folder instructions
- Connectors and plugins inside Cowork
- Cowork instructions vs Project instructions
- Review mode vs action mode

Section 10 (Cowork): Automation: Scheduled & Recurring Tasks
- The /schedule skill and the Scheduled Tasks sidebar
- Cadences: hourly, daily, weekly, weekdays-only
- Keep-awake, and missed runs that auto-execute when the computer wakes
- Per-run access to files, connectors, and plugins
- Daily-digest and weekly-report patterns

Section 11 (Cowork): Dispatch: Run Cowork from Your Phone
- What Dispatch is: one continuous conversation linking the mobile app to the desktop app
- The fast reach methods — connectors (direct, in seconds) and the Chrome extension (for web apps)
- Writing a complete, upfront prompt: what to read, where to look, what format to return
- The keep-awake requirement and why the desktop app must stay open
- Picking up finished work on the desktop later
- Security for remote access and connected tools

Section 12 (Cowork): Computer Use: Letting Claude Operate Your Apps
- Computer use as the last-resort reach for apps with no connector and no web version
- Research-preview status: off by default, enabled in Dispatch settings
- Per-app approval, plus accessibility and screen-recording permissions
- When to prefer connectors or the Chrome extension instead (they're faster)
- Risks and the extra review computer-use output deserves

Section 13 (Cowork): Live Artifacts: Self-Updating Dashboards & Tools
- Live artifacts vs static artifacts
- Connecting an artifact to MCP servers and connectors
- Auto-refreshing dashboards, briefings, and reports
- The Live Artifacts tab and the refresh control
- Pairing live artifacts with scheduled tasks for always-current output

Section 14 (Cowork): Managed Agents, Capstone & Graduating to Claude Code
- Managed Agents and vertical bundles (Legal, Financial Services, Small Business, Marketing Ops)
- When a plugin or managed agent beats a do-it-yourself workflow
- A short orientation to Claude Code and Channels for learners who want to go further
- Designing a complete Claude system: privacy, review, and success criteria

---

**Section 1 (Chat): Foundations, Models & Safe Setup**

Topics covered in this section:
- What Claude is and how it differs from search
- Where Claude is strong and where it can fail
- Choosing a model: Sonnet for well-scoped, specific tasks; Opus for ambiguous or interpretive work where Claude must figure out what you actually want
- Memory: now available on all tiers, auto-summarizing past conversations; how to view, edit, and delete it in Settings
- Searching and referencing past chats
- Privacy basics and human review

**This topic:** Where Claude is strong and where it can fail

**Mini project:** Claude Setup & Safety Profile: Create a one-page setup guide with preferred model choices per task type, memory/context notes, privacy rules, and a personal review checklist.
useful habit: asking Claude to flag its own uncertainty before you commit to anything.

## Pro tips

- Always supply source material for fact-sensitive tasks. Don't ask Claude to recall facts from training when you can paste in the actual document.
- For anything you'll share externally, read it as if you're the skeptical recipient. Claude's confident tone is not the same as accuracy.
- Use Claude for the thinking and drafting. Use your own judgment and primary sources for verification.
- The more specific and bounded the task, the more reliable the output. "Draft an agenda for a 45-minute team retrospective" is better than "help me with my team."

## Quick summary

Claude is strong at drafting, summarizing, explaining, reasoning, and structuring. It is unreliable on precise facts, recent events, arithmetic, and citations. Knowing the difference is not a caution label; it's the operating manual. Design your use of Claude around its actual strengths, and build verification into any workflow where accuracy matters.
