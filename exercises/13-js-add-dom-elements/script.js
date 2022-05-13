{
  const people = [
    {
      name: "Hans",
      diet: "vegetarian",
    },
    {
      name: "Fritz",
      diet: "vegetarian",
    },
    {
      name: "Hilda",
      diet: "freegan",
    },
    {
      name: "Enrico",
      diet: "vegan",
    },
    {
      name: "Marta",
      diet: "freegan",
    },
    {
      name: "Ilir",
      diet: "vegan",
    },
    {
      name: "Ruth",
      diet: "freegan",
    },
    {
      name: "Salome",
      diet: "vegan",
    },
    {
      name: "Jahia",
      diet: "vegetarian",
    },
    {
      name: "Anick",
      diet: "vegetarian",
    },
    {
      name: "Saskia",
      diet: "freegan",
    },
    {
      name: "Jerome",
      diet: "vegan",
    },
  ];

  const sortByDiet = (a, b) => (b.diet < a.diet ? -1 : b.diet > a.diet ? 1 : 0);

  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  const sortedPeople = people.sort(sortByDiet);
  sortedPeople.forEach((jsElement) => {
    const newDomElement = document.createElement("li");
    newDomElement.innerHTML = jsElement.name;
    newDomElement.classList.add(jsElement.diet);
    ul.appendChild(newDomElement);
  });
}
