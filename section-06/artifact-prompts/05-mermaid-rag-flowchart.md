---
layout: lesson
title: "Mermaid Flowchart: How RAG Works"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: Diagram
order: 0
noindex: true
---

# Mermaid Flowchart: How RAG Works

## Starter Prompt

Create a Mermaid flowchart that explains how RAG (Retrieval-Augmented Generation) works, from user question to final answer.

---

## Expanded Prompt

Create a Mermaid flowchart that explains how RAG (Retrieval-Augmented Generation) works for a beginner-friendly AI course.

### Goal

Build a clear flow diagram that shows how a user question is answered using both a large language model and external documents or knowledge sources.

### Steps to Include

1. User asks a question
2. Question is converted into an embedding
3. Vector database searches for similar content
4. Relevant documents or chunks are retrieved
5. Decision point: **Was relevant context found?**

**If Yes:**
- Add retrieved context to the prompt
- Send prompt to the LLM
- LLM generates an answer
- Answer is returned to the user

**If No:**
- Ask the LLM to answer from general knowledge
- Optionally warn the user that no supporting documents were found
- Answer is returned to the user

### Mermaid Requirements

- Use `flowchart TD` (top-down layout)
- Use clear, short node labels
- Label the Yes and No branches on the decision point
- Use `classDef` styling to visually distinguish the decision node if helpful

### Design Goals

- Easy to read and follow
- Suitable for a beginner AI course or slide deck
- Clear about what happens before and after retrieval

### Output Instructions

Return only the Mermaid code block. No explanation before or after.
