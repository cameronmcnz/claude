# The Stakes Shift: Reading Output vs. Authorizing Actions

There is a clean line in how you use Claude that this section is designed to make visible before you cross it. On one side: Claude produces things you read, edit, and decide what to do with. On the other side: Claude takes actions in the world on your behalf. These are not just different in degree. They're different in kind.

## Why this matters

When Claude writes an email draft, you read it. If it's wrong, you fix it or discard it. Nothing happened yet. When Claude sends an email, something happened. The recipient received it, the message is in the record, and reversing it ranges from awkward to impossible.

Every workflow in Act 2 (Cowork) involves Claude acting: reading files, creating documents, sending communications, scheduling events, running scheduled routines. The people who use these workflows most successfully are the ones who internalized this distinction before they started building. The ones who get surprised are the ones who treated "Claude does it" the same as "Claude writes it for me."

## The distinction in plain terms

**Output you read:**
- Claude produces text, code, a visual, or an analysis
- You read it; you decide what to do
- If there's an error, you haven't acted yet
- Review is about improving before use

**Actions Claude takes:**
- Claude performs an operation: sends, creates, modifies, schedules, triggers
- The operation happens (or is queued to happen)
- If there's an error, it's already in the world
- Review must happen before the action, not after

This isn't a reason to avoid using Claude for actions. Agentic workflows are valuable exactly because they compress multi-step tasks into things that happen without your constant attention. It's a reason to design those workflows with the right gates and review steps built in.

## The reversibility spectrum

Not all actions are equally irreversible. A useful mental model:

| Action type | Reversibility | Required gate |
|---|---|---|
| Creating a draft | Fully reversible | Light or none |
| Creating a document or file | Easily reversible | Brief check |
| Sending a scheduled task result to your own review | Reversible | Review before next step |
| Updating a shared document | Partially reversible | Review before confirming |
| Sending an external email | Hard to reverse | Explicit approval |
| Deleting files or records | Very hard to reverse | Hard gate, explicit confirmation |
| Making an external API call with effects | Varies | Design-time risk assessment |

The appropriate review gate is proportional to the irreversibility. Fully reversible actions can have light review. Irreversible actions should have hard gates.

## Designing for the right level of human oversight

The goal in Act 2 is not to review everything (which eliminates the value of automation) or to review nothing (which eliminates the safety of oversight). It's to design each workflow with the review that's proportionate to the stakes.

Patterns for appropriate oversight:

**Draft-then-review:** Claude creates the output (email draft, document, summary) and leaves it for you to review and send or publish. You do the confirming step. This works for most communication and document workflows.

**Act-then-notify:** Claude takes the action (creates a calendar event, updates a file) and notifies you. You can undo if needed. Works for reversible actions where the overhead of pre-approval isn't worth it.

**Act-within-limits:** Claude takes action but only within defined constraints (only reply to emails marked [urgent], only schedule in the next 24 hours). The constraints are the safety gate.

**Explicit-approval-required:** Claude queues an action and waits for your confirmation. For sensitive or irreversible actions, this is the right posture until you have very high confidence in the workflow.

## Where this course is going

The Cowork sections introduce all of these patterns in practice. Scheduled tasks produce output you review before acting on. Dispatch lets you authorize tasks from your phone, which means your phone tap is the confirmation gate. Computer use, the most powerful and least reversible option, has the most explicit review requirements.

What you're building in this section, the habit of thinking clearly about what review is needed and for what kind of action, is the mental model you'll apply throughout Act 2.

## Try this in Claude

Think about one task you're considering automating with Claude in Act 2. For that task:
1. What action does Claude take?
2. Is the action reversible?
3. What could go wrong?
4. What review gate would catch that error before it matters?

Write those four answers. They're the basis of the review design for that workflow.

## Pro tips

- "What's the worst thing that could happen if Claude gets this wrong?" is a useful question for every action workflow you design. It helps you identify whether your review gate is proportionate to the actual risk.
- Build review steps into automation from the start, not as an afterthought. Adding a gate after an automation is running is harder than designing it in.
- For workflows that involve external communications, start with "draft and notify me" posture and only move to "send directly" after the draft quality has been consistently high across many runs.

## Quick summary

Reading Claude's output and authorizing Claude's actions are fundamentally different activities. Output can be reviewed and discarded if wrong. Actions have already happened when you find the error. Design every agentic workflow with review gates proportionate to the irreversibility of the actions involved. Draft-then-review is the default posture for most communication workflows; harder gates are appropriate for irreversible or high-stakes actions.
