# What Claude Is (And Why It's Not a Search Engine)

If your mental model for Claude is "fancy Google," you're going to be disappointed, confused, or both. The two tools do fundamentally different things, and understanding that difference is the first step to using Claude well.

## Why this matters

Every day, people ask Claude questions it can't reliably answer, and ignore the things it does better than almost anything else, because they're treating it like a search engine. They ask for today's news. They ask for exact stock prices. They ask for the current version of a software package. Then they get a confident-sounding answer that's out of date or wrong, and they either trust it (bad) or dismiss Claude entirely (also bad, just for different reasons).

The fix isn't to use Claude less carefully. It's to understand what kind of tool you're actually using.

## The idea in plain English

A search engine retrieves documents. You type a query, it finds web pages that match, and it shows you links. The information lives somewhere on the internet; the search engine's job is to find it and rank it.

Claude works entirely differently. It was trained on a large body of text up to a knowledge cutoff date. That training shaped a model that can reason, draft, explain, summarize, compare, translate, and generate text. When you ask Claude something, it doesn't go out to the web and look it up. It generates a response based on patterns and knowledge baked in during training.

This means Claude is, in a real sense, always speaking from memory. A very large, well-organized memory, but memory nonetheless. And like human memory, it can be wrong, outdated, or confidently mistaken.

The practical implications:

- Claude cannot tell you what happened in the news this morning
- Claude can help you draft a response to a difficult email in minutes
- Claude cannot reliably cite a specific source unless it's been given one
- Claude can synthesize a complex topic into a clear explanation
- Claude does not know your company's internal documents unless you share them
- Claude can reason about those documents once you do share them

## How this works in Claude Cowork

In Cowork, Claude gets connected to your files, email, calendar, and other tools through connectors. This changes the picture in an important way: Claude is no longer limited to its training data. It can read your actual inbox, your actual calendar, your actual documents, and reason over that real, current information.

But the underlying mechanism is still the same. Claude reads what you give it, reasons over it, and generates output. It doesn't browse the web independently (unless a specific connector or tool enables that). It doesn't check facts against live sources by default. It works with whatever is in the context window.

This is why, later in the course, you'll learn to give Claude well-structured inputs and review its outputs carefully, especially when it's working with your real data and potentially taking actions on your behalf.

## Practical example

Say you're preparing for a quarterly business review. You ask Google: "quarterly business review template." You get links to templates and articles. You click around, copy something, and adapt it.

You ask Claude: "I'm preparing a QBR for a mid-size SaaS company. The audience is our executive team. We've had a solid quarter on revenue but missed on net retention. Draft an agenda and a one-paragraph framing statement that acknowledges the retention issue without leading with bad news."

Claude doesn't give you a link. It gives you the agenda and the paragraph. You edit it. You use it. The difference isn't speed; it's the kind of work being done. Search retrieves. Claude generates and reasons.

## Workflow design notes

Because Claude generates rather than retrieves, it can produce plausible-sounding text that is factually wrong. This is sometimes called hallucination, though the more accurate description is "confident generation without grounding." Claude doesn't know it's wrong. It generated what seemed most likely given its training.

The practical design principle: treat Claude's output as a strong first draft produced by a smart, well-read assistant who hasn't checked the news in a while and doesn't have access to your files unless you've shared them. Review before you send. Verify facts that matter. Supply current or proprietary information yourself.

This isn't a flaw you work around. It's a property of the tool you design for.

## Try this in Claude

Open a new Claude conversation and send this prompt:

> "I want to understand how you work. Without accessing the internet, summarize what you know about [a topic you're an expert in]. Then tell me what you wouldn't be able to reliably answer about that topic."

Pay attention to two things: how accurate the summary is for something you know well, and how honest Claude is about its own limitations. This gives you a calibration point for how much to trust Claude in your domain.

## Pro tips

- When you need current facts, supply them. Paste in the relevant data, article excerpt, or document. Claude reasons over what you give it.
- Don't ask Claude to "look up" anything. Ask it to reason, draft, summarize, compare, or explain instead.
- If you need web search, use a connector or tool that provides it explicitly. Don't assume Claude has live access.
- The more specific your question, the more useful the output. Vague inputs produce generic responses.
- Claude works best when you treat it as a thinking partner, not an oracle.

## Quick summary

Claude is a language model that reasons and generates, not a search engine that retrieves. It works from trained knowledge, not live web access. It can help you think, draft, explain, and synthesize at a level most tools can't match, but it cannot tell you what happened this morning, and it doesn't know your business unless you tell it. Design your workflows accordingly.
