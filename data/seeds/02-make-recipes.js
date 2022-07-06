const recipes = [
  { recipe_name: 'Brocoli Pesto Pasta' },
  { recipe_name: 'Lemon Chicken' },
  { recipe_name: 'Salmon en Papillote' },
];

const ingredients = [
  { ingredient_name: 'Broccoli', ingredient_unit: 'lbs' },
  { ingredient_name: 'Pesto', ingredient_unit: 'lbs' },
  { ingredient_name: 'Pasta', ingredient_unit: 'lbs' },
  { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
  { ingredient_name: 'Chicken', ingredient_unit: 'kilos' },
  { ingredient_name: 'Salmon', ingredient_unit: 'grams' },
];

const step_ingredients = [
  // Broccoli Pesto Pasta
  { step_id: 2, ingredient_id: 1, quantity: 1 },
  { step_id: 3, ingredient_id: 2, quantity: 1.5 },
  { step_id: 3, ingredient_id: 3, quantity: 2 },
  // Lemon Chicken
  { step_id: 5, ingredient_id: 4, quantity: 1 },
  { step_id: 5, ingredient_id: 5, quantity: 0.4 },
  // Salmon en Papillote
  { step_id: 7, ingredient_id: 6, quantity: 1 },
];

const steps = [
  // Broccoli Pesto Pasta
  { step_name: 'Heat pan', step_order: 1, recipe_id: 1 },
  { step_name: 'Add broccoli', step_order: 2, recipe_id: 1 },
  { step_name: 'Add pesto mixed with pasta', step_order: 3, recipe_id: 1 },
  // Lemon Chicken
  { step_name: 'Heat oven', step_order: 1, recipe_id: 2 },
  { step_name: 'Put chicken and lemon in oven', step_order: 2, recipe_id: 2 },
  { step_name: 'Put in oven at 500 degrees', step_order: 3, recipe_id: 2 },
  // Salmon en Papilote
  {
    step_name: 'Fish a salmon in hte Bidasoa river',
    step_order: 1,
    recipe_id: 3,
  },
  { step_name: 'Put chicken and lemon in oven', step_order: 2, recipe_id: 3 },
  { step_name: 'Put in oven at 500 degrees', step_order: 3, recipe_id: 3 },
];

exports.seed = async function (knex) {
  await knex('recipes').insert(recipes);
  await knex('ingredients').insert(ingredients);
  await knex('steps').insert(steps);
  await knex('step_ingredients').insert(step_ingredients);
};
