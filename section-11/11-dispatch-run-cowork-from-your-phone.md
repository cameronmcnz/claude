# Section 11: Dispatch — Run Cowork from Your Phone

Dispatch connects your phone to your desktop. You send an instruction from the Claude mobile app; your desktop Cowork environment receives it, executes the task, and leaves the result waiting for you. It's the remote control for your Cowork workspace.

## Why this section matters

The limitation of scheduled tasks is that they run on a fixed schedule, not when you actually need them. Dispatch removes that constraint. You're in a meeting, an idea comes up, and you need a quick analysis of a file on your desktop. You're traveling and need a document drafted from notes in your work folder. You're between calls and want to know what's in your inbox before the next one starts. Dispatch handles all of these by turning your phone into a trigger.

## What you'll learn

**What Dispatch is.** A continuous conversation between your mobile Claude app and your desktop Cowork environment. Instructions sent from mobile are received and executed by the desktop app.

**The fast reach methods.** Connectors (the fastest path, direct API access) and the Chrome extension (for web apps that don't have connectors). When to use each.

**Writing a complete upfront prompt.** Dispatch tasks need the same completeness as scheduled tasks: Claude can't ask follow-up questions while the task runs. Everything it needs must be in the message you send from your phone.

**The keep-awake requirement.** Dispatch requires your desktop to be awake and Cowork to be running. How to manage this for reliable remote access.

**Picking up finished work.** Where to find the results of Dispatch tasks when you return to your desktop.

**Security for remote access.** What the security model is for Dispatch and what you should consider before using it for sensitive work.

## The mini project

You'll design a message-from-mobile workflow: a specific instruction you'd realistically send from your phone that reads from your local files, pulls from a connector, and produces a finished file you can review at your desk. The design includes the prompt, the resources it accesses, and the expected output.

## How to approach this section

Dispatch is the Cowork feature most dependent on setup working correctly. The desktop needs to be running, authorized, and connected. Test Dispatch in a low-stakes context before using it for anything important. Send a simple test instruction, verify it runs, and confirm you can find the output. Then build more complex workflows.

The mental model shift from scheduled tasks: scheduled tasks are push (Cowork pushes output to you on a schedule). Dispatch is pull (you pull Cowork into action when you need it). Both patterns are useful; which to use depends on whether the task should happen on a fixed schedule or on demand.
