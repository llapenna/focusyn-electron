import { join } from 'node:path';

// All these directories are relative to '<projectRoot>/dist-electron' folder

// React-related directories
export const PUBLIC = join(__dirname, '../public');

// Build output directory
export const DIST = join(__dirname, '../dist');
export const DIST_ELECTRON = __dirname;

// Vite environment variables
export const URL = process.env['VITE_DEV_SERVER_URL'];
