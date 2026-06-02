# Review Mode vs. Action Mode

Cowork lets you configure how much autonomy Claude has in each workflow. Review mode keeps you in the loop: Claude produces output and waits for your confirmation before acting. Action mode lets Claude proceed: Claude produces output and acts without waiting. The right setting depends on the workflow and your confidence in it.

## Why this matters

Defaulting to action mode because it's more efficient is the mistake that causes real problems in Cowork. The time saved by removing review steps is small compared to the time cost of fixing an autonomous action that went wrong. Start with review, earn your way to action.

## Review mode

In review mode, Claude:
- Produces drafts, outputs, and proposed actions
- Presents them for your review
- Waits for explicit confirmation before anything consequential happens (sending, writing, deleting, acting)

Review mode is appropriate when:
- A workflow is new and you haven't verified its output quality
- The actions are irreversible (sending emails, deleting files)
- The task involves external parties who would be affected by errors
- You haven't built confidence in this specific workflow yet

## Action mode

In action mode, Claude:
- Produces outputs and takes actions without waiting for your confirmation
- Notifies you of what it did (depending on configuration)
- Proceeds to the next step in the workflow

Action mode is appropriate when:
- The workflow has run many times and produced consistently correct output
- The actions are reversible or low-stakes (writing to a draft folder, creating internal files)
- The workflow has appropriate constraints that limit what Claude can do autonomously
- You have monitoring in place to catch unexpected behavior

## Transitioning from review to action

The responsible path: run every new workflow in review mode first. Verify outputs across multiple runs. Identify edge cases. Only move to action mode once you've seen the workflow handle the range of inputs it will encounter in practice.

A rough threshold: if a workflow has produced correct, review-ready output across ten to twenty runs without requiring significant correction, it's a candidate for action mode, assuming the actions are recoverable if something unexpected happens.

For workflows with irreversible actions, consider keeping a review gate permanently, regardless of how reliable the workflow is. The time cost of that review gate is worth the protection.

## Try this in Claude

For the Cowork workspace you're setting up, decide: what is the default mode for your first workflows? Write it into your global instructions: "All workflows should start in draft/review mode. Action mode requires explicit per-workflow approval." This default prevents accidental action mode on workflows you haven't verified.

## Quick summary

Review mode keeps you in the loop before consequential actions. Action mode lets Claude proceed without confirmation. Start in review mode, always. Move to action mode after a workflow has demonstrated consistent reliability across multiple runs. Keep review gates for irreversible actions regardless of workflow reliability. Write your default mode preference into your global Cowork instructions so new workflows start safely.
