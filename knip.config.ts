import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.{jsx,tsx}', 'electron/main.{js,ts}', 'shared/**/*.{js,ts}'],
  project: ['**/*.{js,ts,jsx,tsx}'],
  ignore: [
    // Config files
    'electron/preload.ts',
    './*.config.{js,cjs,ts}',
    'theme.ts',
    // Prod or dependencies
    'node_modules',
    'dist',
  ],
};

export default config;
