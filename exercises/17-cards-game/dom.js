import { randomInRange } from "./utils.js";

// We become the state
const createDomCard = ({ id, sign, color }) => {
  const card = document.createElement("li"); // And create the DOM element
  card.classList.add("card"); // Set the class card to it
  // We use the state to set properties
  card.setAttribute("id", `card-${id}`); // Such as the ID

  card.style.setProperty("--color", color); // Or CSS variables for styling
  card.style.setProperty("--id", `'${sign}'`);
  const rShift = randomInRange(-4, 4); // We create random shifts
  const xShift = randomInRange(-4, 4);
  const yShift = randomInRange(-4, 4);
  card.style.setProperty(
    "transform",
    [
      // And transform the position and rotation of each card slightly
      `translate3d(${xShift}px, ${yShift}px, 0)`,
      `rotate3d(0, 0, ${Math.random()}, ${rShift}deg)`,
      `scale(1)`,
    ].join(" ")
  );

  return card; // We return the card
};

// We map each card in the state, to a newly created DOM element
export const createDomCards = (cards) => cards.map(createDomCard);

// UPDATE FUNCTIONS =================================================
export const updateCardState = (clickedIdx) => {
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

export const updateDomCards = (domCards, stateCards) => {
  return domCards.map((domCard, idx) => {
    const { isFlipped, isMatched } = stateCards[idx]; // Grab the updated state
    if (isFlipped) {
      // Based on the isFlipped state...
      domCard.classList.add("flipped"); // ...add the flipped class
    } else {
      domCard.classList.remove("flipped"); // ...remove the flipped class
    }
    if (isMatched) {
      // Same here for the matched class
      domCard.classList.add("matched");
    } else {
      domCard.classList.remove("matched");
    }
    return domCard; // Return the updated domCard
  });
};
