# Stack Audit

Audit date: 2026-05-07

## Runtime

- Chosen Node target: `24` in `.nvmrc`
- Reason: official Node release docs list Node 24 as the current LTS line, and `next@16` requires Node `>=20.9.0`

## Current vs chosen

| Package | Baseline | Latest seen during audit | Chosen | Reason |
| --- | --- | --- | --- | --- |
| `next` | `^16.0.10` | `16.2.5` | `^16.2.5` | Pull in current stable fixes and address active advisories affecting older 16.x releases. |
| `@next/mdx` | `^16.0.10` | `16.2.5` | `^16.2.5` | Keep MDX tooling aligned with Next. |
| `react` / `react-dom` | `^19.2.4` / `^19.2.3` | `19.2.6` | `^19.2.6` | Safe patch upgrade. |
| `@once-ui-system/core` | `latest` | `1.7.3` | `^1.7.3` | Pin the UI dependency to a tested stable version instead of leaving it floating. |
| `cookie` | `^1.0.2` | `1.1.1` | `^1.1.1` | Safe patch/minor upgrade. |
| `lint-staged` | `^16.1.5` | `16.4.0` | `^16.4.0` | Safe minor upgrade. |
| `react-icons` | `^5.5.0` | `5.6.0` | `^5.6.0` | Safe minor upgrade. |
| `sass` | `^1.86.3` | `1.99.0` | `^1.99.0` | Safe stable upgrade. |
| `transliteration` | `^2.3.5` | `2.6.1` | `^2.6.1` | Safe stable upgrade. |
| `@types/node` | `^20.17.30` | `20.19.39` (`25.x` also available) | `^20.19.39` | Stay on the Node 20-compatible type line instead of jumping to the latest major type package. |
| `typescript` | `^5.8.3` | `5.9.3` (`6.0.3` also available) | `^5.9.3` | Upgrade within the stable TS 5 line; avoid TS 6 migration during portfolio v1. |
| `eslint` | `^9.25.0` | `9.39.4` (`10.x` also available) | `^9.39.4` | Keep the stable major already compatible with the template. |
| `@biomejs/biome` | `^1.9.4` | `2.x` available | `^1.9.4` | Avoid a Biome major config migration during the same refactor; current repo now uses Biome for linting and formatting. |
| `tzdata` | `^1.0.44` | `1.0.49` | `^1.0.49` | Safe patch upgrade. |

## Notes

- `npm audit` on the baseline install reported advisories in the older `next` line and several transitive packages.
- The repo now uses `biome check .` as the primary lint command for predictable verification in this starter.
- `Blog` and `Gallery` are intentionally out of scope for this portfolio v1, so their routes were removed instead of modernized.
