export interface IRecipe {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string[];
  vote_average: number;
  id: string;
}

export type TRecipes = [IRecipe];

export interface IRecipeStore extends IStatus {
  recipes: [IRecipe] | null;
}

export type TReview = {
  author: string;
  description: string;
  _id: string;
  owner?: string;
};

export interface IStatus {
  loading: boolean;
  error: null | string;
}

export type TUser = {
  name: string | null;
  email: string | null;
  id: string | null;
};
