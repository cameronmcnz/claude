---
layout: lesson
title: "Mermaid Sequence Diagram: How RAG Works"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Mermaid Sequence Diagram: How RAG Works

A step-by-step sequence diagram showing the actors and message flow in a Retrieval-Augmented Generation pipeline.

## Starter Prompt

Create a Mermaid sequence diagram showing how a RAG (Retrieval-Augmented Generation) system works, from the user's question through retrieval and all the way to the final answer.

---

## Expanded Prompt

Create a Mermaid sequence diagram that explains how RAG (Retrieval-Augmented Generation) works, showing the communication between each system component.

### Goal

Build a step-by-step sequence diagram that shows the messages and interactions between:

- The **User**
- The **Application** (the interface or orchestration layer)
- The **Embedding Model**
- The **Vector Database**
- The **LLM** (Large Language Model)

### Sequence to Show

1. User sends a question to the Application
2. Application sends the question to the Embedding Model
3. Embedding Model returns a vector embedding to the Application
4. Application queries the Vector Database with the embedding
5. Vector Database returns relevant document chunks to the Application
6. Application constructs a prompt combining the question and retrieved context
7. Application sends the combined prompt to the LLM
8. LLM returns a generated answer to the Application
9. Application returns the final answer to the User

### Optional: Show the No-Context Path

Add an alternate path using a Mermaid `alt` block to show what happens when no relevant documents are found:

- Application sends the question to the LLM without retrieved context
- LLM answers from general knowledge
- Application returns the answer with an optional note that no source documents were found

### Mermaid Requirements

- Use `sequenceDiagram` syntax
- Label each participant clearly: `User`, `App`, `Embedding Model`, `Vector DB`, `LLM`
- Use solid arrows (`->>`) for requests and dashed arrows (`-->>`) for responses
- Use an `alt` block if showing the no-context fallback path
- Keep labels short and readable

### Design Goals

- Easy to follow from top to bottom
- Suitable for a beginner AI course, workshop, or slide deck
- Clear about which system handles which step

### Output Instructions

Return only the Mermaid code block. No explanation before or after.

---

## Tips for Refining

- *"Render this as an HTML artifact with the diagram displayed inline"*
- *"Add a re-ranking step between retrieval and prompt construction"*
- *"Add a guardrails or content filtering step before the LLM response"*
- *"Compare this side-by-side with a non-RAG LLM flow"*
