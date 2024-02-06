import { join } from 'node:path';
import isdev from 'electron-is-dev';

// All these directories are relative to '<projectRoot>/dist-electron' folder

// React-related directories
export const PUBLIC = join(__dirname, '../public');

// Build output directory
export const DIST = join(__dirname, '../dist');
export const DIST_ELECTRON = __dirname;

// Vite environment variables
export const URL = process.env['VITE_DEV_SERVER_URL'];

/**
 * Is the current environment development?
 */
export const IS_DEV = isdev;

/**
 * Is the OS macOS?
 */
export const IS_MAC = process.platform === 'darwin';
/**
 * Is the OS Windows?
 */
export const IS_WIN = process.platform === 'win32';
/**
 * Is the OS Linux?
 */
export const IS_LINUX = process.platform === 'linux';

/**
 * The title bar configuration.
 */
export const titleBar = IS_MAC
  ? { transparent: true }
  : {
      transparent: false,
      titleBarOverlay: {
        color: '#030712',
        symbolColor: '#cbd5e1',
        height: 30,
      },
    };
