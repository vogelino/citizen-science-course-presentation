// UTILITIES ========================================================
// This gives us a random number between min and max
export const randomInRange = (min, max) => {
  const difference = max - min;
  return Math.random() * difference + min;
};

// This randomizes the order of the items in an array
export const shuffleArray = (arrayToShuffle) =>
  arrayToShuffle
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
