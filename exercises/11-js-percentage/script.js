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

const diets = ["vegan", "vegetarian", "freegan"];

const numberToFixed = (num) => num.toFixed(2);

const calcPercentage = (part, total) => (part * 100) / total;

const dietToObjectWithPercentage = (diet) => {
  const peopleWithDiet = people.filter((person) => person.diet === diet);
  const numOfPeopleWithDiet = peopleWithDiet.length;
  return {
    name: diet,
    percentage: numberToFixed(
      calcPercentage(numOfPeopleWithDiet, people.length)
    ),
  };
};

const dietsWithPercentage = diets.map(dietToObjectWithPercentage);

dietsWithPercentage.forEach(({ name, percentage }) => {
  console.log(`${percentage}% der Leute sind ${name}`);
});
