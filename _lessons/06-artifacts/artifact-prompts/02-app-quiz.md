---
layout: lesson
title: "Multiple Choice Quiz App"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
order: 0
noindex: true
---

# Multiple Choice Quiz App

A scored, interactive quiz app with answer explanations — swap in any topic and questions to make it your own.

## Starter Prompt

Create a fun multiple choice quiz app with friendly colors that asks these questions, then grades it and explains why each correct answer is right.

*(Add your own questions after pasting this prompt.)*

---

## Expanded Prompt

Create a polished multiple choice quiz app as a Claude Artifact using HTML, CSS, and JavaScript.

### Quiz Structure

- Display one question at a time
- Each question has four answer options (A, B, C, D)
- The user selects an answer and clicks a Submit or Next button
- After each answer, show whether it was correct and display a short explanation
- At the end, show a final score and a summary of right and wrong answers

### Sample Questions (replace with your own)

1. What does RAG stand for in AI?
   - A) Recurrent Attention Generation
   - B) Retrieval-Augmented Generation ✓
   - C) Random Aggregation of Guidance
   - D) Recursive Algorithmic Grounding
   *Explanation: RAG combines a retrieval step (searching documents) with a generation step (producing an answer), so the model can answer questions using up-to-date or specific information.*

2. Which Claude model is best for complex reasoning tasks?
   - A) Claude Haiku
   - B) Claude Sonnet
   - C) Claude Opus ✓
   - D) Claude Nano
   *Explanation: Claude Opus is Anthropic's most capable model, designed for complex, nuanced reasoning tasks where quality matters more than speed.*

3. What is an Artifact in Claude?
   - A) A file attached to a conversation
   - B) A rendered, interactive output in a side panel ✓
   - C) A prompt template saved for reuse
   - D) A plugin that extends Claude's capabilities
   *Explanation: Artifacts appear in a separate panel alongside the conversation, rendered as the finished output — a web page, chart, app, or document you can interact with.*

### Scoring

- Track correct and incorrect answers throughout
- Show a progress indicator (e.g., "Question 3 of 10")
- Display final score as a fraction and percentage
- Show a congratulatory message for high scores and an encouraging message for lower scores

### Design Requirements

- Friendly, modern color scheme
- Clean card layout for each question
- Clear visual feedback for correct (green) and incorrect (red) answers
- Smooth transitions between questions
- Mobile-friendly

### Technical Requirements

- Single self-contained HTML file
- No external libraries required
- Works immediately without setup

---

## Tips for Refining

- *"Replace the questions with a quiz about [your topic]"*
- *"Add a timer for each question"*
- *"Show a leaderboard at the end"*
- *"Make it a true/false quiz instead"*
