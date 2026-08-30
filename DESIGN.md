# DESIGN.md — Design System

## Overview

Material 3 template app. Colors are fully dynamic — generated at runtime from a seed color (`#004ac6`) via `@pchmn/expo-material3-theme` and exposed as CSS variables through NativeWind's `vars()`.

Light and dark modes are supported, with dark using custom `DEEP_DARK` overrides for deeper surfaces.

## Color System

Colors are **not hardcoded**. The `Material3Scheme` from `useMaterial3Theme()` provides all color tokens at runtime.

### Tailwind class mapping

| Tailwind class                | CSS variable                             | Source token                     |
| ----------------------------- | ---------------------------------------- | -------------------------------- |
| `bg-primary`                  | `var(--color-primary)`                   | `colors.primary`                 |
| `text-on-primary`             | `var(--color-on-primary)`                | `colors.onPrimary`               |
| `bg-primary-container`        | `var(--color-primary-container)`         | `colors.primaryContainer`        |
| `text-on-primary-container`   | `var(--color-on-primary-container)`      | `colors.onPrimaryContainer`      |
| `bg-secondary`                | `var(--color-secondary)`                 | `colors.secondary`               |
| `text-on-secondary`           | `var(--color-on-secondary)`              | `colors.onSecondary`             |
| `bg-secondary-container`      | `var(--color-secondary-container)`       | `colors.secondaryContainer`      |
| `text-on-secondary-container` | `var(--color-on-secondary-container)`    | `colors.onSecondaryContainer`    |
| `bg-tertiary`                 | `var(--color-tertiary)`                  | `colors.tertiary`                |
| `text-on-tertiary`            | `var(--color-on-tertiary)`               | `colors.onTertiary`              |
| `bg-tertiary-container`       | `var(--color-tertiary-container)`        | `colors.tertiaryContainer`       |
| `text-on-tertiary-container`  | `var(--color-on-tertiary-container)`     | `colors.onTertiaryContainer`     |
| `bg-surface`                  | `var(--color-surface)`                   | `colors.surface`                 |
| `text-on-surface`             | `var(--color-on-surface)`                | `colors.onSurface`               |
| `bg-surface-lowest`           | `var(--color-surface-container-lowest)`  | `colors.surfaceContainerLowest`  |
| `bg-surface-low`              | `var(--color-surface-container-low)`     | `colors.surfaceContainerLow`     |
| `bg-surface-high`             | `var(--color-surface-container-high)`    | `colors.surfaceContainerHigh`    |
| `bg-surface-highest`          | `var(--color-surface-container-highest)` | `colors.surfaceContainerHighest` |
| `bg-surface-dim`              | `var(--color-surface-dim)`               | `colors.surfaceDim`              |
| `bg-surface-bright`           | `var(--color-surface-bright)`            | `colors.surfaceBright`           |
| `bg-surface-variant`          | `var(--color-surface-variant)`           | `colors.surfaceVariant`          |
| `text-on-surface-variant`     | `var(--color-on-surface-variant)`        | `colors.onSurfaceVariant`        |
| `bg-surface-tint`             | `var(--color-surface-tint)`              | `colors.surfaceTint`             |
| `bg-background`               | `var(--color-background)`                | `colors.background`              |
| `text-on-background`          | `var(--color-on-background)`             | `colors.onBackground`            |
| `text-outline`                | `var(--color-outline)`                   | `colors.outline`                 |
| `border-outline-variant`      | `var(--color-outline-variant)`           | `colors.outlineVariant`          |
| `bg-error`                    | `var(--color-error)`                     | `colors.error`                   |
| `text-on-error`               | `var(--color-on-error)`                  | `colors.onError`                 |
| `bg-error-container`          | `var(--color-error-container)`           | `colors.errorContainer`          |
| `text-on-error-container`     | `var(--color-on-error-container)`        | `colors.onErrorContainer`        |
| `bg-inverse-surface`          | `var(--color-inverse-surface)`           | `colors.inverseSurface`          |
| `text-inverse-on-surface`     | `var(--color-inverse-on-surface)`        | `colors.inverseOnSurface`        |
| `bg-inverse-primary`          | `var(--color-inverse-primary)`           | `colors.inversePrimary`          |

## Typography

- **Font family**: Lexend Deca (loaded via `@expo-google-fonts/lexend-deca`)
- **Weights used**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Tailwind classes**: `font-lexend-deca`, `font-lexend-deca-medium`, `font-lexend-deca-semibold`, `font-lexend-deca-bold`

### Type scale

| Token       | Size | Weight  | Tailwind class                       |
| ----------- | ---- | ------- | ------------------------------------ |
| Display     | 32px | Bold    | `text-4xl font-lexend-deca-bold`     |
| Headline Lg | 24px | Semi    | `text-3xl font-lexend-deca-semibold` |
| Headline Md | 20px | Semi    | `text-2xl font-lexend-deca-semibold` |
| Title       | 18px | Medium  | `text-xl font-lexend-deca-medium`    |
| Body Md     | 16px | Regular | `text-base font-lexend-deca`         |
| Body Sm     | 14px | Regular | `text-sm font-lexend-deca`           |
| Label Md    | 14px | Medium  | `font-lexend-deca-medium`            |
| Label Sm    | 12px | Semi    | `text-xs font-lexend-deca-semibold`  |

## Spacing

Base unit: 4px. Scale defined in `src/constants/theme.ts`.

| Token | Value |
| ----- | ----- |
| `xs`  | 4px   |
| `sm`  | 8px   |
| `md`  | 16px  |
| `lg`  | 24px  |
| `xl`  | 32px  |
| `2xl` | 48px  |

## Shape

| Token  | Value  | Use              |
| ------ | ------ | ---------------- |
| `sm`   | 4px    | Small elements   |
| `md`   | 8px    | Default radius   |
| `lg`   | 12px   | Cards, inputs    |
| `xl`   | 16px   | Large cards      |
| `full` | 9999px | Buttons, avatars |

## Component Patterns

### Buttons

- **Primary**: `bg-primary text-on-primary rounded-full py-3`
- **Secondary**: `bg-primary-container text-on-primary-container rounded-full py-3`
- **Outline**: `border border-outline rounded-full py-3`
- **Text**: no background, `text-primary`

### Cards

- Use `bg-surface-low` or `bg-surface` with `rounded-2xl p-4`
- No shadows — use elevation surface colors for depth

### Inputs

- `border border-outline-variant bg-surface-lowest rounded-xl px-4 py-3`
- Label: `text-xs text-outline`
- Placeholder: `placeholderTextColor={colors.outline}`

## Do's and Don'ts

**Do:**

- Use Tailwind classes for static styling (`bg-primary`, `text-on-surface`)
- Use inline `style` only for truly dynamic values (conditional colors, RN component props)
- Keep components simple and reusable
- Use the Material 3 color tokens — don't invent new colors

**Don't:**

- Don't hardcode color hex values in components
- Don't add `shadow-*` classes — use surface color elevation instead
- Don't use inline styles when a Tailwind class exists for the same purpose
- Don't add new font families — Lexend Deca only
