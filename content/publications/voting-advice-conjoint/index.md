---
title: "Using Conjoint for Voting Advice Applications"
authors:
- me
- Teppei Yamamoto
- Airo Hino
- Yuto Kitano
- Rob Fahey
- Taketo Hara
date: "2026-07-03T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-07-03T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["manuscript"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
# Working papers typically have no formal venue; omit `publication` until the work is accepted.

peer_reviewed: false
open_access: true

abstract: |
  Voting advice applications (VAAs) are widely used across multi-party democracies to aid voters'
  decision-making about their electoral choices among parties or candidates. A typical VAA features
  dozens of policy issues and asks a voter about their preferred position on each of the issues, one
  by one. The application then calculates the voter's overall score indicating how closely their
  position matches each of the parties or candidates, typically ranging between 0% and 100%. This
  common approach, however, suffers from several important limitations. First, the calculation of
  the overall match scores involves adding up scores on individual issues with arbitrary (typically
  uniform) weights, implicitly making a strong assumption about how much voters care about each
  issue. Second, the calculation also fails to incorporate possible interactions between different
  issues, ignoring the possibility that some voters might, for example, take into account the
  consistency of multiple policies as a package when they make a vote choice. Third, responses on
  politically sensitive policy issues, such as gender and ethnicity, might be prone to social
  desirability bias. In this research, we propose a novel type of VAA based on conjoint tasks.
  Instead of asking about individual policy issues, we instead present packages of issue positions
  and ask voters to choose which hypothetical party or candidate they would vote for in an election.
  This approach overcomes the limitations of existing VAAs by way of measuring both direction and
  intensity of voters' preferences about policy issues via conjoint tasks (Bansak et al. 2023).
  Moreover, the responses collected through this application can be analyzed with a variety of
  statistical techniques for standard conjoint survey experiments, which have been rapidly developed
  over the recent years. A key challenge in applying a conjoint format to VAAs is that, since the
  primary purpose of the application is to provide voters with advice on how they should vote in an
  election, it needs to output match scores based on a voter's own responses immediately after
  completing their questionnaire. To overcome this challenge, we develop a new algorithm to
  calculate a voter's overall proximity to the target policy bundles on the basis of their own
  conjoint responses alone. The algorithm is simple, fast, and scalable to large-scale deployment
  for public use in actual elections. We demonstrate the performance of the proposed algorithm via
  simulations and implement it for the two Japanese National Elections in July 2025 and February
  2026.

tags:
- Conjoint Experiments
- Voting Advice Applications
- Political Methodology

featured: true

links:
- type: custom
  label: Paper Link
  url: "#"

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/projects/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
