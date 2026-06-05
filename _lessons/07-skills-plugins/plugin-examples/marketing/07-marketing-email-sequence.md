---
layout: lesson
title: "Email Sequence"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: marketing
function: email-sequence
order: 0
noindex: true
---

# marketing:email-sequence

**Design multi-email sequences with timing and branching logic.**

The most complex function in the Marketing Plugin. It designs complete multi-step email sequences — including copy, send timing, subject line options, and conditional branching based on what recipients do (or don't do). Use it when a single email isn't enough and the sequence needs to adapt to behavior.

---

## EverClean example

```
marketing:email-sequence

Sequence type: waitlist nurture leading to showroom booking

Audience: People who signed up for the EverClean pre-launch waitlist. They are 
          interested but have not yet booked a showroom appointment. They are 
          affluent, design-conscious homeowners or kitchen professionals.

Goal: Convert waitlist signups into confirmed showroom appointments within 3 weeks

Emails: 5 emails over 21 days

Branching: yes
- If they click the booking link but don't complete: send a "saved your spot" 
  nudge 48 hours later
- If they open but never click after email 3: switch to a softer "just keeping 
  you in the loop" track
- If no opens after email 2: send a re-permission email before continuing

Tone: warm, intelligent, slightly witty — never pushy, never exclamation marks

Product context: EverClean is a double-wide luxury dishwasher. Side A washes. 
                 Side B is your clean dish cabinet. You never empty a dishwasher 
                 again. Price: $3,500–$5,000. Currently moving from prototype 
                 to production.
```

**What you'll get:** A full sequence map showing all 5 emails with timing, 3 subject line options each, preview text, full email body copy, and a branching diagram showing what triggers each path — including the exit condition (stop sending after showroom booking confirmed or after email 5 with no engagement).

---

## Useful follow-up prompts

- *"Write a separate 3-email sequence for architects and kitchen designers — same goal, but the angle is the zero-cabinet design opportunity, not the lifestyle convenience."*
- *"Rewrite email 3 to be more direct — we're not getting enough clicks and we think the copy is too soft."*
- *"What subject line approach tends to work best for a high-end home product audience that gets a lot of email?"*
