---
layout: lesson
title: "Financial Statements"
section: 7
section_title: "Skills, Plugins & Chat Power Features"
section_slug: "07-skills-plugins"
plugin: finance
function: financial-statements
order: 4
noindex: true
---

# finance:financial-statements

**Generate income statements, balance sheets, and cash flow statements.**

Takes trial balance data, account summaries, or a list of period transactions and assembles them into properly formatted financial statements — with correct classifications, subtotals, and presentation order. Output can be investor-ready, bank-ready, or internal management format.

---

## EverClean example

```
finance:financial-statements

Period: June 30, 2025 (first full month of operations post-funding)
Entity: EverClean Inc. — pre-revenue hardware startup
Basis: US GAAP, accrual

Trial balance summary:

Assets:
  Cash                          $463,840
  Prepaid Insurance               $8,000
  Prototype Inventory (3 units)   $6,300
  Tooling (net of amortization)  $16,200

Liabilities:
  Accounts Payable               $22,000
  Accrued Payroll                $25,000
  Convertible Note Payable      $500,000
  Accrued Interest                  $250

Equity:
  Common Stock                    $1,000
  Additional Paid-In Capital      $9,000
  Retained Earnings (Deficit)  ($63,910)

Revenue:                              $0

Expenses (June):
  R&D / Engineering             $22,000
  Salaries & Wages              $25,000
  Marketing                      $8,600
  Insurance (amortized)          $1,600
  Interest Expense                  $250
  Admin                           $6,460

Statements needed: Balance sheet and income statement
Format: Investor update — clean, simple, no footnotes
```

**What you'll get:** A clean two-statement package — an income statement showing June's $63,910 net loss by expense category, and a balance sheet as of June 30 with assets, liabilities, and equity properly classified and balanced.

---

## Useful follow-up prompts

- *"Add a cash flow statement using the indirect method based on these same figures."*
- *"Format the income statement as a budget-versus-actual comparison using our Q2 budget figures."*
- *"Write a one-paragraph CFO commentary to accompany these statements in the investor update."*
