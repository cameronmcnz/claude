---
layout: lesson
title: "Journal Entry"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: journal-entry
order: 0
noindex: true
---

# finance:journal-entry

**Prepare journal entries with proper debits and credits.**

The most foundational function in the Finance Plugin. Describe a financial transaction in plain English and it returns a properly formatted journal entry — account names, debit and credit columns, amounts, and a brief explanation of the accounting treatment. No accounting jargon required on your end.

---

## EverClean example

```
finance:journal-entry

Transaction: EverClean received a $500,000 seed investment from an angel investor 
             in exchange for a convertible note. The funds were deposited into 
             the company's operating bank account on June 1, 2025.

Chart of accounts: Cash, Notes Payable, Paid-In Capital, Interest Expense
Entity type: Early-stage startup, pre-revenue
```

**What you'll get:** A properly structured journal entry with debit to Cash ($500,000) and credit to Notes Payable ($500,000), plus a note explaining why this is debt rather than equity at this stage, and what changes when/if the note converts.

---

## Useful follow-up prompts

- *"Now prepare the journal entry for when the convertible note converts to equity at Series A at a $4M valuation cap."*
- *"Record the $18,000 wire transfer to our injection moulding tooling vendor as a prepaid asset."*
- *"What's the correct treatment for the $3,500 prototype unit we gave a showroom partner at no charge — expense or sample inventory?"*
