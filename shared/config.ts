import { ms } from 'convert';

/**
 * How often should the active window be checked? (in milliseconds)
 */
export const INTERVAL_TIME = ms('1s');

/**
 * How long should the user be idle before the active window is set to 'idle'? (in milliseconds)
 */
export const IDLE_TIME = ms('5min');

/**
 * How long should the user be on the same window before it's considered focused? (in milliseconds)
 */
export const FOCUS_TIME = ms('15min');
