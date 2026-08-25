---
name: ast-code-and-client-review
description: 'Review the AST Car Rental webapp as a senior software engineer and as a rental customer. Use when auditing React/Vite code, checking errors, improving efficiency, validating builds, or assessing customer experience and product priorities.'
argument-hint: 'Review the AST codebase and product experience, then report defects, risks, strengths, and prioritized improvements.'
user-invocable: true
---

# AST Code And Client Review

## Purpose

Produce one evidence-based review of the AST Car Rental application from two perspectives:

- **Engineering:** correctness, runtime behavior, maintainability, efficiency, accessibility, security, data integrity, and testability.
- **Client:** clarity, trust, usefulness, booking friction, missing workflows, and what already feels valuable.

Do not modify application code unless the user explicitly asks for fixes. Treat generated output, dependencies, secrets, and existing user changes carefully. Never expose secret values from environment files.

## Procedure

1. Establish the repository root and inspect `package.json`, README documentation, build configuration, entry points, source files, assets, routes, components, pages, and tests. Exclude `node_modules` and generated `dist` output from source conclusions unless evaluating bundle output.
2. Trace the rendered path from the HTML entry through the React bootstrap, router, app shell, navigation, pages, and data/asset modules. Identify the code that actually controls each reported behavior.
3. Run the narrowest available checks, then the project checks from the correct working directory. Prefer the package manager and scripts declared by the repository. At minimum, run lint and production build when scripts exist; run tests, type checks, and audits when configured.
4. Separate confirmed findings from inferred risks. For every finding, record severity, file path, approximate line, user or system impact, likely cause, and a practical recommendation. Order findings by severity: critical, high, medium, low.
5. Inspect data and fixtures for contradictory counts, invalid relationships, stale dates, inconsistent naming, impossible states, and pricing or availability rules that could mislead the UI.
6. Review the client journey: landing and navigation, discovery, search/filtering, vehicle details, date selection, pricing, reservation, payment, confirmation, booking management, cancellation, errors, loading, empty states, responsive behavior, accessibility, and trust signals. Distinguish implemented behavior from README roadmap claims.
7. End with a prioritized improvement list grouped into immediate fixes, next product increments, and production-readiness work. Include strengths and a concise validation summary, including failed commands and whether failure is code-related or environmental.

## Quality Bar

- Findings must be actionable and grounded in inspected code, not generic advice.
- Do not call a planned feature implemented unless the code demonstrates it.
- Do not label a clean build as proof that runtime behavior is complete.
- Check both happy paths and boundary cases such as empty data, invalid dates, unavailable vehicles, duplicate bookings, unauthorized owner actions, deep links, mobile widths, keyboard navigation, and network failure.
- Treat booking availability, price calculation, permissions, and booking state transitions as server-authoritative concerns when a backend is absent.
- Recommend focused tests for the highest-risk rules and user flows.
- Keep the final report concise enough to scan, with findings first and the strengths summary afterward.

## Report Format

### Engineering Findings

For each issue:

`[Severity] Finding`  
`Evidence:` linked file path and approximate line  
`Impact:` what can break or confuse users/developers  
`Recommendation:` smallest sensible next action

### Client Review

Include:

- What already works
- What is confusing, incomplete, or absent
- Highest-value improvements in priority order

### Validation

List commands run and their outcomes. Explain failures rather than hiding them.
