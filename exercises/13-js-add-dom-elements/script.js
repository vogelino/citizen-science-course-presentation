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

  const propSorter = (prop) => (a, b) =>
    b[prop] < a[prop] ? -1 : b[prop] > a[prop] ? 1 : 0;
  const sortByDiet = propSorter("diet");

  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  people.sort(sortByDiet).forEach((jsElement) => {
    const newDomElement = document.createElement("li");
    newDomElement.innerHTML = jsElement.name;
    newDomElement.classList.add(jsElement.diet);
    ul.appendChild(newDomElement);
  });
}
