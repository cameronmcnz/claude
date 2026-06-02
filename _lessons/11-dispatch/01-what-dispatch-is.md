---
layout: lesson
title: "What Dispatch Is"
section: 11
section_title: "Dispatch — Run Cowork from Your Phone"
section_slug: "11-dispatch"
order: 1
noindex: true
---

# What Dispatch Is

Dispatch is a continuous, persistent conversation thread that links your Claude mobile app to your desktop Cowork environment. Messages you send in this thread from your phone are received by Cowork on your desktop, executed with full file and connector access, and responded to in the same thread.

## Why this matters

Without Dispatch, Cowork is desktop-only. You can only trigger work when you're sitting at your computer. With Dispatch, you can trigger Cowork from anywhere your phone goes. The desktop does the work; you just have to tell it what to do.

## How it works

The Dispatch thread appears in both the Claude mobile app and in Cowork on your desktop. It's a single conversation that spans both surfaces:

1. You open the Dispatch thread in the Claude mobile app
2. You send a message: "Review the files in my Client X folder and summarize what's changed since last Monday"
3. Your desktop Cowork environment receives the message (if the desktop is running and awake)
4. Cowork reads the files, generates the summary, and responds in the same thread
5. You receive the response in the mobile app

The conversation is persistent. You can review past Dispatch exchanges, see what was requested and what was produced, and continue previous threads. This is what the "one continuous conversation" framing means: it's not a session that starts and ends. It's a thread you return to.

## What Dispatch can access

When a Dispatch task runs, it has access to whatever your Cowork environment is authorized to access: the folders you've granted permission for, the connectors you've set up, the plugins you've installed. Dispatch doesn't add new access; it allows you to invoke existing Cowork capabilities remotely.

## When Dispatch doesn't work

Dispatch requires your desktop to be running with Cowork active. If the desktop is off, closed, or if Cowork isn't running, Dispatch messages won't be executed until the desktop is active again (at which point they may execute as missed runs, depending on configuration).

This is a real operational consideration. Dispatch is most reliable if your desktop typically stays on and Cowork stays open during working hours. For off-hours use, keep-awake and missed-run settings determine what happens.

## Try this in Claude

Set up the Dispatch thread by opening the Claude mobile app and finding the Dispatch option. Send a simple test message: "What files are in my [one authorized folder]?" Verify the response arrives. This test confirms the end-to-end connection is working before you rely on it for anything important.

## Quick summary

Dispatch is a persistent conversation thread connecting your mobile Claude app to your desktop Cowork environment. Messages trigger Cowork tasks with full file and connector access. It requires the desktop to be running. The thread persists across sessions, giving you a history of what you've requested and what was produced.
