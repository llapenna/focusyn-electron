const tokens = {
  "spacing.xxs": {
    "value": "2px",
    "variable": "var(--spacing-xxs)"
  },
  "spacing.xs": {
    "value": "4px",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "8px",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "16px",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "24px",
    "variable": "var(--spacing-lg)"
  },
  "spacing.xl": {
    "value": "32px",
    "variable": "var(--spacing-xl)"
  },
  "spacing.xxl": {
    "value": "48px",
    "variable": "var(--spacing-xxl)"
  },
  "spacing.huge": {
    "value": "64px",
    "variable": "var(--spacing-huge)"
  },
  "sizes.xxs": {
    "value": "8px",
    "variable": "var(--sizes-xxs)"
  },
  "sizes.xs": {
    "value": "16px",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24px",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "32px",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "48px",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "64px",
    "variable": "var(--sizes-xl)"
  },
  "sizes.w100": {
    "value": "100%",
    "variable": "var(--sizes-w100)"
  },
  "sizes.w75": {
    "value": "75%",
    "variable": "var(--sizes-w75)"
  },
  "sizes.w50": {
    "value": "50%",
    "variable": "var(--sizes-w50)"
  },
  "sizes.w25": {
    "value": "25%",
    "variable": "var(--sizes-w25)"
  },
  "sizes.fullWidth": {
    "value": "100vw",
    "variable": "var(--sizes-full-width)"
  },
  "sizes.h100": {
    "value": "100%",
    "variable": "var(--sizes-h100)"
  },
  "sizes.h75": {
    "value": "75%",
    "variable": "var(--sizes-h75)"
  },
  "sizes.h50": {
    "value": "50%",
    "variable": "var(--sizes-h50)"
  },
  "sizes.h25": {
    "value": "25%",
    "variable": "var(--sizes-h25)"
  },
  "sizes.fullHeight": {
    "value": "100vh",
    "variable": "var(--sizes-full-height)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "fontSizes.xxs": {
    "value": "12px",
    "variable": "var(--font-sizes-xxs)"
  },
  "fontSizes.xs": {
    "value": "16px",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "24px",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "32px",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "48px",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "64px",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.xxl": {
    "value": "96px",
    "variable": "var(--font-sizes-xxl)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "8px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "16px",
    "variable": "var(--radii-lg)"
  },
  "colors.gray.50": {
    "value": "#f9fafb",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.200": {
    "value": "#e5e7eb",
    "variable": "var(--colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#d1d5db",
    "variable": "var(--colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#9ca3af",
    "variable": "var(--colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#6b7280",
    "variable": "var(--colors-gray-500)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "shadows.sm": {
    "value": "2px 2px 4px 0px rgba(0,0,0,0.1)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "0px 4px 8px 0px rgba(0,0,0,0.1)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "0px 8px 16px 0px rgba(0,0,0,0.1)",
    "variable": "var(--shadows-lg)"
  },
  "fontWeights.light": {
    "value": 300,
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": 400,
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.bold": {
    "value": 700,
    "variable": "var(--font-weights-bold)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.background": {
    "value": "var(--colors-background)",
    "variable": "var(--colors-background)"
  },
  "colors.overlay": {
    "value": "var(--colors-overlay)",
    "variable": "var(--colors-overlay)"
  },
  "colors.overlayBorder": {
    "value": "var(--colors-overlay-border)",
    "variable": "var(--colors-overlay-border)"
  },
  "colors.subtleBorder": {
    "value": "var(--colors-subtle-border)",
    "variable": "var(--colors-subtle-border)"
  },
  "shadows.subtle": {
    "value": "var(--shadows-subtle)",
    "variable": "var(--shadows-subtle)"
  },
  "shadows.main": {
    "value": "var(--shadows-main)",
    "variable": "var(--shadows-main)"
  },
  "spacing.-xxs": {
    "value": "calc(var(--spacing-xxs) * -1)",
    "variable": "var(--spacing-xxs)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-xxl": {
    "value": "calc(var(--spacing-xxl) * -1)",
    "variable": "var(--spacing-xxl)"
  },
  "spacing.-huge": {
    "value": "calc(var(--spacing-huge) * -1)",
    "variable": "var(--spacing-huge)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar