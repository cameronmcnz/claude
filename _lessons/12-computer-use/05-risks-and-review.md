---
layout: lesson
title: "Risks and the Extra Review Computer Use Output Deserves"
section: 12
section_title: "Computer Use — Letting Claude Operate Your Apps"
section_slug: "12-computer-use"
order: 5
noindex: true
---

# Risks and the Extra Review Computer Use Output Deserves

Computer use output deserves more careful review than other types of Claude output. Not because Claude is malicious, but because computer use involves more points of potential failure than connector-based or file-based approaches, and because errors in desktop application automation can be harder to catch and harder to reverse.

## Why the extra review

**Visual interpretation errors:** Claude interprets your screen from screenshots. If the interface is complex, densely populated, or updates between screenshots, Claude may misread what's there. An action taken on a misinterpreted screen state can produce incorrect results.

**Interface fragility:** If an application updates its interface between when you designed the workflow and when it runs, elements may have moved, renamed, or disappeared. Claude may proceed with an outdated interpretation, taking actions on the wrong element.

**State dependency:** Computer use workflows often depend on the application being in a specific state. If the application's state is different from expected (a dialog open that shouldn't be, a loading state that hasn't resolved), actions may not go where intended.

**Compounding errors:** In a multi-step computer use task, an error at step 3 doesn't stop the workflow. Steps 4 through 10 execute against the incorrect state produced by step 3. The further into the workflow an error occurs undetected, the more work may need to be undone.

## The review posture for computer use

**Review the action log, not just the output.** Claude should report what actions it took during a computer use task. Review that log for unexpected actions, not just the final output. An action taken in the wrong application or at the wrong location is a problem regardless of what the output says.

**Compare against a known good state.** After a computer use task, compare the application state to what you expected. Did the right thing change? Did anything change that shouldn't have?

**Always start in review mode.** For any new computer use workflow, require Claude to stop and describe its intended actions before taking them. Review the plan before execution. Move to unattended execution only after the workflow has consistently produced correct plans that you've verified match intent.

**Keep reversibility in mind.** Before starting a computer use task, consider: if something goes wrong, how do I undo it? For tasks with reversible effects (temporary files, drafts, non-committed changes), this is manageable. For tasks with irreversible effects (permanent deletions, committed transactions, external sends), maintain hard review gates.

## The appropriate use pattern

New computer use workflow:
1. Describe the task to Claude
2. Ask Claude to plan the steps before executing
3. Review the plan
4. Execute with logging enabled
5. Review the action log and output
6. Verify the application state matches intent
7. Repeat until the workflow is stable, then gradually reduce review overhead for low-risk steps

## Try this in Claude

For your planned computer use task, write the review process before you design the automation. What will you check after it runs? What does "it worked correctly" look like? Having the success criteria defined before running the task makes the review faster and more reliable.

## Quick summary

Computer use has more failure modes than connector-based approaches: visual interpretation errors, interface changes, state dependencies, and compounding errors in multi-step tasks. Review the action log, not just the output. Compare application state to expected state. Start in review mode. Keep reversibility in mind. The extra review overhead is proportionate to the extra risk.
