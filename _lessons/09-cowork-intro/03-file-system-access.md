---
layout: lesson
title: "File System Access and the Permission Dialogs You Grant on Setup"
section: 9
section_title: "Meet Cowork — The Agentic Desktop"
section_slug: "09-cowork-intro"
order: 3
noindex: true
---

# File System Access and the Permission Dialogs You Grant on Setup

Cowork can read and write files on your computer. That capability powers everything in Act 2 that involves your actual documents, notes, and data. It also means you're extending real, consequential access to an AI system. The permission dialogs you see during setup are not formalities. They describe exactly what you're authorizing.

## Why this matters

Most professionals are accustomed to granting app permissions quickly: accept, accept, accept, get to the interface. That habit can lead to overly broad access in Cowork. Understanding what you're granting, at what scope, for what purpose, gives you the control you need to use Cowork securely and confidently.

## How folder authorization works

When you first set up Cowork, the app asks you to choose one or more folders that Claude can access. You select a folder from your file system, and the permission dialog describes what access you're granting:

**Read access:** Claude can read files in this folder. It cannot create, edit, or delete them.

**Read and write access:** Claude can read, create, and modify files in this folder. Depending on the setting, it may also be able to delete.

Access is folder-scoped. Granting access to a specific folder does not grant access to other folders on your machine. If you authorize your "Work Projects" folder, Claude can access files within it but not files in your Documents folder more broadly.

You can grant access to multiple folders, each with its own permission level. You can also revoke access at any time through the Cowork settings.

## A deliberate approach to folder authorization

Rather than granting broad access to accommodate potential future workflows, authorize specific folders for specific purposes:

- A "Cowork Inbox" folder where you put files you want Claude to process
- A "Cowork Outputs" folder where Claude deposits its outputs for your review
- Specific project folders where Claude needs access for defined workflows

This creates a clear boundary between what Claude can touch and what it can't. If you need Claude to access a new folder for a new workflow, you authorize it when you need it.

## What the permission dialogs tell you

The setup dialogs will describe:
- Which folder is being authorized
- What level of access is being granted (read vs. read/write)
- Whether delete access is included
- Whether subdirectories are included in the scope

Read all of this before confirming. If the scope is broader than your workflow requires, you can often narrow it.

## After authorization

Once access is granted, Claude can work with files in authorized folders whenever a Cowork workflow (interactive conversation, scheduled task, or Dispatch command) references those files. It doesn't access them continuously; it accesses them when a workflow runs.

Review your authorized folders periodically (quarterly is a reasonable cadence) and revoke access to folders that are no longer part of active workflows.

## Try this in Claude

Before authorizing any folders, decide what you actually need: what workflow will use these files, what folder contains them, and what level of access (read or read/write) is necessary. Write this down. Then authorize accordingly. You'll have a clear record of what you granted and why.

## Quick summary

Cowork's file system access requires explicit folder authorization through permission dialogs. Grant access to specific folders for specific purposes rather than broadly. Read the permission dialog carefully: what folder, what access level, what scope. Revoke access when workflows that used it are retired. Start with read access and add write access when a specific workflow requires it.
