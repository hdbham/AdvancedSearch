const products = [
  {
    id: 1,
    name: "VeggiesLambEyes",
    ingredients: ["veggies", "lamb", "eyes"]
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
    name: "BeefLambRice",
    ingredients: ["beef", "lamb", "rice"]
  },
  {
    id: 6,
    name: "Beef-meal,Rice",
    ingredients: ["beef-meal", "rice"]
  },
  {
    id: 7,
    name: "ChickenRice",
    ingredients: ["chicken", "rice"]
  },
  {
    id: 8,
    name: "VeggiesLambRice",
    ingredients: ["veggies", "lamb", "rice"]
  },
];

const desiredIngredients = ["lamb", "rice"];

const excludedIngredients = ["beef", "chicken"];

const synonymMap = [{
  "beef": ["cow", "beef-meal", "beef-liver"],
  "chicken": ["chicken-meal", "chicken-liver"],
  "lamb": ["lamb-meal", "lamb-liver"]
}]

function hasIngredientOrSynonym(ingredient, synonymMap) {
  return synonymMap.some((synonyms) => {
    return Object.values(synonyms).flat().includes(ingredient);
  });
}

function filterByInclusions(products, desiredIngredients, synonymMap) {
  const inclusionsSet = new Set(desiredIngredients);

  return products.filter((product) => {
    return product.ingredients.some((ingredient) => {
      return inclusionsSet.has(ingredient) || hasIngredientOrSynonym(ingredient, synonymMap);
    });
  });
}

function filterByExclusions(products, excludedIngredients, synonymMap) {
  const exclusionsSet = new Set(excludedIngredients);

  return products.filter((product) => {
    return !product.ingredients.some((ingredient) => {
      return exclusionsSet.has(ingredient) || hasIngredientOrSynonym(ingredient, synonymMap);
    });
  });
}

const includedProducts = filterByInclusions(products, desiredIngredients, synonymMap);
const filteredProducts = filterByExclusions(includedProducts, excludedIngredients, synonymMap)

console.log(filteredProducts)
