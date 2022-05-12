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

const isWantedPerson = ({ name }) => name === "Karla";
const person = people.find(isWantedPerson);
const indexOfPerson = people.findIndex(isWantedPerson);
const numInList = indexOfPerson + 1;

console.log(
  `${person.name} ist ${person.diet} unst ist die ${numInList}te Person in der Liste`
);
