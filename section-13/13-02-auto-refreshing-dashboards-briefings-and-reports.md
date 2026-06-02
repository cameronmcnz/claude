# Auto-Refreshing Dashboards, Briefings, and Reports

Three patterns consistently deliver value as live artifacts: personal dashboards, briefing pages, and recurring reports. Each has a specific design that makes it genuinely useful rather than technically impressive but practically ignored.

## Why this matters

The difference between a live artifact you check daily and one you open twice and forget about is almost entirely in the design: whether it answers a question you actually have, displays information at the right level of detail, and loads reliably every time.

## Pattern 1: The Personal Dashboard

A personal dashboard answers the question "what do I need to know right now?" It shows current state across the dimensions that matter most to you: inbox priority, calendar for the day, active project status, pending decisions.

**Design principles:**
- One screen, no scrolling needed (or minimal scrolling)
- Information organized by urgency, not by source
- Action-oriented: each item should suggest what to do with it
- Loads fast: three to five connector calls maximum

**Good content sources:** Email inbox (urgent/flagged items), today's calendar, file system (files modified recently), project management connector.

**Sample prompt for building:**
> "Build a live personal dashboard that: (1) shows my top 5 priority emails from today using the email connector, (2) shows today's calendar events, (3) shows any files in my 'Action Required' folder. Use a clean layout with three sections. Handle connector errors gracefully."

## Pattern 2: The Briefing Page

A briefing page answers "what happened since I last checked?" It synthesizes recent activity from multiple sources into a coherent narrative, often with AI summarization.

**Design principles:**
- Time-bounded: since yesterday, since last week, since you last opened it
- Synthesized, not just listed: use `askClaude` to produce brief summaries rather than raw connector data
- Readable in under three minutes

**Good content sources:** Email summaries, calendar review, any project or document activity.

**What makes it work:** The `askClaude` function. Raw email data displayed as a list is not a briefing. Email data processed through a brief summarization prompt becomes one.

## Pattern 3: The Recurring Report

A recurring report answers "how are we tracking against what we care about?" It shows metrics, status indicators, and trend data that you check on a regular cadence.

**Design principles:**
- Consistent format so changes are immediately visible
- Traffic light indicators (green/yellow/red) for quick scanning
- Historical context where it adds value (this week vs. last week)

**Good content sources:** Project management tools, CRM, file-based metrics you maintain.

**What makes it work:** The format must stay constant; only the data changes. If the format shifts between visits, you lose the ability to scan quickly for changes.

## Choosing between patterns

Ask what question the artifact should answer:
- "What do I need right now?" → Dashboard
- "What happened?" → Briefing
- "How are we doing?" → Report

A single live artifact that tries to answer all three questions is usually too complex and too slow. Build separate artifacts for separate questions.

## Try this in Claude

Pick one of the three patterns and build a first version for your work context. Start simpler than you think you need to: one or two data sources rather than five. Verify it loads correctly and displays useful data. Add sources once the basic pattern works.

## Quick summary

Three live artifact patterns work consistently well: personal dashboards (current state), briefing pages (recent activity, AI-summarized), and recurring reports (metrics and status). Each answers a different question. Design each for its specific purpose rather than combining all three into one. Start simple and add complexity only after the basic version proves reliable.
