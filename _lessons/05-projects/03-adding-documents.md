---
layout: lesson
title: "Adding Documents and Reference Material to a Project"
section: 5
section_title: "Projects as Your Workspace"
section_slug: "05-projects"
order: 3
noindex: true
---

# Adding Documents and Reference Material to a Project

The documents you add to a Project are what make it genuinely useful rather than just an organizational container. Getting this right, knowing what to include, how to structure it, and how to keep it current, is what separates a Project that saves you time from one that requires maintenance without delivering much.

## Why this matters

A Project with no files is just a named chat folder with a standing instruction. A Project with the right files is a context-rich workspace where Claude can produce calibrated, relevant output without you having to supply the background every time. The files are the "read this first" stack that a new colleague would need before contributing meaningfully. Curate them accordingly.

## The idea in plain English

Any document you would need to consult or reference while doing this category of work is a candidate for the Project.

**High-value additions:**

*Background documents:* Anything that explains the subject matter, the client, the product, or the context. Company overviews, product briefs, market summaries.

*Reference materials:* Source documents, research reports, data sets, regulatory frameworks, technical specifications. The raw material Claude might need to draw on.

*Style and tone guides:* If Claude is producing written content, examples and guidelines shape the output more effectively than descriptions. Include samples of what "good" looks like.

*Constraints documents:* What Claude should never do in this context. Topics to avoid, formats not to use, approvals required before something goes out.

*Templates:* If you produce consistent types of deliverables, including templates tells Claude what the finished product should look like. Claude fills them out rather than inventing a structure from scratch.

**Lower-value additions:**

*Very long documents that are only partially relevant:* A 200-page annual report where you only care about the strategy section takes up context space. Extract and upload the relevant section instead.

*Outdated materials:* An old version of a document that contradicts the current version creates confusion. Keep only the current version.

*Everything as a hedge:* It's tempting to upload everything related to a topic just in case. Resist this. Relevant, curated context produces better output than a sprawling archive Claude has to sort through.

## How this works in Claude

When you're in a Project, look for the "Add to Project" or file upload option in the Project interface. You can upload files directly (PDF, DOCX, TXT, CSV, and other supported formats), or add text content manually.

Files you add to a Project:
- Are available in all conversations within that Project
- Do not need to be re-uploaded each session
- Can be removed or replaced when they become outdated
- Contribute to the context window that Claude works from

One practical note: the Project context window has limits. If you add many large documents, Claude may not be able to give full attention to all of them simultaneously. For very large document sets, consider splitting into multiple Projects or working with targeted extracts rather than complete documents.

## Practical example

A consultant runs a Project for a six-month client engagement. Over the course of the project, she adds to the folder progressively:

**Week 1:** The client's signed statement of work, the onboarding deck, and a one-page brief she wrote summarizing the engagement.

**Week 3:** The first research report she produced (as an example of the expected output style), and a constraints document specifying what the client has said is out of scope.

**Week 6:** Meeting notes from the key strategic decisions made so far, and an updated brief reflecting the scope change agreed in week four.

At each point, she removes or annotates documents that are superseded. The Project folder always represents the current state of the engagement, not its entire history.

Because the folder is maintained this way, any conversation she starts within the Project is grounded in current context. Claude doesn't reference the original scope that changed in week four; it knows the revised scope.

## Workflow design notes

The most useful discipline for Project document management is the "update on change" habit: whenever something significant changes in the work (a scope revision, a new style requirement, an updated reference), update the Project before the next session. This is a thirty-second task that prevents hours of confusion later.

Naming documents clearly within a Project also matters. "Brand Guide v3 Final.pdf" tells Claude (and you) more than "Document1.pdf." Claude can reference documents by name in its responses, which is more useful when the names are descriptive.

## Try this in Claude

For the Project you started thinking about in the previous topic, identify the three to five documents that should be in it. Check whether you have current versions. Upload them. As you do, ask yourself: is there anything in this document I'd want Claude to ignore? If so, note that in your Project instructions.

## Pro tips

- For confidential documents, remember the privacy principles from Section 1. Uploading a document to a Project doesn't change where it goes; treat it with the same care as any other upload.
- Consider adding a "Project README" as a text document at the top of your folder: a brief summary of what the Project is for, what documents are included, and any important context that doesn't live in the instruction set.
- When you update a document (new version of a style guide, updated research), delete the old version rather than leaving both. Duplicate versions of the same document create ambiguity.

## Quick summary

The documents you add to a Project are what give it power. Include background materials, reference content, style guides, constraints, and templates. Keep the folder curated: current, relevant, and free of outdated or contradictory materials. Maintain it with an "update on change" habit rather than doing a quarterly cleanup. The folder should always reflect the current state of the work, not its full history.
