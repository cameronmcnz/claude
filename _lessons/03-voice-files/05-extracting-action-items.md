---
layout: lesson
title: "Extracting What Matters: Action Items, Risks, and Follow-Up Questions"
section: 3
section_title: "Voice, Files & Everyday Knowledge Work"
section_slug: "03-voice-files"
order: 5
noindex: true
---

# Extracting What Matters: Action Items, Risks, and Follow-Up Questions

Summarization tells you what happened. Extraction tells you what to do about it. The ability to pull specific types of information out of a document, rather than just compressing it, turns reading from a passive activity into an active workflow input. This is where Claude earns its place in everyday knowledge work.

## Why this matters

After a meeting, a report, or a long document, there are usually three things you need to act on: what was decided or agreed upon, what could go wrong, and what still needs to be answered. These things are rarely labeled clearly in the source material. They're embedded in discussion, buried in paragraphs, or implied rather than stated.

Finding them manually requires reading carefully, taking notes, and organizing your observations. Claude can do that extraction directly, and do it in seconds, so you can move from reading to acting faster.

## The idea in plain English

Extraction is targeted information retrieval: you tell Claude what type of information you need and it pulls those specific items from the document.

The three most commonly useful extraction types in professional work:

**Action items:** What needs to be done, by whom, and by when. From meeting transcripts, these are often buried in discussion. From project documents, they may be scattered across sections. Claude can pull them out and format them consistently.

**Risks:** What could go wrong, what the potential consequences are, and whether mitigations have been identified. Risk extraction is valuable from proposals, plans, contracts, and research. It finds the "however" and "but" and "assumes" hidden in documents that are otherwise optimistic.

**Follow-up questions:** What remains unresolved, unclear, or unanswered. This is particularly useful after meetings that ended without conclusions, after reviewing proposals with gaps, and after reading research that raises more questions than it answers.

You can also extract other specific types: commitments, dependencies, timelines, open decisions, named parties and their roles, financial figures, compliance requirements, and more.

## How this works in Claude

Be explicit about what you're extracting and how you want it formatted.

**Extracting action items from a meeting transcript:**
> "From this meeting transcript, extract all action items. Format each as: [Person responsible] - [Action] - [Deadline if mentioned or 'No deadline specified']."

**Extracting risks from a project plan:**
> "Identify all risks mentioned or implied in this document. For each risk, note: the risk, who or what it affects, and whether the document includes any mitigation. If no mitigation is mentioned, note that."

**Extracting follow-up questions from a research document:**
> "After reading this research report, list the five most important questions that are either left unanswered or that a critical reader should ask before relying on its conclusions."

**Combined extraction:**
> "From this board meeting transcript, produce three lists: decisions made (with who approved each), action items (with owner and deadline), and open questions that need resolution before the next meeting."

## Practical example

A strategy analyst reviews a 25-page competitive analysis prepared by an external consultant. The document is well-written but dense, and she needs to take it to her leadership team with a clear set of recommended actions and concerns.

She uploads the document and sends three extraction prompts:

1. "List every recommendation this document makes, in the order it appears."
2. "Identify every risk or threat the document mentions, whether explicitly labeled as such or embedded in the analysis."
3. "What assumptions does this analysis make that the report itself does not validate?"

The first extraction gives her a crisp recommendation list for her leadership presentation. The second surfaces eight risks she hadn't noticed in her initial read. The third reveals three assumptions that, if wrong, would undermine the main recommendation.

She walks into the leadership meeting knowing the document better than she would have from three hours of reading alone, and she has questions prepared that demonstrate real analytical depth.

## Workflow design notes

Extraction works best when you're precise about the type of information you want and the format you need.

**Common mistakes:**
- Asking for "action items and risks and questions and dependencies" in one pass often produces a muddled result. Separate prompts for each extraction type produce cleaner outputs.
- Asking Claude to extract without providing the document in context, relying instead on a description of the document, produces much lower quality results.
- Accepting extracted items without reviewing: Claude may occasionally pull something that isn't quite the type of item you asked for. A quick review catches edge cases.

**Building extraction into recurring workflows:** If you regularly process the same type of document (weekly reports, client calls, board minutes), build a standard extraction prompt and reuse it. The consistency of format makes the outputs easier to use over time and easier to compare across periods.

## Try this in Claude

Take any document you've recently processed: a meeting summary, a proposal, a report. Upload it to Claude and run a three-part extraction: action items, risks, and open questions. Compare what Claude surfaces to what you took away from reading it yourself. Note anything Claude found that you missed, and anything it missed that you caught.

## Pro tips

- "What does this document assume to be true?" is one of the most useful extraction prompts for any analytical or strategic document. Most documents embed significant assumptions invisibly.
- Ask Claude to flag items that are mentioned but unresolved: "Identify anything that was raised in this document but not concluded." This is different from extracting only items that are clearly unresolved.
- For contracts, "what obligations does this create for me that are easy to miss?" is more useful than a general risk extraction.
- Extraction prompts pair well with follow-up: once you have the extracted list, ask Claude "which of these action items is most time-sensitive?" or "which risk would be most costly if it materialized?"

## Quick summary

Extraction pulls specific types of information from documents: action items, risks, follow-up questions, assumptions, commitments, and more. It turns reading into working by surfacing what needs to happen, what could go wrong, and what still needs answering. Use specific extraction prompts with clear formatting instructions. For recurring document types, build reusable extraction templates to make the output consistent and immediately actionable.
