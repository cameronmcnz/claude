---
layout: lesson
title: "Multiple Choice Quiz App"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Multiple Choice Quiz App

## Starter Prompt

Create a fun multiple choice quiz app with friendly colors that asks these questions, then grades it and explains why each correct answer is right.

**Quiz questions:**

- What do you call a fish without an eye? *(Answer: fsh)*
- What do you call a deer with no eye? *(Answer: No idea)*
- What do you call a deer with no eyes and no legs? *(Answer: Still no idea)*

---

## Expanded Prompt

Create an interactive multiple choice quiz app as a Claude Artifact using HTML, CSS, and JavaScript.

### Quiz Questions and Answers

**Question 1:** What do you call a fish without an eye?

- Inky
- One eyed fish
- Blinky
- fsh ✓

**Explanation:** A fish without an "i" is spelled "fsh" — it's a play on the word "eye" sounding like the letter "i."

---

**Question 2:** What do you call a deer with no eye?

- Bambi
- Sad deer
- No idea ✓
- Doe

**Explanation:** A deer with no "eye" has "no i" — which sounds like "no idea."

---

**Question 3:** What do you call a deer with no eyes and no legs?

- No led deer
- Still no idea ✓
- Sad bambi
- Poor deer

**Explanation:** Still no "i" and no "de" — "no i-de-a" becomes "still no idea."

### Quiz Flow

1. Show one question at a time with all four answer choices
2. After the user selects an answer, immediately reveal whether it was correct or incorrect
3. Show the explanation for the correct answer after each question
4. Display a progress indicator such as "Question 2 of 3"
5. After all questions, show a results screen with the final score and a Restart button

### Design Requirements

- Friendly, approachable color palette — bright but not harsh
- Large, easy-to-read answer buttons
- Clear visual feedback for correct answers (green) and incorrect answers (red)
- Smooth transitions between questions
- Celebration or encouraging message on the results screen
- Mobile-friendly layout

### Technical Requirements

- Single self-contained HTML file
- No external libraries or dependencies
- Works immediately without any setup
