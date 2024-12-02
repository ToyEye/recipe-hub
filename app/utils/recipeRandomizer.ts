import { TRecipes } from "~/types/globalTypes";

export const getRandomRecipes = (recipes: TRecipes): TRecipes => {
  const randomElements: TRecipes = [];

  while (randomElements.length < 3) {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    if (!randomElements.some((recipe) => recipe.id === randomRecipe.id)) {
      randomElements.push(randomRecipe);
    }
  }

  return randomElements;
};
