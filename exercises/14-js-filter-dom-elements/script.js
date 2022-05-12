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

  const title = document.getElementsByTagName("h1")[0];
  title.innerText = `Our ${people.length} participants`;

  const getDietIdentifier = (prop, val) => (person) => person[prop] === val;

  const diets = ["vegan", "vegetarian", "freegan"];

  const createDomEl = (jsElement) => {
    const newDomElement = document.createElement("li");
    newDomElement.innerHTML = jsElement.name;
    newDomElement.classList.add(jsElement.diet);
    return newDomElement;
  };

  diets.forEach((diet) => {
    const peopleInDiet = people.filter(getDietIdentifier("diet", diet));
    const dietDomLiElements = peopleInDiet.map(createDomEl);
    const dietUl = document.createElement("ul");
    dietDomLiElements.forEach((domEl) => {
      dietUl.appendChild(domEl);
    });
    document.body.appendChild(dietUl);
  }, {});
}
