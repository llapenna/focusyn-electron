import { defineTokens, defineSemanticTokens } from '@pandacss/dev';
import type { ExtendableOptions } from '@pandacss/types';

// --------------------
// SPACINGS
// --------------------
const spacing = defineTokens.spacing({
  xxs: { value: '2px' },
  xs: { value: '4px' },
  sm: { value: '8px' },
  md: { value: '16px' },
  lg: { value: '24px' },
  xl: { value: '32px' },
  xxl: { value: '48px' },
  huge: { value: '64px' },
});

// --------------------
// SIZES
// --------------------
const sizes = defineTokens.sizes({
  xxs: { value: '8px' },
  xs: { value: '16px' },
  sm: { value: '24px' },
  md: { value: '32px' },
  lg: { value: '48px' },
  xl: { value: '64px' },
});

// --------------------
// FONT SIZES
// --------------------
const fontSizes = defineTokens.fontSizes({
  xxs: { value: '12px' },
  xs: { value: '16px' },
  sm: { value: '24px' },
  md: { value: '32px' },
  lg: { value: '48px' },
  xl: { value: '64px' },
  xxl: { value: '96px' },
});

// --------------------
// FONT WEIGHTS
// --------------------
const fontWeights = defineTokens.fontWeights({
  light: { value: 300 },
  normal: { value: 400 },
  bold: { value: 700 },
});

// --------------------
// RADII
// --------------------
const radii = defineTokens.radii({
  sm: { value: '4px' },
  md: { value: '8px' },
  lg: { value: '16px' },
});

// --------------------
// COLORS
// --------------------
const colors = defineTokens.colors({
  gray: {
    50: { value: '#f9fafb' },
    200: { value: '#e5e7eb' },
    500: { value: '#6b7280' },
  },
  white: { value: '#ffffff' },
});
const semanticColors = defineSemanticTokens.colors({
  background: { value: '{colors.gray.50}' },
  overlay: { value: '{colors.white}' },
  overlayBorder: { value: '{colors.gray.200}' },
  subtleBorder: { value: '{colors.gray.200}' },
});

// --------------------
// SHADOWS
// --------------------
const shadows = defineTokens.shadows({
  sm: { value: '2px 2px 4px 0px rgba(0,0,0,0.1)' },
  md: { value: '0px 4px 8px 0px rgba(0,0,0,0.1)' },
  lg: { value: '0px 8px 16px 0px rgba(0,0,0,0.1)' },
});
const semanticShadows = defineTokens.shadows({
  subtle: { value: '{shadows.sm}' },
  main: { value: '{shadows.md}' },
});

const theme: ExtendableOptions['theme'] = {
  tokens: {
    spacing,
    sizes,
    fontSizes,
    radii,
    colors,
    shadows,
    fontWeights,
  },
  semanticTokens: {
    colors: semanticColors,
    shadows: semanticShadows,
  },
};
export default theme;
