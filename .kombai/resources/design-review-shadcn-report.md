# Design Review Results: OneOf.Store (Shadcn/UX Direction)

**Review Date**: 2026-02-15
**Direction**: Shadcn/UX (High Utility, Clean, Minimalist)

## Summary
The previous "Island Architecture" redesign was deemed too experimental. The new direction focuses on **shadcn/ui** standards: a clean white-space layout, slate-based neutral color palette, and high-precision typography. This aligns better with a professional developer tool store.

## Issues & Improvements (Shadcn Focus)

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | **Typography Polish**: The current use of Arial is the biggest bottleneck. Switching to **Geist** or **Inter** with proper weight (500/600/700) is essential for the "shadcn" look. | 🔴 Critical | Visual Design | `src/app/globals.css:25` |
| 2 | **Component Library Alignment**: The current components in `ui/` are basic. They should be replaced or updated to match the **Radix UI + Tailwind** patterns found in the official shadcn library. | 🟠 High | Consistency | `src/components/ui/` |
| 3 | **Neutral Palette**: The current blue-to-purple gradient is too loud. A transition to a **Slate/Zinc** palette with high-contrast primary buttons (Black/White) will improve utility. | 🟠 High | Visual Design | `src/app/page.tsx:9` |
| 4 | **Shadows vs Borders**: Current cards use soft shadows. Modern UX (Linear/shadcn) prefers **1px borders (`border-border`)** and subtle hover transitions over heavy shadows. | 🟡 Medium | Visual Design | `src/components/ui/Card.tsx:11` |
| 5 | **Information Hierarchy**: The Tool Detail page needs a more "utility" focused layout—perhaps a side-sidebar for actions/price and a clean main area for features. | 🟡 Medium | UX/Usability | `src/app/tools/[id]/page.tsx` |

## Recommended Shadcn Components to Install
- `Tabs`: For category filtering.
- `NavigationMenu`: For the header.
- `Command`: For quick tool searching.
- `Separator`: For cleaner sectioning.
- `Sonner`: For modern toast notifications.

## Next Steps
1. **Bootstrap Shadcn**: Run `npx shadcn@latest init` to properly set up the theme variables in `globals.css`.
2. **Update Global Styles**: Set default font-family to Inter/Geist.
3. **Refactor Home Page**: Remove the gradient hero and implement a clean, type-driven hero section.
4. **Rebuild ToolCard**: Use the `slate` border and refined typography patterns.
