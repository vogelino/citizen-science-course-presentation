{
  // GLOBAL VARIABLES =================================================
  const rootNode = document.getElementById("root");

  let stateCards = [];
  let domCards = [];

  // We create an array of capitalized letter strings
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const colors = [
    "#7FB069",
    "#D36135",
    "#E6AA68",
    "#4E3D42",
    "#037171",
    "#424C55",
    "#570000",
    "#BEA7E5",
    "#648DE5",
    "#06AED5",
    "#568EA3",
  ];

  // UTILITIES ========================================================
  // This gives us a random number between min and max
  const randomInRange = (min, max) => {
    const difference = max - min;
    return Math.random() * difference + min;
  };

  // This randomizes the order of the items in an array
  const shuffleArray = (arrayToShuffle) =>
    arrayToShuffle
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  // INITIALISATION FUNCTIONS =========================================
  const createStateCards = (cardsAmount) => {
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
  const createDomCards = (cards) => cards.map(createDomCard);

  // UPDATE FUNCTIONS =================================================
  const unflipAllCards = (cards) =>
    cards.map((card) => ({
      // We map over all the cards
      ...card,
      isFlipped: false, // And reset the isFlipped property to false
    }));

  const updateCardState = (clickedIdx) => {
    // First we grab alle the flipped cards that are not already matched
    const cardsFlipped = stateCards.filter(
      (card) => !card.isMatched && card.isFlipped
    );
    // If there is already a flipped card (before our clicked card)
    if (cardsFlipped.length === 1) {
      // We find it's index
      const otherCardFlippedIdx = stateCards.findIndex(
        (card) => card.isFlipped
      );
      // We compare if the two cards have the same sign
      if (
        stateCards[otherCardFlippedIdx].sign === stateCards[clickedIdx].sign
      ) {
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

  const updateDomCards = () => {
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

  // EXECUTION FUNCTIONS ==============================================
  stateCards = createStateCards(colors.length); // First create the state
  domCards = createDomCards(stateCards); // Then create the DOM based on the state
  domCards.forEach((domCard, idx) => {
    rootNode.appendChild(domCard); // Append each created DOM card to the DOM
    // When the dom card is clicked
    domCard.addEventListener("click", () => {
      stateCards = updateCardState(idx); // Update the state first
      domCards = updateDomCards(idx); // Then update the DOM based on the state
    });
  });
}
