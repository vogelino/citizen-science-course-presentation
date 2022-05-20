import { createDomCards, updateDomCards } from "./dom.js";
import { createStateCards, updateCardState } from "./state.js";

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

// EXECUTION FUNCTIONS ==============================================
stateCards = createStateCards(colors.length, alphabet, colors); // First create the state
domCards = createDomCards(stateCards); // Then create the DOM based on the state
domCards.forEach((domCard, idx) => {
  rootNode.appendChild(domCard); // Append each created DOM card to the DOM
  // When the dom card is clicked
  domCard.addEventListener("click", () => {
    stateCards = updateCardState(idx, stateCards); // Update the state first
    domCards = updateDomCards(domCards, stateCards); // Then update the DOM based on the state
  });
});
