---
layout: lesson
title: "Per-App Approval and Required Permissions"
section: 12
section_title: "Computer Use — Letting Claude Operate Your Apps"
section_slug: "12-computer-use"
order: 3
noindex: true
---

# Per-App Approval and Required Permissions

Before Claude can operate a specific application, you grant it permission to do so. This per-application approval is separate from the global computer use enable. It's a deliberate, application-specific decision.

## Why per-app approval matters

Blanket approval for Claude to operate all applications would be an overly broad grant. Per-app approval means you consciously decide: yes, Claude can operate this specific application. This limits exposure and ensures you've thought about each application before authorizing it.

## System permissions required

Computer use requires two system permissions that are not granted by default:

**Accessibility permissions:** Allows Cowork to interact with application interfaces (read interface elements, send click and keyboard events). On macOS, this is in System Settings > Privacy & Security > Accessibility. On Windows, accessibility-related permissions are handled through the app's permission request dialogs.

**Screen recording permissions:** Allows Cowork to see your screen (take screenshots to understand the current state of the interface). On macOS: System Settings > Privacy & Security > Screen Recording. On Windows: similar permissions dialogs.

Both are required for computer use to function. Without accessibility permissions, Claude can't send input to applications. Without screen recording, it can't see what's on screen.

These permissions have broad implications: once granted, they allow Cowork to see everything on your screen and interact with any accessible application. For enterprise devices, these permissions may require IT approval.

## Per-application authorization

After granting system permissions, you authorize specific applications when you first ask Claude to operate them. The authorization flow is part of the Dispatch interface when you send a computer use instruction.

Keep a mental (or written) list of which applications you've authorized. Periodically review whether those authorizations are still appropriate.

## Try this in Claude

If you've decided to enable computer use, walk through the permission requirements for your operating system before your first use. Ensure you understand what each permission grants before approving it. If you're on a managed device, check with IT before granting these permissions.

## Quick summary

Computer use requires accessibility and screen recording system permissions, plus per-application authorization. These are broader permissions than connector access. Grant them deliberately, per application. On managed devices, check IT policy first. These permissions allow Cowork to see your screen and interact with applications; grant them only after understanding that scope.
