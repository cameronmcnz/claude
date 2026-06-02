---
layout: lesson
title: "Checking Facts, Dates, and Assumptions"
section: 8
section_title: "Quality Control & Responsible Use"
section_slug: "08-quality-control"
order: 2
noindex: true
---

# Checking Facts, Dates, and Assumptions

Factual verification in AI output is not random. Claude's errors concentrate in predictable places: specific numbers, specific dates, specific names, recent events, and claims that were never stated but are implied. Knowing where to look makes verification faster and more reliable than a general sense of "I should check this."

## Why this matters

Checking everything is impractical. Checking nothing is reckless. The skill is in knowing which claims carry the most risk if wrong and focusing verification effort there. This lesson gives you that map.

## The high-risk claim types

**Specific statistics and figures.** Numbers that sound precise are often the most confidently wrong things in Claude's output. Market size estimates, percentage figures, survey results, performance benchmarks. These feel authoritative because they're specific. They're among the most commonly fabricated. Treat every specific number as a verification priority.

**Named sources and citations.** Claude will cite studies, reports, books, and articles that don't exist. The title and author sound plausible; the study is invented. Never use a citation from Claude without verifying it against a real source.

**Dates and timelines.** Event dates, launch dates, milestone dates, and timeline references are frequently wrong. This is especially true for anything in the past few years (approaching Claude's training cutoff) or anything that involves specific scheduling.

**Personnel and organizational facts.** Who leads which organization, which company acquired which, which person holds which role. These change, and Claude's training data captures a snapshot. Verify before referencing in anything external-facing.

**Legal and regulatory claims.** Statements about what laws require, what regulations permit, or what compliance means in a specific context. These require professional review, not just fact-checking.

**Comparative or superlative claims.** "The largest," "the most commonly used," "the leading provider." These are often unverifiable generalizations that Claude presents as fact.

## Assumptions: the harder check

Facts can often be verified against sources. Assumptions are harder because they're often invisible. Claude builds assumptions into its reasoning without labeling them as assumptions. Finding and checking them requires a different approach.

Ask Claude directly: "What assumptions is this analysis built on?" or "What would need to be true for this recommendation to be valid?" Claude will surface assumptions it embedded in its reasoning that you wouldn't have noticed otherwise.

Common assumption types to check:
- **Market and competitive assumptions:** "The market is growing" or "competitors offer X" may be assumptions rather than verified facts.
- **Audience assumptions:** Claude may assume things about your customers, readers, or stakeholders that aren't accurate to your specific situation.
- **Context assumptions:** Claude may assume the most common version of a situation you described, when your situation is actually a less common variant.
- **Recency assumptions:** Claude may reason as if conditions from its training data are still current.

## How this works in practice

Build a lightweight verification step into your review workflow. For any output you'll share externally or act on:

1. **Scan for numbers and dates.** Highlight every specific figure and date. Decide which ones you'll verify and against what source.
2. **Check any citations.** Search for cited sources before including them. If they don't exist, remove the citation.
3. **Ask about assumptions.** For analytical or recommendation outputs, send "what assumptions is this built on?" before finalizing.
4. **Flag recent events.** Any claim about something that changed in the last year or two warrants a quick check that Claude's information is current.

## Practical example

A business analyst asks Claude to draft a competitive analysis section for a market entry brief. Claude produces a well-structured section with market share figures, a competitor ranking, and a trend summary with a specific growth rate.

Before the brief goes to the client, the analyst runs her verification routine:

- Three market share figures: she finds a source for one, can't verify the other two. She replaces the unverifiable figures with approximate ranges and notes "estimated."
- A competitor described as "the market leader": she checks and finds the landscape shifted after Claude's training cutoff. The "market leader" was acquired. She updates the section.
- A 12.4% annual growth rate: she traces Claude's likely source, finds the study exists but the figure cited was for a different market segment. She corrects it.
- "Assumptions" prompt: Claude reveals it assumed the market is primarily North American, when the client's target is Europe. The entire competitive landscape needs to be reoriented.

The verification took twenty minutes and prevented four errors from reaching the client.

## Try this in Claude

Take any Claude output that contains specific claims: figures, dates, named sources, or comparative statements. Apply the four-step verification routine above. Note: how many claims survive verification unchanged? How many need modification? How many need to be removed or replaced?

## Pro tips

- For fact-dense outputs, ask Claude to produce the output with inline uncertainty flags: "After each factual claim you're not certain about, add [unverified] in brackets." This speeds your review by pre-marking what needs attention.
- Sources that Claude cites from before 2020 are somewhat more reliable than those from 2022-2024, simply because there's been more time for errors in training data to be identified and corrected. Recency of the cited material increases verification priority.
- For regulatory or legal claims: verify with a professional, not with another AI tool. AI fact-checking AI is not a reliable quality control loop.

## Quick summary

Facts, dates, and assumptions require targeted verification, not a general "looks right" review. High-risk areas: specific statistics, named citations, dates, personnel facts, and legal claims. Assumptions require a direct prompt to surface. Build a lightweight four-step verification habit for any output you'll share externally or act upon. Verification takes time but prevents the specific category of mistake that damages credibility and decisions.
