export interface IRecipe {
  id: number;
  name: string | null;
  ingredients: string[];
  instructions: string[];
  country: string;
  description: string;
  img: string | null;
  // vote_average?: number;
}

export type TRecipes = IRecipe[];

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
