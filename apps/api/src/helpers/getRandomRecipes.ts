import { getRecipesRequest } from '../modules/recipes/domain/usecases/gerRecipes.usecase';

export const getRandomRecipes = async (
  recipesPromise: Promise<getRecipesRequest>
) => {
  const { recipes } = await recipesPromise;

  const randomElements = [];

  while (randomElements.length < 3) {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    if (!randomElements.some((recipe) => recipe.id === randomRecipe.id)) {
      randomElements.push(randomRecipe);
    }
  }

  return { recipes: randomElements };
};
