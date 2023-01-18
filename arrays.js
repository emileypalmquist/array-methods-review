// .forEach
// .map
// .find
// .filter

const bananaRecipes = [
  { name: "Banana Bread", time: 50 },
  { name: "Banana Split", time: 10 },
  { name: "Banana Muffin", time: 30 },
];

bananaRecipes.forEach((recipe) => console.log(recipe.name));
const foundRecipe = bananaRecipes.find((recipe) => recipe.time <= 30);
console.log(foundRecipe);

const foundRecipes = bananaRecipes.filter((recipe) => recipe.time <= 30);
// console.log(foundRecipes);
const filteredRecipesNames = foundRecipes.map((recipe) => recipe.names);
// console.log(filteredRecipesNames);
