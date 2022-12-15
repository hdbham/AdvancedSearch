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
  }
];

const exclusions = ["beef", "earthworms"];

const thesaurus = [{
    "beef": ["cow", "beef-meal", "beef-liver"],
}]

const iterateExclusions = (exclusions) => {
  exclusions.forEach((exclusion) => {
    exclusionSynonyms(exclusion)
  });
};

//TODO expand exclusions to include synonyms 
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