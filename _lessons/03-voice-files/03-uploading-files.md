---
layout: lesson
title: "Uploading Files: Bringing Your Documents Into Claude's Context"
section: 3
section_title: "Voice, Files & Everyday Knowledge Work"
section_slug: "03-voice-files"
order: 3
noindex: true
---

# Uploading Files: Bringing Your Documents Into Claude's Context

Describing a document to Claude and then asking questions about it is like explaining a painting to someone who isn't in the room. You're doing most of the work and introducing your own interpretive bias before Claude even gets involved. The better approach is to hand Claude the document directly. File upload puts your actual material in front of Claude so it can work with what's really there.

## Why this matters

The most common underuse of Claude in professional settings is not giving it the source material. People describe the contents of a report instead of uploading it. They summarize a contract instead of sharing it. They paraphrase a client brief instead of pasting it in. Every layer of translation between the original document and Claude's context introduces error, limits depth, and makes Claude's responses less precise.

Uploading files removes that friction. Claude reads what's actually there, not your description of it.

## The idea in plain English

Claude accepts a range of file types: PDFs, text files, Word documents, images, spreadsheets, and more. When you upload a file, its content enters Claude's context window and Claude can read, reference, and reason about it directly.

This means you can:
- Ask questions about a specific document ("What does Section 4 say about termination clauses?")
- Ask Claude to summarize, extract, or reorganize the document's content
- Ask Claude to compare multiple documents you upload
- Use the document as context for a task ("Draft a response to this RFP")
- Ask Claude to find specific information without reading the whole thing yourself

The context window has a size limit, which means very long documents may be partially processed depending on the tier and model. For most professional documents, PDFs up to several hundred pages, this is not a practical constraint. For very large document sets, either summarize in stages or use Projects (covered in Section 5) to manage the scope.

## How this works in Claude

In the chat interface, look for the attachment icon (a paperclip or plus sign, depending on the interface version) in the message input area. Click it, select your file, and it uploads. Once uploaded, it appears in the conversation as a reference that persists throughout that thread. You can then type your prompt or question as you normally would.

File uploads work in both Chat and Cowork. In Cowork, Claude can also access files directly from your connected folders rather than requiring you to upload them explicitly each time.

Supported file types include: PDF, DOCX, TXT, CSV, XLSX, images (PNG, JPG, and others), and plain text in various formats. If a file type isn't directly supported, copying the text content and pasting it works as a fallback.

## Practical example

An HR manager receives a 30-page employee handbook from a newly acquired company. She needs to identify everything that conflicts with her own company's policies before integration. Reading both documents manually would take most of a day.

She uploads the acquired company's handbook and her own policy document to Claude in the same conversation. She asks: "Compare these two documents and identify any areas where the policies conflict or are meaningfully different. Focus on compensation, termination, and leave policies."

Claude reads both, identifies fifteen specific areas of divergence, and formats them as a comparison table with the relevant excerpts from each document. The review that would have taken hours takes twenty minutes.

## Workflow design notes

A few practical considerations for file uploads:

**File quality matters.** Scanned PDFs where the text hasn't been OCR-processed are read as images rather than text. Claude can handle this, but text extraction quality is lower. When possible, use text-based PDFs rather than scanned images.

**Sensitive content considerations.** As covered in Section 1, think before uploading documents that contain confidential business information, client data, or personally identifiable information. The same privacy principles apply here.

**Context window management.** If you're uploading multiple large documents, prioritize what's most relevant. Too many long documents in a single context can dilute Claude's attention across them. For complex multi-document work, organize by topic and work through them in focused sessions.

**Referencing across sessions.** File uploads persist within a conversation but not across conversations. If you'll need the same document across multiple sessions, consider a Claude Project where uploaded reference material stays available.

## Try this in Claude

Find a document you need to process this week: a report to summarize, a contract to review, meeting notes to organize, or an email thread to make sense of. Upload it to Claude and ask one specific question about it rather than a general "summarize this." Notice how much more precise the response is when Claude is working from the actual document rather than your description of it.

## Pro tips

- For long PDFs, tell Claude which section to focus on if you only need part of it. "Focus on Section 3, which starts on page 14" prevents Claude from spreading attention across the whole document when you only need one part.
- You can upload multiple files in the same conversation and ask Claude to work across them. This is especially useful for comparison tasks.
- Images of whiteboards, hand-drawn diagrams, or handwritten notes can be uploaded as images and Claude will interpret their content.
- When uploading a document for a specific task, include the task in the same message as the upload rather than uploading first and asking later. This gives Claude context to apply immediately.

## Quick summary

Uploading files puts your actual documents in front of Claude instead of your description of them. This produces more precise responses, enables direct extraction and comparison, and removes a layer of interpretive translation. Use file uploads for any task where you have relevant source material rather than rebuilding that material as text in your prompt.
