const db = require('../../data/db-config');

async function getRecipes() {
  const recipeRows = await db('recipes as r');

  return recipeRows;
}

async function getRecipeById(recipe_id) {
  const recipe = await db('recipes').where('recipe_id', recipe_id);

  return recipe;
}

module.exports = {
  getRecipes,
  getRecipeById,
};
