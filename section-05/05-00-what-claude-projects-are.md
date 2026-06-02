# What Claude Projects Are

A Project is a persistent workspace in Claude. It holds documents, instructions, and reference material that remain available across multiple conversations. If you've been rebuilding context from scratch every time you open a new Claude chat, Projects are the solution.

## Why this matters

Every Claude conversation has a context window: the space available for everything Claude can "see" while generating a response. In a standard chat, that window starts empty. You fill it with your prompt, any files you upload, and the conversation history so far.

In a Project, part of that context window is pre-filled with materials you've loaded into the Project. Every conversation you start within the Project begins with Claude already knowing what you've stored there. Your documents, your instructions, your preferences: all available without repeating yourself.

For anyone doing ongoing work with Claude, rather than purely one-off tasks, this changes the character of every interaction.

## The idea in plain English

Think of a Project as a shared folder and briefing document combined. You put relevant materials in the folder (documents, PDFs, reference text). You write a briefing document (the Project instructions) that tells Claude what it needs to know about this work and how you want it to operate. Then every conversation you have within that Project benefits from both.

A Project has three main components:

**Files:** Documents and reference materials you upload to the Project. These persist across sessions and are available to Claude in every conversation within the Project without re-uploading.

**Instructions:** A standing brief that Claude reads at the start of every Project conversation. It can include context about the work, preferences, constraints, personas, and any other standing directions.

**Conversations:** The chats you have within the Project. Each conversation has access to the Project files and instructions. The conversations themselves are separate threads; they don't share context with each other, but they all share the Project context.

## How this works in Claude

In the Claude interface, Projects appear in the left sidebar, usually above or alongside your conversation history. You create a new Project by clicking the "New Project" option, giving it a name, and then configuring it: uploading files and writing instructions.

Once a Project exists, you start new conversations within it by opening the Project and creating a new chat from there. That conversation has access to everything in the Project.

You can have multiple Projects running simultaneously. A client account, a research area, a content type, and a personal planning space can all exist as separate Projects with their own documents and instructions.

## Practical example

A market research analyst works on competitive intelligence for three different product lines. Each product line has: a set of market reports, competitor analysis documents, a style guide for deliverables, and specific instructions about what clients care about.

Before Projects, she rebuilt that context in every conversation: pasting in the relevant reports, explaining the context, restating her preferences. This took 10-15 minutes before she could start any substantive work.

After setting up three Projects (one per product line), each stocked with the relevant documents and a clear instruction set, she opens the relevant Project and starts working. The context is there. She moves from opening Claude to producing useful output in two minutes instead of fifteen.

The productivity gain isn't just time: it's the cognitive cost of rebuilding context, and the errors that come from occasionally forgetting to include something important.

## What Projects are not

Projects are not for storing conversations you want to find later. Conversation history lives in your general history, not in Projects.

Projects are not task management or project management tools. They don't have deadlines, assignees, or statuses. They're context containers, not work trackers.

Projects are not a way to make Claude remember things permanently. They store what you explicitly put in them. If you want Claude to carry forward something it learned in a conversation, you either save it to the Project files manually or rely on Claude's memory feature (covered in Section 1).

## Try this in Claude

Create one Project right now. Name it for something you work on regularly: a client, a topic, a type of deliverable. Don't fill it yet; just create it and look at the interface. Where would you upload files? Where do you write instructions? You'll build it out in the next few topics.

## Pro tips

- Name Projects clearly and specifically. "Client Work" is a folder. "Meridian Account - Q3 2026" is a Project.
- Start with the instructions before uploading files. Writing the instructions first helps you think clearly about what materials the Project actually needs.
- If a Project starts to feel cluttered with outdated files, archive the old ones rather than leaving them. Irrelevant context can dilute Claude's attention on what's current.

## Quick summary

A Claude Project is a persistent workspace that holds documents, instructions, and reference material available across multiple conversations. It solves the problem of rebuilding context every session. Each Project has files, instructions, and the conversations you have within it. Set up Projects for ongoing work where the same context applies repeatedly.
