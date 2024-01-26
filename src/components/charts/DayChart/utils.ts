/**
 * Gets the total number of minutes that has passed since 00:00.
 * @param t Timestamp in milliseconds.
 * @returns The total time in minutes.
 */
export const timestampToMinutes = (t: number): number => {
  const date = new Date(t);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 60 + minutes;
};
