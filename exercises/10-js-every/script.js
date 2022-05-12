const people = [
  {
    name: "Hans",
    diet: "vegetarian",
  },
  {
    name: "Paul",
    diet: "vegetarian",
  },
  {
    name: "Karla",
    diet: "vegetarian",
  },
  {
    name: "Sarah",
    diet: "vegan",
  },
  {
    name: "Gustav",
    diet: "vegan",
  },
  {
    name: "Jonas",
    diet: "vegan",
  },
  {
    name: "Linus",
    diet: "freegan",
  },
  {
    name: "Zinan",
    diet: "freegan",
  },
  {
    name: "Philipp",
    diet: "freegan",
  },
];

const wantedDiet = "vegan";
const isFromWantedDiet = ({ diet }) => diet === wantedDiet;
// Comment this line out to test with the code below instead
const allAreFromWantedDiet = people.every(isFromWantedDiet);

// Uncomment this line to make sure this works when nobody of the diet are there
// const onlyDiet = people.filter(({ diet }) => diet === wantedDiet);
// const allAreFromWantedDiet = onlyDiet.every(isFromWantedDiet);

console.log(
  `${allAreFromWantedDiet ? "Alle" : "Nicht alle"} Leute sind ${wantedDiet}`
);
