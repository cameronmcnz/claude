---
layout: lesson
title: "Why AI Output Needs Review (And What Goes Wrong When It Doesn't)"
section: 8
section_title: "Quality Control & Responsible Use"
section_slug: "08-quality-control"
order: 1
noindex: true
---

# Why AI Output Needs Review (And What Goes Wrong When It Doesn't)

Claude is fast, articulate, and frequently right. It is also capable of being confidently, fluently wrong in ways that are not obvious until something breaks. Understanding the specific mechanisms that produce that wrongness, not as a theoretical concern but as a practical reality, is what makes review a habit rather than a formality.

## Why this matters

The value of speed is real. Claude compresses hours of work into minutes. The risk is that the compressed work might contain errors that a slower process would have caught. The people who get burned by AI output are not usually the careless ones; they're the busy ones, moving fast through a stack of work, who reviewed the output with the part of their brain that was expecting it to be right.

Understanding *why* Claude makes mistakes makes it easier to look for the right things when you review.

## The mechanics of AI error

Claude generates text by predicting what would be an appropriate and plausible continuation of the input. This process is powerful for producing coherent, relevant output. It creates three specific failure modes that aren't obvious from the outside:

**Hallucination:** Claude generates information that is plausible-sounding but fabricated. A statistic it hasn't seen but that fits the pattern. A citation that doesn't exist. A name that sounds right. A date that's close but wrong. Claude doesn't know it's doing this; it's not choosing to deceive. It's filling in the most plausible continuation of the text.

**Overconfidence:** Claude often presents uncertain information with the same confident tone it uses for certain information. There's no "I'm not sure about this" in the delivery unless you specifically ask. A guess and a fact sound the same.

**Outdated knowledge:** Claude's training has a cutoff date. Events, personnel changes, policy updates, market conditions, and product features that changed after that date are unknown to Claude unless you supply the current information. Claude may answer based on outdated facts without signaling that the information might be stale.

**Misinterpretation:** Claude can misread what you're asking for, especially when the brief is ambiguous. The output is responsive to what Claude thought you meant, not necessarily what you actually meant. This error is often invisible until you look at whether the output actually serves your purpose.

**Interpolation errors:** When reasoning from partial information, Claude fills gaps in ways that seem logical but may not be accurate to the specific situation you're in.

## What review is actually for

Review is not about finding whether Claude is right or wrong. It's about applying your judgment and ground truth to Claude's output before it gets used. You know things Claude doesn't: what's current, what's specific to your organization, what the actual situation is, what the recipient will actually need.

Review is the step where your knowledge and Claude's generation capability combine to produce something reliable.

This is true for text you'll send to someone else. It becomes more critical for actions Claude takes on your behalf, because an action with an error in it doesn't sit in a draft waiting to be corrected. It happens.

## A taxonomy of AI output by review burden

| Output type | Review burden | Why |
|---|---|---|
| Internal brainstorm notes | Low | Stakes are low; errors are recoverable |
| Draft for your own editing | Low-medium | You're the next reviewer |
| External-facing communication | Medium-high | Errors affect others; trust is at stake |
| Communication claiming specific facts | High | Factual errors travel |
| Decisions based on AI analysis | High | Errors compound into downstream decisions |
| Automated actions taken by Claude | Very high | Irreversibility |

## Practical example

A professional services firm uses Claude to draft client proposals. The first few go through careful review. As the team gets comfortable, they start lightening the review process, checking format but not substance.

Six months in, a proposal goes out with a market size figure that Claude hallucinated. The figure was plausible, formatted correctly, and appeared in a table that was clearly well-organized. No one checked it against a source. The client noticed. They cited it in a conversation as evidence that the firm didn't do its homework.

The error was fixable. The trust damage was not. The review that would have caught it: one check that asked "where does this number come from?"

## Try this in Claude

Ask Claude to write a short analysis of something in your domain, something you know well. Identify three specific claims in the output. For each claim, ask yourself: how would I verify this? If you can't, ask Claude where the claim comes from. Note how often the answer is essentially "I generated this from training data" rather than "this comes from a specific source."

This exercise calibrates how much verification effort your domain typically requires.

## Pro tips

- Build review into the process, not after it. The most reliable review happens before the output leaves your hands, not after it's been shared.
- "What are you least confident about in this response?" is a useful prompt after any Claude output involving facts. Claude will often flag its own uncertainty when asked.
- For high-stakes outputs, change the reading mode: read it as the skeptical recipient, not as the author who knows what was meant.

## Quick summary

Claude generates plausible, fluent output that can be wrong in ways that aren't obvious: hallucinated facts, overconfident claims, outdated information, and misinterpretation of intent. Review is not about doubting Claude; it's about applying your knowledge and ground truth before output becomes action. The review burden scales with the stakes of the output and the reversibility of any subsequent action.
