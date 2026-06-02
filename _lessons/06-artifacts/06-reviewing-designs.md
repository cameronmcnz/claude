---
layout: lesson
title: "Reviewing and Refining AI-Generated Designs"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 6
noindex: true
---

# Reviewing and Refining AI-Generated Designs

An Artifact that looks impressive on first view is not necessarily an Artifact that's ready to use. Claude produces visually coherent outputs quickly, and that speed can make them feel more finished than they are. Building a reliable review habit for visual outputs prevents the specific category of mistake where something looks polished but communicates the wrong thing.

## Why this matters

Text errors are usually obvious: wrong word, missing sentence, incorrect fact. Design errors are sneakier. A layout that looks clean may bury the most important information. A color choice that seems professional may be inaccessible to someone with color vision deficiency. A pitch deck that looks like a deck may be structured in a way that undermines the argument rather than supporting it.

Reviewing AI-generated visuals requires a different mental mode than reviewing text. You're evaluating not just what it says but how it communicates.

## A review framework for AI-generated visual outputs

**1. Does it communicate the right message at a glance?**
Look at the output for five seconds. What is the first thing your eye goes to? What's the first thing you understand? If that's not the most important thing you want to communicate, the hierarchy is wrong.

**2. Is the structure logical for the audience?**
Work through the output in sequence. Does each section follow logically from the previous one? Does the structure match how the intended reader needs to receive the information? A pitch deck for investors follows a different logic than one for customers. A one-pager for a CFO prioritizes differently than one for an operations lead.

**3. Is anything misleading or overstated?**
Claude occasionally overstates, uses overly confident language, or makes claims that seem stronger than your actual position. Read every headline and data label as a skeptic. Does each claim hold up under scrutiny?

**4. Is the visual design accessible?**
Check color contrast: is text readable against its background? Are key distinctions conveyed only through color (which some readers won't see), or also through shape, position, or label? For anything going to a broad audience, accessibility matters more than aesthetics.

**5. Is the length and density appropriate for the format?**
A one-pager should be skimmable in two minutes. A landing page should drive to a clear action. A pitch deck should have one idea per slide. If any section is too dense, ask Claude to simplify it.

**6. Does it match your voice and brand?**
The output was generated. Its default tone may not sound like you. Read it aloud and ask: would I actually say this? Where does it sound like AI?

## How to refine effectively

Once you've reviewed the output, follow-up requests are the refinement tool. Be specific about what to change and why.

**Structure changes:**
> "Move the benefits section before the features section. The reader needs to understand why this matters before they care about how it works."

**Tone changes:**
> "The headline is too hyperbolic. Change it to something more specific and credible: instead of 'Transform your operations,' say something about what the specific outcome is."

**Visual changes:**
> "The chart colors are too similar; use high-contrast colors that differentiate the categories clearly even in black and white."

**Density changes:**
> "This section has too many points. Keep only the three most important ones. Each point should be one sentence, not a paragraph."

**Credibility checks:**
> "Read the claims in this deck as a skeptical investor. Flag any that seem unsupported or overstated."

## Practical example

A product manager produces a feature announcement one-pager as a Claude Artifact. On first look, it's clean and well-structured. On closer review:

- The headline is generic ("Introducing Our New Reporting Feature") rather than benefit-focused
- The second paragraph buries the most important detail: this feature saves users two hours per week
- One of the screenshots is described as "best-in-class," which sounds like marketing speak the company wouldn't actually use
- The CTA at the bottom is weak: "Learn more" rather than something specific

She runs four targeted follow-up requests addressing each issue. The revised one-pager takes about eight minutes in total. The difference between the first draft and the final version is not visual; it's in how clearly and honestly it communicates.

## Workflow design notes

Build the review habit before the polish habit. It's tempting to immediately ask Claude to "make this more visually polished" before checking whether the content and structure are right. Fix substance first, then aesthetics. Re-polishing content that will get rearranged wastes iterations.

For outputs that will be shared with external stakeholders, consider a two-stage review: your own review for structure and content, then a colleague's review for whether the message lands clearly to someone unfamiliar with the context.

## Try this in Claude

Take any Claude-generated visual Artifact you produced in the previous lessons. Apply the six-point review framework above. Identify at least two things to change. Write targeted follow-up prompts for each change. Run them. Compare the before and after.

## Pro tips

- "Read this as [specific audience]. What would they find confusing or unconvincing?" is often more useful than reviewing it yourself as the author.
- If a visual element doesn't render well, ask Claude to describe what it intended and whether there's a simpler way to achieve the same communication goal.
- For landing page mockups: read the page as if you've never heard of the product. By the end of the page, do you know what it does, who it's for, and what to do next?

## Quick summary

AI-generated visual outputs require deliberate review using a different lens than text review. Check hierarchy, structure, claims, accessibility, density, and voice. Refine with specific targeted follow-up prompts. Fix substance before aesthetics. For external-facing outputs, add a colleague review before final use. The value of Claude Design is in speed of draft; the value of review is in ensuring that draft actually earns its place.
