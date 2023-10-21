import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import electron from 'vite-plugin-electron';
import fs from 'node:fs';
import { join } from 'node:path';

/**
 * Remove the dist-electron folder before building
 */
const removeElectronDist = () => {
  const DIST_PATH = join(__dirname, 'dist-electron');
  console.log(`Removing ${DIST_PATH} before building...`);
  fs.rmSync(DIST_PATH, { recursive: true, force: true });
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuilding = command === 'build';
  const isServing = command === 'serve';

  removeElectronDist();

  return {
    resolve: {
      alias: [
        { find: '@/shared', replacement: join(__dirname, 'shared') },
        { find: '@/reactapp', replacement: join(__dirname, 'src') },
      ],
    },
    plugins: [
      react(),
      electron([
        {
          entry: 'electron/main.ts',
          onstart(options) {
            options.startup();
          },
          vite: {
            resolve: {
              alias: [
                { find: '@/shared', replacement: join(__dirname, 'shared') },
              ],
            },
            build: {
              rollupOptions: {
                external: ['active-win'],
              },
              sourcemap: isServing,
              minify: isBuilding,
            },
          },
        },
        {
          entry: 'electron/preload.ts',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
            // instead of restarting the entire Electron App.
            options.reload();
          },
          vite: {
            build: {
              sourcemap: isServing ? 'inline' : false,
              minify: isBuilding,
            },
          },
        },
      ]),
    ],
  };
});
