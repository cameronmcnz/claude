---
layout: lesson
title: "Spotting Hallucinations and Unsupported Claims"
section: 8
section_title: "Quality Control & Responsible Use"
section_slug: "08-quality-control"
order: 3
noindex: true
---

# Spotting Hallucinations and Unsupported Claims

The word "hallucination" has become common in AI discussions, but it's often misunderstood. It doesn't mean Claude is making random errors or malfunctioning. It means Claude is generating plausible-sounding content that is not grounded in verified facts. Learning to spot it is a skill, not an instinct.

## Why this matters

Hallucinations are dangerous precisely because they don't look different from accurate information. A fabricated statistic is formatted the same way as a real one. A non-existent study is cited with the same confidence as a real study. The output reads fluently because it was generated to be fluent, not because it's correct.

The practical consequence: you can't rely on "this feels wrong" to catch AI hallucinations. You need a more systematic approach.

## What hallucination looks like in professional output

**Fabricated specifics with high confidence.** "According to a 2023 McKinsey report, 67% of procurement leaders cited..." If you can't find the specific report or the specific figure, assume it's fabricated. Consulting firm reports are a commonly hallucinated category because they're frequently cited in Claude's training data.

**Plausible but wrong personnel or organization details.** "The CEO of [company] stated..." where the CEO either isn't the right person or the statement can't be verified. Organizational facts change; Claude's training data may reflect a past state.

**Accurate-seeming historical details that are subtly wrong.** Dates that are off by a year or two. Events attributed to the wrong person. Cause-and-effect relationships that are inverted from what actually happened. These are particularly hard to spot because they're close to correct.

**Implicit claims that go further than the evidence.** Claude might accurately describe a study's findings but then draw a conclusion from it that the study didn't actually support. The citation is real; the inference is fabricated.

**Confident answers to questions Claude can't actually answer.** If you ask Claude about something that's highly specific to your context, your company, or recent events, and Claude gives you a detailed answer, be suspicious. It's working from general patterns, not knowledge of your situation.

## The verification question

For any specific factual claim that matters, ask yourself: can I point to a source for this? Not "does this seem like it could be true?" but "where would I go to verify this independently?"

If there's no source you could check:
- The claim may be true but unverifiable through Claude (it exists in the world but not in a source you can access quickly)
- The claim may be Claude's reasonable inference from related information
- The claim may be fabricated

All three produce the same-looking output. The verification question distinguishes them.

## High-hallucination contexts

Some request types produce higher hallucination rates. Be more vigilant when Claude is:

- **Generating quantitative data** about specific markets, industries, or organizations
- **Citing academic, consulting, or research sources** for specific claims
- **Writing about recent events or developments** (past two years)
- **Describing specifics of technical standards, regulations, or legal frameworks**
- **Filling in details** about your specific organization, clients, or situation that you didn't provide

Lower-hallucination contexts: summarizing a document you provided, reformatting content you gave it, reasoning through a problem with explicit input you supplied, writing creative content that doesn't claim factual accuracy.

## The unsupported-claim variant

Hallucination is generating false content. Unsupported claims are a related but distinct problem: Claude makes a claim that may be true but that is not supported by the information provided.

In analytical or recommendation outputs, Claude sometimes draws conclusions that go beyond the evidence. "Based on this data, the market is clearly moving toward X" when the data shows a trend but doesn't clearly establish direction. "This approach is superior" when the comparison wasn't made on all the relevant dimensions.

Unsupported claims are caught by asking: "What in the information I provided (or that you know verifiably) supports this conclusion?" If Claude can't point to specific support, the claim is an extrapolation that should be labeled as such.

## Practical example

A communications consultant asks Claude to write a background section for a client pitch, providing some context about the client's industry. Claude returns a well-written section that includes:
- A claim about the industry's revenue growth rate: sounds right but specific enough to require checking
- A reference to "a growing body of research" showing X: vague generalization, not a claim
- A citation: "according to Gartner's 2024 Industry Forecast": needs verification; may not exist
- A statement about competitive dynamics: plausible inference from the context she provided

She applies verification: the growth rate figure traces to a real report with a slightly different number (she adjusts). The "growing body of research" she converts to a more specific claim or removes. The Gartner citation doesn't exist in the form Claude described (she removes it). The competitive dynamics statement she labels as her analysis rather than a factual claim.

The section that goes to the client is accurate and appropriately scoped. The version Claude produced was not.

## Try this in Claude

Ask Claude to write a brief about a topic in your field that includes specific facts and statistics. Then ask: "For each factual claim in what you just wrote, tell me: how confident are you and what's your source?" Claude's answer will distinguish between claims it's grounding in training data, claims it's inferring, and claims it's genuinely uncertain about. This calibrates your verification priorities.

## Pro tips

- Treat specific numbers as the highest-risk element in any AI-generated analysis. Always spot-check at least two or three figures.
- If Claude cites an organization or study you've never heard of, search for it before relying on it.
- Ask Claude to "flag any claims in this output that are based on general patterns rather than specific verifiable sources." Claude will often identify its own hallucination risk areas when asked.
- For documents going to external stakeholders, consider a policy: all statistics require a verifiable source before the document is shared. This forces verification without having to decide case by case.

## Quick summary

Hallucinations are plausible-sounding content Claude generates without factual grounding. They look identical to accurate content. High-risk contexts include specific data, citations, recent events, and details about your specific situation. Unsupported claims are a related problem: conclusions that go beyond the evidence. The core verification habit: for any specific claim that matters, identify the source that would verify it. If there isn't one, the claim is either unverifiable or fabricated.
