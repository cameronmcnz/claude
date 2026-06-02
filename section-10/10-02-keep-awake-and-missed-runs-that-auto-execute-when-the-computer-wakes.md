# Keep-Awake and Missed Runs

Scheduled tasks run on your computer. If your computer is off, asleep, or not connected when a task is scheduled to run, the task doesn't run on schedule. Cowork's keep-awake and missed-run features handle this situation.

## Why this matters

A morning digest that's supposed to run at 7am doesn't help much if your computer is closed until 8am. Understanding how missed runs work prevents the confusion of tasks that seem to have stopped running.

## Keep-awake

The keep-awake setting prevents your computer from sleeping while Cowork is active and scheduled tasks are pending. With keep-awake enabled, your computer stays awake (screen may still dim) to allow scheduled tasks to run at their configured times.

Use keep-awake if:
- Your tasks run at times when your computer might otherwise sleep (overnight, during long meetings)
- Task timeliness matters more than power consumption
- You have tasks running at specific times when you need the output to be ready

Turn off keep-awake if:
- Your tasks run during hours when your computer is normally active
- Power consumption or hardware longevity is a concern
- Your task schedule is flexible enough that missed-run recovery is acceptable

## Missed-run recovery

When a scheduled task misses its run time (computer was off or asleep), Cowork can execute the missed run when the computer wakes. This is the "auto-execute on wake" behavior.

With this setting enabled: when your computer wakes, Cowork checks for missed tasks and runs them. If your 7am briefing missed its run because your laptop was closed, it runs when you open the laptop at 8am.

**Consideration for time-sensitive tasks:** A morning briefing run at 8am instead of 7am is usually still useful. A time-sensitive alert run three hours late may not be. Configure missed-run recovery based on how time-sensitive the output actually is.

**Consideration for stacking:** If multiple tasks missed their runs while the computer was off, they may all run at once when it wakes. This can produce a burst of output. For tasks with light compute requirements, this is fine. For tasks that make many connector calls, it may create momentary load.

## Practical configuration

For most professional users, a practical configuration is:
- Keep-awake: enabled during work hours (Cowork running, computer active)
- Missed-run recovery: enabled for morning briefings and daily digests
- Specific tasks: configure individually based on time-sensitivity

## Try this in Claude

For each scheduled task you plan to set up, decide: does it need to run at the exact scheduled time, or is it acceptable for it to run when the computer next wakes? Document that decision in your task setup notes. This informs whether missed-run recovery is the right behavior or whether you need the task to be more precisely timed (which requires the computer to be active at run time).

## Quick summary

Keep-awake prevents your computer from sleeping while tasks are pending. Missed-run recovery executes overdue tasks when the computer wakes. Use keep-awake for time-sensitive tasks that must run at specific times. Enable missed-run recovery for tasks where timeliness is flexible. Configure both based on actual task requirements, not defaults.
