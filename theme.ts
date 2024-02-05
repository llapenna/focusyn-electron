import {
  defineTokens,
  defineSemanticTokens,
  defineGlobalStyles,
} from '@pandacss/dev';
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
  // width
  w100: { value: '100%' },
  w75: { value: '75%' },
  w50: { value: '50%' },
  w25: { value: '25%' },
  fullWidth: { value: '100vw' },
  // height
  h100: { value: '100%' },
  h75: { value: '75%' },
  h50: { value: '50%' },
  h25: { value: '25%' },
  fullHeight: { value: '100vh' },
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
    300: { value: '#d1d5db' },
    400: { value: '#9ca3af' },
    500: { value: '#6b7280' },
    900: { value: '#111827' },
    950: { value: '#030712' },
  },
  slate: {
    300: { value: '#cbd5e1' },
    500: { value: '#64748b' },
    600: { value: '#475569' },
    700: { value: '#334155' },
  },
  white: { value: '#ffffff' },
});
const semanticColors = defineSemanticTokens.colors({
  background: { value: '{colors.gray.950}' },
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

export const theme: ExtendableOptions['theme'] = {
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

// --------------------
// GLOBAL STYLES
// --------------------

export const global = defineGlobalStyles({
  body: {
    '-webkit-app-region': 'drag',

    button: {
      '-webkit-app-region': 'no-drag',
    },
    bg: 'background',
  },
});
