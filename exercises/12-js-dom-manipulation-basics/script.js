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

  const listElements = Array.from(document.getElementsByTagName("li"));

  const title = document.getElementsByTagName("h1")[0];
  title.innerText = `Our ${listElements.length} participants`;

  listElements.forEach((domElement) => {
    const elementName = domElement.innerText.trim();
    const jsElement = people.find(({ name }) => name === elementName);
    switch (jsElement.diet) {
      case "vegan":
        domElement.classList.add("vegan");
        break;
      case "vegetarian":
        domElement.classList.add("vegetarian");
        break;
      case "freegan":
        domElement.classList.add("freegan");
        break;
    }
  });
}
