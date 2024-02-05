import { defineConfig } from '@pandacss/dev';

import { theme, global } from './theme';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Theme customization
  theme,
  globalCss: global,

  // The output directory for your css system
  outdir: 'src/styled',
});
