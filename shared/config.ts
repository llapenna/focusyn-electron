import { secToMs } from './time';

/**
 * How often should the active window be checked? (in milliseconds)
 */
export const INTERVAL_TIME = secToMs(1);

/**
 * How long should the user be idle before the active window is set to 'idle'? (in milliseconds)
 */
export const IDLE_TIME = secToMs(60);
