---
layout: lesson
title: "Snake Game"
section: 6
section_title: "Artifacts, Interactive Visuals & Claude Design"
section_slug: "06-artifacts"
artifact_type: App
order: 0
noindex: true
---

# Snake Game

## Starter Prompt

Create a snake game I can play when I'm bored.

---

## Expanded Prompt

Create a fully playable Snake game as a Claude Artifact using HTML, CSS, and JavaScript.

### Gameplay Requirements

- The snake moves continuously in the current direction
- Arrow keys or WASD control the direction
- The snake grows by one segment each time it eats food
- The game ends if the snake hits a wall or its own body
- Food appears in a random empty cell after being eaten

### Scoring

- Display a live score that increases with each piece of food eaten
- Show a high score that persists for the session
- Optionally add a speed bonus for eating food quickly

### Game States

- A start screen with instructions and a Play button
- An active game state with the grid, snake, food, and score visible
- A game over screen showing the final score and a Restart button

### Difficulty

- Start at a moderate speed
- Gradually increase speed as the score climbs
- Optionally offer Easy, Medium, and Hard settings on the start screen

### Design Requirements

- Clean, modern look with a dark background
- Distinct colors for the snake head, snake body, and food
- Smooth, readable grid layout
- Mobile-friendly with on-screen arrow buttons for touch devices
- Clear typography for score and game state messages

### Technical Requirements

- Single self-contained HTML file
- No external libraries or dependencies
- Playable immediately without any setup
