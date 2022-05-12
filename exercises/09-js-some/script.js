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
const someAreFromWantedDiet = people.some(isFromWantedDiet);

// Uncomment this line to make sure this works when nobody of the diet are there
// const onlyOthers = people.filter(({ diet }) => diet !== wantedDiet);
// const someAreFromWantedDiet = onlyOthers.some(isFromWantedDiet);

console.log(
  `Es gibt ${
    someAreFromWantedDiet ? "manche" : "keine"
  } Leute, die ${wantedDiet} sind`
);
