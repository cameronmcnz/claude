---
layout: lesson
title: "Building Quality Control Checklists"
section: 8
section_title: "Quality Control & Responsible Use"
section_slug: "08-quality-control"
order: 6
noindex: true
---

# Building Quality Control Checklists

A habit is what you do when you remember to. A checklist is what you do when you might not. For AI output that matters, the difference is significant. This lesson is about converting review habits into systematic processes that are reliable regardless of how busy you are.

## Why this matters

Review disciplines erode under pressure. When deadlines are close and work is moving fast, the review steps that seemed important in a training environment are the first things to compress. A checklist that's built into the workflow rather than relying on memory is more likely to survive real conditions than a well-intentioned habit.

This is doubly true for automated workflows. If a Cowork automation runs every morning, there's no "I was in a hurry" explanation for missing the review. Either the review gate is built in or it isn't.

## What belongs in a quality-control checklist

A good QC checklist covers the specific things that most commonly go wrong with your type of output. It's not a generic "review everything" instruction; it's a targeted list of failure modes to check for.

For **text outputs** (drafts, analyses, summaries):
- Are specific facts (numbers, dates, names, citations) verified?
- Does the output answer the actual question, not a simpler adjacent question?
- Does the tone match the intended audience and relationship?
- Are there any claims that would embarrass you if questioned?
- Is there anything in this output that only seems right because you want it to be?

For **connected-tool outputs** (email summaries, calendar analysis, data retrieval):
- Is the retrieval complete, or might there be items it missed?
- Does the analysis reflect the full picture, or just the most visible pattern?
- Have I checked the source for the most important items, not just trusted the summary?

For **automated actions** (scheduled tasks, automated communications, file operations):
- Is the scope of the action limited to what was intended?
- Is there a draft-review step before anything irreversible happens?
- Who is notified if something goes wrong?
- When did I last spot-check this workflow against the source?

## Building a personal checklist

The best checklist is one built from your own review history: the specific things you've caught after AI generation that needed fixing. Start by thinking about the last five times Claude produced something you had to significantly edit or correct. What was wrong each time? That's your checklist.

A template structure:

```
Before sharing externally:
□ Verified all specific figures against a source
□ Checked any citations actually exist
□ Read as the recipient: is the tone and message right?
□ Confirmed nothing in this output would embarrass me if questioned

Before publishing or distributing widely:
□ All of the above
□ A colleague or second reader has reviewed
□ No claims that require professional review (legal, financial) without that review

Before authorizing an automated action:
□ The action scope is exactly what I intended
□ I've reviewed the draft/output that will be acted upon
□ I've considered what happens if this is wrong
□ There is a way to undo or recover if needed
```

Customize this to your work. Add items for the specific failure modes you've encountered. Remove items that don't apply.

## Checklists for teams

If you're building QC processes for a team using Claude, the checklist serves two functions: a quality gate and a training document. A new team member following the checklist builds review habits faster than one relying on informal guidance.

For team checklists:
- Make them specific to the output types the team produces (not generic)
- Include examples of what "passes" and what "fails" each check
- Assign ownership: who signs off on what
- Review and update the checklist as the team encounters new failure modes

## Practical example

A content team produces ten external blog posts per month using Claude for drafts. They implement a three-step QC process:

**Writer checklist (before submission for review):**
- All statistics verified with a source link in the document comments
- All company/product facts checked against the current website
- The post actually answers the question in the headline (not a related but easier question)

**Editor checklist (before publishing):**
- Tone appropriate for audience and channel
- No implied expertise claims the company can't stand behind
- A colleague not involved in the writing has read it

**Post-publish tracking:**
- Any corrections needed within 48 hours are logged
- Patterns in corrections are reviewed monthly and added to the writer checklist

Three months after implementation, the correction rate drops significantly. The checklists caught the specific things that kept slipping through informal review.

## Try this in Claude

Build your personal QC checklist right now. Three columns, three to five items each: text outputs, connected-tool outputs, and automated actions. Populate the first column from your own review history; add items from this lesson for the second and third columns. Keep it in a place you'll actually consult it: in your main Claude Project instructions, in a document you can access quickly, or as a saved note.

## Pro tips

- Checklists that are too long don't get used. If your checklist has more than seven items per category, it's a policy document, not a checklist. Tighten it to the things that matter most.
- Review checklists quarterly. The failure modes that mattered six months ago may not be the ones that matter now as your workflow evolves.
- For automated workflows: include the checklist review as part of the automation monitoring, not as a separate task. "Review the output of this weekly report against the QC checklist" should be on your calendar, not just your intentions.

## Quick summary

Quality-control checklists convert review habits into reliable processes. Build yours from your own failure history: the specific things that have gone wrong with AI output in your context. Separate checklists for text output, connected-tool output, and automated actions address different failure modes. Keep them short enough to actually use, specific enough to be useful, and reviewed periodically as your workflows evolve. For teams, checklists serve double duty as quality gates and training tools.
