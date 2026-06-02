---
layout: lesson
title: "The Keep-Awake Requirement"
section: 11
section_title: "Dispatch — Run Cowork from Your Phone"
section_slug: "11-dispatch"
order: 4
noindex: true
---

# The Keep-Awake Requirement

Dispatch requires your desktop to be awake and Cowork to be running. This is not a bug or a limitation to be worked around; it's the operational reality of the system. Managing it deliberately is part of making Dispatch reliable.

## Why this requirement exists

Cowork runs on your machine. Unlike a cloud service, it doesn't have a server that receives your Dispatch messages when your computer is off. Your desktop is the processing environment. When it's asleep, it can't receive instructions or execute tasks.

## Practical implications

**For in-office work:** If you're at your desk most of the day and your computer is on, Dispatch works reliably. Your most valuable use cases are "I need something before my next meeting" tasks sent from your phone while walking between rooms or during a break.

**For travel:** Before leaving on a business trip, consider whether you want Dispatch to be available from your phone during the trip. If yes, you need to leave your desktop on and Cowork running. If it's a laptop you're taking with you, Dispatch isn't useful for tasks that require your desktop files.

**For overnight or weekend tasks:** If you want a Dispatch task to run at midnight or on a Saturday, your desktop needs to be on and awake. Keep-awake settings can manage this, but they also mean your computer runs continuously.

## Keep-awake configuration

In Cowork settings, the keep-awake option prevents your computer from sleeping while Cowork is active. With this enabled:
- Your computer stays awake (display may still dim)
- Dispatch tasks are received and executed whenever you send them
- Scheduled tasks run at their configured times

The tradeoff is power consumption and hardware wear from continuous operation. For a desktop computer in an office, this is usually acceptable. For a laptop on battery power, be more deliberate about when keep-awake is active.

## A practical pattern

Many professionals configure Cowork to keep awake during work hours (start time to end time, weekdays) and allow sleep outside those hours. Dispatch tasks sent outside work hours queue and execute when the computer wakes. This balances availability with reasonable operating hours.

## Try this in Claude

Decide: during what hours do you want Dispatch to be reliably available? Configure keep-awake accordingly. For the first week, send a few test Dispatch tasks at different times and verify they execute correctly. This gives you real operational experience of the system's reliability under your specific setup.

## Quick summary

Dispatch requires a running, awake desktop with Cowork active. Keep-awake settings prevent sleep during configured hours. Balance availability against power and hardware considerations. Establish operating hours for Dispatch and configure accordingly rather than assuming the default is correct.
