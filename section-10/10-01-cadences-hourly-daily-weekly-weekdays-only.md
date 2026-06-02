# Cadences: Choosing the Right Schedule for Your Task

A scheduled task runs on a cadence. The cadence determines when it runs, how often it runs, and what time window it operates in. Choosing the right cadence is not just a scheduling decision; it's a workflow design decision.

## The available cadences

**Hourly:** The task runs every hour. Appropriate for tasks where freshness matters at this granularity: monitoring for incoming items that need rapid triage, checking a data source that updates frequently. Be thoughtful about hourly tasks: they generate output (or try to) 24 times a day. If no one is reviewing the output, hourly is probably too frequent.

**Daily:** The task runs once per day at a specified time. The most common cadence for briefing and summary tasks. "Every day at 7am" or "every day at end-of-business" works well for tasks that synthesize a day's worth of activity.

**Weekdays only:** The task runs on weekdays but not weekends. Appropriate for work-context tasks where weekend runs would produce empty or irrelevant output. Most professional briefings and report tasks should use weekdays-only rather than daily to avoid Saturday morning output that no one reads until Monday.

**Weekly:** The task runs once per week on a specified day and time. Appropriate for weekly synthesis, review, and planning tasks. A weekly report that runs Sunday evening to be ready for Monday morning review is a common and useful pattern.

**Custom intervals:** Some scheduling configurations allow specific day-of-week and time combinations, like "every Monday and Thursday at 8am." Useful for tasks tied to recurring team rhythms.

## Matching cadence to value

The right cadence is the one that matches how often the output is actually useful. More frequent is not better; unnecessary runs produce output that piles up unreviewed, which either creates overhead or trains you to ignore the automated outputs.

A useful check: if this task ran right now and produced a result, would you actually want that result? If the answer is "yes, at 7am each weekday but not at 11pm on a Sunday," configure it accordingly.

## Edge cases in cadences

What happens when a task runs and there's nothing to process? (Empty inbox, no new calendar items.) Your task prompt should include a handling instruction: "If there are no new items, produce a brief note saying no items found rather than an empty output."

What happens when output is the same two days running? A daily briefing that finds no new email and no calendar changes produces the same result as yesterday. That's acceptable as long as the output clearly reflects the current state rather than being stale.

## Try this in Claude

For the morning digest you're building in this section's mini project, decide: what cadence? Daily or weekdays-only? What time, specifically? What should the task do if there's nothing new to report? Write those decisions into your task prompt before scheduling.

## Quick summary

Cadences range from hourly to weekly. Choose the one that matches how often the output is genuinely useful, not the most frequent option available. Weekdays-only is usually right for work context tasks. Include edge case handling in prompts for situations where there's nothing to process. More frequent is not better if output exceeds your review capacity.
