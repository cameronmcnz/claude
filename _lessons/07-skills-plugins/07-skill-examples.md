---
layout: lesson
title: "Skill Examples to Try"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
order: 7
noindex: true
---

# Skill Examples to Try

These are ready-to-use Claude Skill templates — structured instruction sets you can paste directly into Claude as a System Prompt or Project Instruction to create a reusable, consistent behavior.

Each example includes the complete skill definition: persona, context, output format, guardrails, and example requests. Copy the skill into your own Claude Project instructions and Claude will apply it automatically to every relevant conversation.

---

<div class="row g-4 mt-2">

  <div class="col-md-6">
    <a href="{{ '/lessons/07-skills-plugins/skills-examples/00-social-media-tweet-generator/' | relative_url }}" class="text-decoration-none">
      <div class="card-soft p-4 h-100 reveal-up">
        <div class="d-flex align-items-start gap-3 mb-3">
          <i class="lni lni-twitter-original" style="font-size:1.6rem;color:var(--brand-violet);flex-shrink:0;"></i>
          <div>
            <span class="badge badge-soft px-2 py-1 mb-1" style="font-size:0.7rem;">Social Media</span>
            <h5 class="fw-700 mb-1" style="color:var(--brand-indigo);">Healthcare Executive Tweet Generator</h5>
            <p class="text-muted small mb-0">Generates 5 ranked executive-quality tweets for healthcare leaders using the CRAP framework — calm, strategic, Sage Monk tone.</p>
          </div>
        </div>
      </div>
    </a>
  </div>

  <div class="col-md-6">
    <a href="{{ '/lessons/07-skills-plugins/skills-examples/01-skill-prompt-crisis-response/' | relative_url }}" class="text-decoration-none">
      <div class="card-soft p-4 h-100 reveal-up">
        <div class="d-flex align-items-start gap-3 mb-3">
          <i class="lni lni-alarm" style="font-size:1.6rem;color:var(--brand-violet);flex-shrink:0;"></i>
          <div>
            <span class="badge badge-soft px-2 py-1 mb-1" style="font-size:0.7rem;">Crisis Comms</span>
            <h5 class="fw-700 mb-1" style="color:var(--brand-indigo);">Healthcare Crisis Statement Drafter</h5>
            <p class="text-muted small mb-0">Drafts calm, legally careful executive messaging for sensitive healthcare situations — AI errors, service disruptions, patient communication issues.</p>
          </div>
        </div>
      </div>
    </a>
  </div>

</div>

---

## What makes these Skills, not just prompts

A prompt is something you type once. A Skill is an instruction set Claude applies consistently every time you trigger it — without you having to repeat yourself.

Each example here is structured to work as a Claude Skill: it defines a persona, a default context, an aim (what Claude should produce), requirements (what to avoid), and a precise output format. Paste one into a Project's system instructions and every conversation in that Project will follow the same behavior automatically.

**To use a skill:**

1. Open a Claude Project (or create a new one)
2. Open the Project Instructions
3. Paste the full skill text into the instructions
4. Start a conversation — Claude will apply the skill when the topic matches

You can also paste a skill directly into the system prompt box at the start of any Claude conversation if you're not using Projects.
