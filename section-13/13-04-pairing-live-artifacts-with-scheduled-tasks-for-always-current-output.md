# Pairing Live Artifacts with Scheduled Tasks

A live artifact fetches current data when you open it. A scheduled task produces processed output on a timer. Combining them creates something more useful than either alone: a live artifact that's always current, with pre-processed output waiting for you before you even open it.

## Why this matters

Live artifacts that require significant data processing take time to load: connector calls, AI summarization, data synthesis. If you open your morning briefing artifact and wait ninety seconds for it to load, the experience degrades. If a scheduled task ran that processing at 6:30am, the artifact loads in seconds because the heavy lifting is already done.

The pairing also handles the gap between "artifact data" and "artifact insight." Raw connector data is retrievable by the artifact. Synthesized insights, structured summaries, and AI-produced interpretations need a processing step. The scheduled task is that processing step.

## The architecture

**Without scheduled task:**
Open artifact → Artifact calls connectors → Connectors return raw data → Artifact renders (possibly slow, possibly raw)

**With scheduled task:**
Scheduled task runs at 6:30am → Reads connectors, processes with Claude, writes results to file → You open artifact at 7am → Artifact reads pre-processed file → Artifact renders quickly with clean output

The artifact still connects to live data, but some of that data is the pre-processed file rather than raw connector output. This is hybrid architecture: some data is real-time (calendar, for accurate timing), some data is pre-processed (email synthesis, which is better done once in the background).

## When to add a scheduled task to a live artifact

Add a scheduled task when:
- The artifact's load time is too slow due to data processing overhead
- The artifact uses AI summarization that takes too long to run at open time
- The artifact synthesizes data from many sources and the synthesis step is intensive
- You want the output to be ready before you open it, not computed when you do

Skip the scheduled task when:
- The artifact loads quickly enough already
- The data needs to be completely real-time (a task queue, a chat inbox)
- The scheduled task cadence doesn't align with your artifact use pattern

## Designing the pair

When designing a live artifact with a scheduled task:

1. The scheduled task writes its processed output to a specific file in your Cowork outputs folder
2. The live artifact reads that file as one of its data sources
3. The artifact also reads real-time connectors for data that benefits from freshness (calendar, current file state)
4. The artifact renders from the combination

Name the output file clearly: `morning-briefing-latest.md` or `weekly-digest-current.md`. The artifact reads the latest version of that file each time it opens.

## Practical example

A morning briefing live artifact is paired with a 6:30am scheduled task:

**Scheduled task (6:30am):**
Reads email since yesterday, summarizes with Claude, writes to `/Cowork Outputs/morning-briefing-latest.md`

**Live artifact (opens at 7am):**
Reads `morning-briefing-latest.md` (the pre-processed email summary) + reads today's calendar in real time + renders both together

Load time: fast. Content: current email summary + today's live calendar.

## Try this in Claude

If your live artifact has a slow-loading section (usually AI summarization of email or documents), plan a scheduled task that pre-processes that section and writes the result to a file. The artifact reads the file instead of generating the summary at load time. Measure the load time difference.

## Quick summary

Pairing live artifacts with scheduled tasks separates slow preprocessing (done on schedule) from fast rendering (done at open time). The scheduled task runs early, processes data with AI, writes results to a file. The live artifact reads that file plus any real-time connector data needed. The result: fast-loading artifacts with pre-processed insights waiting when you open them.
