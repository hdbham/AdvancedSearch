let data = [
  {
    id: 1,
    name: "VeggiesLambRice",
    ingredients: ["veggies", "lamb", "rice"]
  },
  {
    id: 2,
    name: "ChickenLambSoy",
    ingredients: ["chicken", "lamb", "soy"]
  },
  {
    id: 3,
    name: "ChickenCornRice",
    ingredients: ["chicken", "corn", "rice"]
  },
  {
    id: 4,
    name: "BeefCornRice",
    ingredients: ["beef", "corn", "rice"]
  },

  {
    id: 5,
    name: "CowCornRice",
    ingredients: ["cow", "corn", "rice"]
  },
  {
    id: 6,
    name: "BeefMealCornRice",
    ingredients: ["beef-meal", "corn", "rice"]
  },
  {
    id: 7,
    name: "BeefLiverCornRice",
    ingredients: ["beef-liver", "corn", "rice"]
  },
  {
    id: 8,
    name: "ChickenMealCornRice",
    ingredients: ["chicken-meal", "corn", "rice"]
  }
];

const exclusions = ["beef", "earthworms"];

const thesaurus = [{
    "beef": ["cow", "beef-meal", "beef-liver"],
    "chicken": ["chicken-meal", "chicken-liver"],
}]

const iterateExclusions = (exclusions) => {
  exclusions.forEach((exclusion) => {
    exclusionSynonyms(exclusion)
  });
};

const exclusionSynonyms = (exclusion) => {
    thesaurus.forEach((item) => {
        if (item[exclusion]) {
        item[exclusion].forEach((synonym) => {
            getExcludedObjects(synonym);
        });
        }
    });
    getExcludedObjects(exclusion);
}

const getExcludedObjects = (exclusion) => {
   data.forEach((item) => {
    if (item.ingredients.includes(exclusion)) {
      removeExclusedObjects(item.id);
    }
  });
};

const removeExclusedObjects = (id) => {
  data = data.filter((obj) => obj.id !== id);
};

iterateExclusions(exclusions);

console.log(data);