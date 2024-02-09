import { TimeUnits } from '@/reactapp/types/time';

/**
 * Returns the hours, minutes and seconds of a `Date` object as numbers.
 * @param time Time in milliseconds used to create a `Date` object.
 * @returns An object containing the hours, minutes and seconds of the Date object as numbers.
 */
const getTimeUnits = (time: number): TimeUnits => {
  const date = new Date(time);

  // Where to trim the ISO Date string. Example: 1970-01-01T/00:00:50/.000Z
  // The / denotes the start and end of the string.
  const STRING_START = 11;
  const STRING_END = 19;
  const [h, m, s] = date
    .toISOString()
    .slice(STRING_START, STRING_END)
    .split(':');

  return { h: Number(h), m: Number(m), s: Number(s) };
};

/**
 * Generates a string in the format of "hh:mm:ss" using milliseconds.
 * @param time Time measured in milliseconds.
 * @returns A string in the format of "hh:mm:ss".
 */
export const getFormattedTime = (time: number): string => {
  const { h, m, s } = getTimeUnits(time);

  let result = `${s}s`;

  // Append minutes only if they are not 0.
  if (Number(m)) {
    result = `${m}m ${result}`;

    // Also append hours only if they are not 0.
    if (Number(h)) result = `${h}h ${result}`;
  }

  return result;
};
