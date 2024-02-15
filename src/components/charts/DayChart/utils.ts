// import { INTERVAL_TIME } from '@/shared/config';
import { CHART_COUNT_THRESHOLD } from '@/reactapp/utils/time';
import { Grouped } from '@/shared/types/activeWindow';

import { TICKS } from './config';

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
// export const countToFormattedTime = (count: number): string => {
//   const time = count * msToSec(INTERVAL_TIME);
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;
//   return `${hours.toString().padStart(2, '0')}:${minutes
//     .toString()
//     .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// };

/**
 * Checks if the timestamp is within the bounds. The bounds represent the start and end of the chart (in minutes).
 * @param t Timestamp in milliseconds.
 * @param bounds Bounds of the chart. Given in minutes by the brushed Scale.
 * @returns `true` or `false` depending on if the timestamp is within the bounds.
 */
export const isWithinBounds = (
  t: number,
  bounds: [number, number] = [0, TICKS.BARS]
): boolean => {
  const minutes = minutesSinceStart(t);
  return minutes >= bounds[0] && minutes <= bounds[1];
};

/**
 * Method used to filter an array of grouped entries.
 * @param w Window result.
 * @param bounds Bounds of the chart. Given in minutes by the brushed Scale.
 * @returns `true` or `false` depending on if the data should be rendered or not.
 * @example results.filter(shouldRenderData(bounds));
 */
export const shouldRenderData =
  (bounds: [number, number] = [0, TICKS.BARS]) =>
  (w: Grouped): boolean => {
    const passedThreshold = w.group.count >= CHART_COUNT_THRESHOLD;

    return passedThreshold && isWithinBounds(w.timestamp, bounds);
  };
