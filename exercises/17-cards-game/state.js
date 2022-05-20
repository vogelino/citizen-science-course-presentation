import { shuffleArray } from "./utils.js";

// INITIALISATION FUNCTIONS =========================================
export const createStateCards = (cardsAmount, alphabet, colors) => {
  // We make sure the amount of cards is even
  const amount = cardsAmount - (cardsAmount % 2);
  // We grab the letters from the alphabet based on the amount of cards
  const signsLetters = alphabet.slice(0, amount);
  // We assign each letter a color
  const signs = signsLetters.map((sign, idx) => ({
    sign,
    color: colors[idx],
  }));
  const signPairs = [...signs, ...signs]; // We duplicate the signs
  const cards = signPairs.map(({ sign, color }, idx) => {
    // We map the pairs to an object with the id, sign, color and states
    const id = `${idx + 1}`;
    return { id, sign, color, isMatched: false, isFlipped: false };
  });
  return shuffleArray(cards); // We return a shuffled array of cards
};

// UPDATE FUNCTIONS =================================================
const unflipAllCards = (cards) =>
  cards.map((card) => ({
    // We map over all the cards
    ...card,
    isFlipped: false, // And reset the isFlipped property to false
  }));

export const updateCardState = (clickedIdx, stateCards) => {
  // First we grab alle the flipped cards that are not already matched
  const cardsFlipped = stateCards.filter(
    (card) => !card.isMatched && card.isFlipped
  );
  // If there is already a flipped card (before our clicked card)
  if (cardsFlipped.length === 1) {
    // We find it's index
    const otherCardFlippedIdx = stateCards.findIndex((card) => card.isFlipped);
    // We compare if the two cards have the same sign
    if (stateCards[otherCardFlippedIdx].sign === stateCards[clickedIdx].sign) {
      // If they do, we mark them as matched
      stateCards[otherCardFlippedIdx].isMatched = true;
      stateCards[clickedIdx].isMatched = true;
    } else {
      // If they don't, we just flip the second one
      stateCards[clickedIdx].isFlipped = true;
    }
  } else {
    // If there are no unflipped cards or if there are already two flipped cards
    stateCards = unflipAllCards(stateCards); // We unflip all the cards
    stateCards[clickedIdx].isFlipped = true; // And we flip the clicked card
  }
  return stateCards; // Then return all the cards with their new state
};
