---
title: "Research"
description: "Research interests and working papers by Hiromu Sugiyama."
showDate: false
showReadingTime: false
---

## Research Interests

Conjoint experiments, bureaucratic accountability, voting systems, multiple equilibria, sanctions.

## Working Papers

### Using Conjoint for Voting Advice Applications

**with** Teppei Yamamoto, Airo Hino, Yuto Kitano, Rob Fahey, Taketo Hara

Voting advice applications (VAAs) typically ask voters about individual policy issues and compute
match scores with parties or candidates using additive, often arbitrarily weighted formulas. This
approach ignores interactions between issues and can invite socially desirable responding on
sensitive topics such as gender and ethnicity. We propose a conjoint-based VAA that instead
presents voters with bundled policy packages and asks which hypothetical party or candidate they
would support, capturing both the direction and intensity of preferences (Bansak et al. 2023)
while drawing on established conjoint analysis methods. The central challenge is producing an
individual match score immediately after a single round of responses, without the repeated-choice
data typical conjoint analysis relies on. We develop a new algorithm that computes a voter's
proximity to policy bundles from their own conjoint responses alone, and show via simulation that
it is simple, fast, and scalable. We implement it for Japan's national elections in July 2025 and
February 2026.
