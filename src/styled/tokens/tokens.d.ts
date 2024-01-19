/* eslint-disable */
export type Token = "spacing.xxs" | "spacing.xs" | "spacing.sm" | "spacing.md" | "spacing.lg" | "spacing.xl" | "spacing.xxl" | "spacing.huge" | "sizes.xxs" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.w100" | "sizes.w75" | "sizes.w50" | "sizes.w25" | "sizes.fullWidth" | "sizes.h100" | "sizes.h75" | "sizes.h50" | "sizes.h25" | "sizes.fullHeight" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "fontSizes.xxs" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontSizes.xxl" | "radii.sm" | "radii.md" | "radii.lg" | "colors.gray.50" | "colors.gray.200" | "colors.gray.300" | "colors.gray.400" | "colors.gray.500" | "colors.white" | "shadows.sm" | "shadows.md" | "shadows.lg" | "fontWeights.light" | "fontWeights.normal" | "fontWeights.bold" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.background" | "colors.overlay" | "colors.overlayBorder" | "colors.subtleBorder" | "shadows.subtle" | "shadows.main" | "spacing.-xxs" | "spacing.-xs" | "spacing.-sm" | "spacing.-md" | "spacing.-lg" | "spacing.-xl" | "spacing.-xxl" | "spacing.-huge" | "colors.colorPalette.50" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500"

export type ColorPalette = "gray"

export type SpacingToken = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "huge" | "-xxs" | "-xs" | "-sm" | "-md" | "-lg" | "-xl" | "-xxl" | "-huge"

export type SizeToken = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "w100" | "w75" | "w50" | "w25" | "fullWidth" | "h100" | "h75" | "h50" | "h25" | "fullHeight" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type FontSizeToken = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export type RadiusToken = "sm" | "md" | "lg"

export type ColorToken = "gray.50" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "white" | "background" | "overlay" | "overlayBorder" | "subtleBorder" | "colorPalette.50" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500"

export type ShadowToken = "sm" | "md" | "lg" | "subtle" | "main"

export type FontWeightToken = "light" | "normal" | "bold"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		spacing: SpacingToken
		sizes: SizeToken
		fontSizes: FontSizeToken
		radii: RadiusToken
		colors: ColorToken
		shadows: ShadowToken
		fontWeights: FontWeightToken
		breakpoints: BreakpointToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"