const db = require('../../data/db-config');

async function getRecipes() {
  const recipeRows = await db('recipes as r');

  return recipeRows;
}

async function getRecipeById(recipe_id) {
  const recipeRows = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      's.step_id',
      's.step_order',
      's.step_name',
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
    )
    .where('r.recipe_id', recipe_id);

  // console.log('recipeRows:', recipeRows);

  const recipes = {
    recipe_id: recipeRows[0].recipe_id,
    recipe_name: recipeRows[0].recipe_name,
    steps: recipeRows.reduce((acc, row) => {
      if (!row.ingredient_id) {
        return acc.concat({
          step_id: row.step_id,
          step_order: row.step_order,
          step_name: row.step_name,
        });
      }

      if (
        row.ingredient_id &&
        !acc.find((step) => step.step_id === row.step_id)
      ) {
        return acc.concat({
          step_id: row.step_id,
          step_order: row.step_order,
          step_name: row.step_name,
          ingredients: [
            {
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.quantity,
            },
          ],
        });
      }

      const currentStep = acc.find((step) => step.step_id === row.step_id);
      currentStep.ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      });

      return acc;
    }, []),
  };

  return recipes;
}

module.exports = {
  getRecipes,
  getRecipeById,
};
