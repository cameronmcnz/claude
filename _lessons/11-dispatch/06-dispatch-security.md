---
layout: lesson
title: "Security for Remote Access and Connected Tools"
section: 11
section_title: "Dispatch — Run Cowork from Your Phone"
section_slug: "11-dispatch"
order: 6
noindex: true
---

# Security for Remote Access and Connected Tools

Dispatch extends Claude's reach from your phone to your desktop, through your connectors, to your files. That's a powerful combination, and it's one worth thinking carefully about before you rely on it for sensitive work.

## Why this matters

Remote access to a computer that has access to your email, your files, and your professional data is a meaningful security surface. Understanding it doesn't mean being afraid of it; it means making deliberate choices about what's accessible and under what conditions.

## The security model

Dispatch works through the Claude mobile app's authenticated session. Your Claude account credentials are what authorize the Dispatch connection. The same account that has access to your Cowork environment is the account that controls Dispatch.

This means:
- Anyone with access to your Claude account can send Dispatch instructions
- The mobile device you use for Dispatch needs to be secured (lock screen, device encryption)
- Account credential security (strong password, two-factor authentication) is the primary security control

If you're concerned about account compromise: enable two-factor authentication on your Claude account. This is the highest-leverage security action.

## Access scoping

The data accessible through Dispatch is the data your Cowork environment is authorized to access: the folders you've granted permission for and the connectors you've configured. Dispatch doesn't add access; it allows you to invoke existing access remotely.

To scope Dispatch access:
- Only authorize folders in Cowork that you're comfortable being accessible via Dispatch
- For folders with particularly sensitive content, consider whether they need to be in the Cowork authorized set at all
- Review connector access: does your email connector need write (send) access, or is read sufficient for your workflows?

## For enterprise and regulated environments

If you work in an environment with data handling requirements (finance, healthcare, legal, government), Dispatch (and Cowork generally) may be subject to IT policy review before you use it with work data. Check with your organization's IT or compliance team before connecting work data to Cowork.

Consumer Claude plans have different data handling terms than enterprise plans. If your organization has an enterprise Claude agreement, use those credentials rather than personal credentials for work data.

## A practical security checklist

- Two-factor authentication enabled on the Claude account
- Mobile device secured (lock screen, biometrics)
- Only sensitive folders authorized in Cowork that genuinely need to be
- Connector access scoped to what's actually needed (read vs. read-write)
- IT policy reviewed if working with regulated or confidential business data

## Try this in Claude

Review your current Cowork folder authorizations and connector configurations with fresh eyes: is anything authorized that doesn't need to be? Is any connector permission broader than your workflows require? Make any adjustments. This audit takes fifteen minutes and reduces your unnecessary exposure.

## Quick summary

Dispatch security rests primarily on Claude account security (use two-factor authentication) and device security (lock screen, encryption). Access scope is determined by what your Cowork environment is authorized to access. Review folder and connector permissions and keep them minimal. For regulated environments, check IT policy before connecting work data. Security through scope limitation is more reliable than hoping for the absence of incidents.
