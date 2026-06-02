---
layout: lesson
title: "Privacy and the Review Habit: Two Things You Can't Skip"
section: 1
section_title: "Foundations, Models & Safe Setup"
section_slug: "01-foundations"
order: 6
noindex: true
---

# Privacy and the Review Habit: Two Things You Can't Skip

There are two practices that separate people who use Claude well from people who eventually get burned by it. The first is being deliberate about what you share. The second is reviewing what Claude produces before you act on it. Neither takes much time. Both prevent the kind of mistakes that are embarrassing at best and genuinely harmful at worst.

## Why this matters

Claude is a powerful tool that processes everything you give it. That's what makes it useful. It's also what makes it worth thinking carefully about before you paste in a client's financial records, your company's unreleased product roadmap, or an employee's performance review.

On the output side, Claude is fluent, confident, and fast. Those qualities make its mistakes easy to miss. A factual error delivered with authority reads the same as a factual truth. A draft email with a subtle tone problem gets sent if no one reads it carefully first. The habit of review is cheap insurance against a long list of avoidable problems.

And in Act 2 of this course, when Claude moves from producing text you read to taking actions on your behalf, the stakes go up further. The review habit you build now will carry directly into that higher-stakes context.

## Privacy: what to share and what to protect

Claude is developed by Anthropic. Conversations you have through Claude's consumer products may be used, subject to Anthropic's current privacy policy, to improve models. Enterprise and API customers have different data handling arrangements. If you're using Claude in a business context and data handling matters to your organization, check the current policy and your plan terms rather than assuming.

The practical principle: treat Claude like a capable outside contractor who is excellent at the work but not bound by your company's confidentiality agreements unless you've arranged that explicitly.

**Think carefully before sharing:**

- Client names, deal terms, or confidential business information
- Personal data about employees, customers, or individuals (health information, financial details, performance records)
- Unreleased product plans, pricing strategy, or competitive intelligence
- Legal communications with privilege implications
- Anything covered by an NDA or regulatory requirement

**What you can share without much concern:**

- General descriptions of a problem without identifying details ("a client in retail" rather than the client's actual name)
- Your own work and thinking
- Public information, general industry context, published documents
- Sanitized versions of documents where identifying details have been removed

A useful test: before pasting something into Claude, ask whether you'd be comfortable if that content were visible to someone outside your organization. If not, either anonymize it or find a different approach.

## The review habit: build it now

Claude's output should be treated as a well-researched first draft from a smart, fast, occasionally overconfident assistant. That framing tells you the appropriate response: read it, check it, and edit it before you use it.

The review habit has three components:

**Read it as the recipient would.** Don't read your draft email with the knowledge of what you meant. Read it as if you just received it. Does it say what you intended? Does the tone land correctly? Is anything ambiguous or likely to be misread?

**Check the facts that matter.** For any specific claim, number, date, name, or citation that will be acted on, verified independently. Claude can be wrong on these with complete confidence. It's not trying to mislead you; it simply generates plausible-sounding content and doesn't always know where the plausible stops and the accurate begins.

**Ask whether the output actually answers what you needed.** Claude sometimes produces something technically responsive to your prompt that isn't actually what you needed. This is more common with vague prompts, but it happens with clear ones too. A quick check: does this output move my actual goal forward, or did Claude answer a slightly different question than the one I was asking?

## Workflow design notes

The stakes of review scale with the consequence of being wrong. A Claude-drafted internal brainstorm note needs light review. A client-facing proposal with specific claims needs careful review. A legal document or regulatory filing needs professional review by a qualified person, regardless of how good Claude's draft is.

As you move through this course, the review habit applies to increasingly consequential outputs:

- In Chat sections: review text before sharing or sending
- In the Bridge section (Section 8): build formal review processes for outputs that will be published or distributed
- In Cowork sections: review before authorizing automated actions, because automated errors can compound faster than manual ones

Think of it as a sliding scale: the more consequential and irreversible the action, the more deliberate the review should be.

## A privacy rule for memory

One specific note worth calling out: Claude's memory feature, which you covered in the previous topic, can store context across conversations. Be intentional about what ends up there. Business-sensitive details, client-specific information, and anything confidential probably shouldn't persist in a general memory store. Keep that kind of context within a specific conversation or Project where you have more control over its scope and lifespan.

## Try this in Claude

Draft a short version of your personal privacy rules for using Claude. It can be simple: a list of categories of information you will and won't share, and a note about what level of review you'll apply to different types of output.

This becomes the privacy section of your mini project (the Claude Setup and Safety Profile). Having it written down means you'll actually follow it, and it's a useful artifact if you're ever asked by a manager or security team how you're using AI tools.

A starter template:

> **I will not share with Claude:** [specific categories for your context]
> **I will treat Claude's output as a draft and verify before use in:** [circumstances where accuracy matters]
> **I will apply additional human review before:** [high-stakes actions or published outputs]

## Pro tips

- Anonymize before you paste. "Our largest retail client" is usually sufficient context. You don't need to name them.
- If you work in a regulated industry (finance, healthcare, legal), check with your compliance team before using consumer Claude tools for work involving regulated data. Enterprise agreements and on-premises deployments exist for exactly these situations.
- The review habit is easier to maintain if you build it into your workflow explicitly. "I'll read this once before I send it" is a rule you'll follow. "I'll review it if something feels off" is not.
- Don't conflate reviewing with rewriting everything from scratch. The goal is to catch errors and adjust tone, not to undo Claude's work.

## Quick summary

Be deliberate about what you share with Claude: treat it like a capable outside contractor without a confidentiality agreement, and keep sensitive business and personal data out of general conversations. Build the habit of reviewing Claude's output before you act on it: read it as the recipient would, check any facts that matter, and confirm it answers the question you actually asked. These two practices protect you and the people your work touches, and they become more important as Claude takes on more autonomous work later in this course.
