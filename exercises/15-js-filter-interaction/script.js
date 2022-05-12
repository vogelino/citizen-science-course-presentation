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

  const diets = ["vegan", "vegetarian", "freegan"];

  const createDomEl = (jsElement) => {
    const newDomElement = document.createElement("li");
    newDomElement.innerHTML = jsElement.name;
    return newDomElement;
  };

  const dietsMap = {};
  diets.forEach((diet) => {
    const peopleInDiet = people.filter((person) => person.diet === diet);
    const dietDomLiElements = peopleInDiet.map(createDomEl);
    const dietUl = document.createElement("ul");
    dietUl.classList.add(diet);
    dietDomLiElements.forEach((domEl) => {
      dietUl.appendChild(domEl);
    });
    dietsMap[diet] = dietUl;
  });

  let activeFilter = null; // Either null or a diet string

  const buttons = Array.from(document.querySelectorAll("button"));

  const styleButton = ({ activeFilter, button, diet }) => {
    if (activeFilter && activeFilter !== diet) {
      button.classList.add("inactive");
    } else {
      button.classList.remove("inactive");
    }
  };

  const styleUl = ({ activeFilter, ulEl, diet }) => {
    ulEl.classList.add("inactive");
    if (!activeFilter || activeFilter === diet) {
      ulEl.classList.remove("inactive");
    }
  };

  const onDietFilterClick = (evt) => {
    const dietClicked = evt.target.innerText.trim().toLowerCase();
    activeFilter = activeFilter === dietClicked ? null : dietClicked;
    Object.keys(dietsMap).forEach((diet) => {
      const ulEl = dietsMap[diet];
      styleUl({ activeFilter, ulEl, diet });
    });
    buttons.forEach((button) => {
      const diet = button.innerText.trim().toLowerCase();
      styleButton({ activeFilter, button, diet });
    });
  };

  Object.values(dietsMap).forEach((dietUl) => {
    document.body.appendChild(dietUl);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", onDietFilterClick);
  });
}
