import { secToMs } from './time';

/**
 * How often should the active window be checked? (in milliseconds)
 */
export const INTERVAL_TIME = secToMs(5);

/**
 * How long should the user be idle before the active window is set to 'idle'? (in seconds)
 */
export const IDLE_TIME = 60;
