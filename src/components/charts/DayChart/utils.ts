import { INTERVAL_TIME } from '@/shared/config';
import { msToSec } from '@/shared/time';

/**
 * Gets the total number of minutes that has passed since 00:00.
 * @param t Timestamp in milliseconds.
 * @returns The total time in minutes.
 */
export const minutesSinceStart = (t: number): number => {
  const date = new Date(t);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 60 + minutes;
};

/**
 * Converts a count of grouped entries to a formatted time.
 * @param count Count of grouped entries.
 * @returns The formatted time in HH:MM:SS.
 */
export const countToFormattedTime = (count: number): string => {
  const time = count * msToSec(INTERVAL_TIME);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
