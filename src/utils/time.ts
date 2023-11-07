import { secToMs } from '@/shared/time';

/**
 * Helper function to convert a number to a `Date` object.
 * @param time Time in milliseconds or seconds.
 * @param format Whether the time is in milliseconds or seconds. Defaults to milliseconds.
 * @returns A `Date` object.
 */
const numberToDate = (time: number, format: 'ms' | 's'): Date => {
  return new Date(format === 'ms' ? time : secToMs(time));
};

/**
 * Generates a string in the format of "hh:mm:ss" from a Date object or milliseconds.
 * @param time Date object or milliseconds to generate a Date object from.
 * @returns A string in the format of "hh:mm:ss".
 */
export const getFormattedTime = (
  time: Date | number,
  format: 'ms' | 's' = 'ms'
): string => {
  const date = typeof time === 'number' ? numberToDate(time, format) : time;

  // Where to trim the ISO Date string. Example: 1970-01-01T/00:00:50/.000Z
  // The / denotes the start and end of the string.
  const STRING_START = 11;
  const STRING_END = 19;
  const [h, m, s] = date
    .toISOString()
    .slice(STRING_START, STRING_END)
    .split(':');

  let result = `${s}s`;

  // Append minutes only if they are not 0.
  if (Number(m)) {
    result = `${m}m ${result}`;

    // Also append hours only if they are not 0.
    if (Number(h)) result = `${h}h ${result}`;
  }

  return result;
};
