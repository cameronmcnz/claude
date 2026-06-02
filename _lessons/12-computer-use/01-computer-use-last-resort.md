---
layout: lesson
title: "Computer Use: The Last Resort That's Still Worth Knowing"
section: 12
section_title: "Computer Use — Letting Claude Operate Your Apps"
section_slug: "12-computer-use"
order: 1
noindex: true
---

# Computer Use: The Last Resort That's Still Worth Knowing

The name "computer use" describes what it does accurately: Claude uses your computer. It sees your screen, moves the cursor, clicks buttons, types text. For applications that exist only on your desktop with no web version and no API connector, it's the only way Claude can interact with them.

## Why this matters

Connectors and the Chrome extension cover a wide range of applications. But legacy desktop software, proprietary internal tools, and applications with no web presence or public API are common in real professional environments. Finance teams using specific desktop tools. Operations teams with legacy systems. Professionals who use specialized desktop applications for their industry. Computer use is how Cowork reaches all of those.

## The philosophy: connectors first

Every time you consider computer use, ask first: is there a connector? Is there a web version accessible through the Chrome extension? Can the data be extracted into a file that Claude can process without controlling the application?

If any of those alternatives work, use them instead of computer use. They're faster, more reliable, less fragile, and less likely to produce unexpected behavior.

Computer use is last-resort, not first-choice. "No other method works" is the correct bar for reaching for it.

## What computer use looks like

Claude operates the application by:
- Taking screenshots to see what's on screen
- Moving the mouse to specific positions
- Clicking elements
- Typing text into fields
- Reading on-screen content

From Claude's perspective, it's navigating a visual interface the same way a human would. From the application's perspective, it looks like normal user input.

This means computer use is slow (each action involves a screenshot-interpret-act cycle), sensitive to visual changes (if the interface updates, the instructions may fail), and requires that the application be visible on screen.

## When computer use is genuinely the right answer

- Desktop-only applications with proprietary data formats
- Legacy software with no API or web equivalent
- Applications that require specific desktop workflows (file management, printing, specialized tooling)
- Situations where screen-based data is the only accessible form of the data you need

## Try this in Claude

Identify one application in your work toolkit that has no connector, no useful web version, and that you interact with in repetitive, mechanical ways. That's your computer use candidate. Hold it in mind as you work through the rest of this section.

## Quick summary

Computer use lets Claude control desktop applications by operating the mouse and keyboard. Use it only when connectors, Chrome extension, and file-based approaches don't work. It's slower, less reliable, and more fragile than API-based alternatives. Connectors first; computer use last.
