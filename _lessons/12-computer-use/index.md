---
layout: section
title: "Computer Use — Letting Claude Operate Your Apps"
section: 12
section_title: "Computer Use — Letting Claude Operate Your Apps"
section_slug: "12-computer-use"
order: 0
noindex: true
---

# Section 12: Computer Use — Letting Claude Operate Your Apps

Computer use is Cowork's most powerful and most carefully governed feature. It allows Claude to control your mouse and keyboard, navigate application interfaces, and interact with software as if a human were operating it. For apps without connectors and without a web version, it's the only way to automate them.

## Why this section matters

Most of what Cowork does, it does through clean API calls: connectors reach services directly, file access is file system reads and writes. Computer use is different. It operates through the visual interface, which means it's slower, less precise, and more sensitive to interface changes than API-based approaches.

Understanding when computer use is the right tool (and when it isn't) is the practical skill this section builds.

## What you'll learn

**Computer use as last-resort reach.** The philosophy: use connectors and the Chrome extension first. Use computer use when no other approach is available.

**Research-preview status.** Computer use is off by default in Cowork. You enable it explicitly in Dispatch settings. Understanding why it's off by default shapes how you approach it.

**Per-app approval.** Before Claude can operate an application, you grant it permission to do so. The permissions required and how to grant them.

**When to prefer faster alternatives.** The decision framework for choosing between computer use, connectors, and the Chrome extension.

**Risks and the extra review.** Computer use output deserves more careful review than connector output. The reasons and the implications.

## The mini project

You'll plan a computer use task for a local application: choose a real application you use that has no connector, define what you'd want Claude to do in it, document the approval steps, and write the review process you'd apply to the output. The deliverable is a design document, not a running workflow. The design exercise forces the thinking that should precede any computer use deployment.

## How to approach this section

Computer use is a capability to understand before you use, not one to explore by experimentation. The risks of an automation that goes wrong inside a desktop application are real: changes to files you didn't intend, operations in applications that have real-world consequences. Read this section carefully, plan deliberately, and start with low-stakes applications when you first try it.

If your entire workflow can be handled through connectors and the Chrome extension, you may never need computer use. That's fine. The section gives you the knowledge to make that determination.
