// We import functions from other files
// See: https://javascript.info/import-export
import { createDomCards, updateDomCards } from "./dom.js";
import { createStateCards, updateCardState } from "./state.js";

// GLOBAL VARIABLES =================================================
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

// EXECUTION FUNCTIONS ==============================================
let stateCards = createStateCards(colors.length, alphabet, colors); // First create the state
let domCards = createDomCards(stateCards); // Then create the DOM based on the state
console.log(domCards);
domCards.forEach((domCard, idx) => {
  const rootNode = document.getElementById("root"); // Grab the root node
  rootNode.appendChild(domCard); // Append each created DOM card to the root node
  // When the dom card is clicked
  domCard.addEventListener("click", () => {
    stateCards = updateCardState(idx, stateCards); // Update the state first
    domCards = updateDomCards(domCards, stateCards); // Then update the DOM based on the state
  });
});
