/**
 * Generates a color from a word. The color is generated using the hash code of the word.
 * @param word Word to generate the RGB values from
 * @returns A string with the RGB values
 */
export const wordToRGB = (word: string) => {
  // Calculate the hash code of the word
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate the RGB values from the hash code
  const r = (hash & 0xff0000) >> 16;
  const g = (hash & 0x00ff00) >> 8;
  const b = hash & 0x0000ff;

  return `rgb(${r}, ${g}, ${b})`;
};
