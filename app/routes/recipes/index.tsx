import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

import { RecipeHero } from "~/components/RecipeHero";
import { RecipesCollection } from "~/components/RecipesCollection";
import prisma from "~/db.server";
import { useAppDispatch } from "~/hooks/useRedux";
import { getRecipes } from "~/store/recipes/slice";

export const meta: MetaFunction = () => {
  return [
    { title: "Recipe Collection" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const [recipes, totalRecipes] = await Promise.all([
    prisma.recipe.findMany({
      skip,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.recipe.count(),
  ]);

  return json({
    recipes,
    totalRecipes,
    currentPage: page,
    totalPages: Math.ceil(totalRecipes / pageSize),
  });
};

export default function Recipes() {
  const { recipes, currentPage, totalPages, totalRecipes } =
    useLoaderData<typeof loader>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes({ recipes, currentPage, totalPages, totalRecipes }));
  }, [currentPage, dispatch, recipes, totalPages, totalRecipes]);

  return (
    <div>
      <RecipeHero />
      <RecipesCollection recipes={recipes} />
    </div>
  );
}
