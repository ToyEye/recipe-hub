import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

import { Filter } from "~/components/Filter";
import { NotFoundRecipe } from "~/components/NotFoundRecipe";
import { RecipeHero } from "~/components/RecipeHero";
import { RecipesCollection } from "~/components/RecipesCollection";
import prisma from "~/db.server";
import { useAppDispatch } from "~/hooks/useRedux";
import { getCountries } from "~/store/countries/slice";
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

  const country = url.searchParams.get("country") || "";
  const searchQuery = url.searchParams.get("search") || "";

  const where = {
    AND: [
      country ? { country } : {},
      searchQuery
        ? { name: { contains: searchQuery, mode: "insensitive" as const } }
        : {},
    ],
  };

  const [recipes, totalRecipes] = await Promise.all([
    prisma.recipe.findMany({
      skip,
      take: pageSize,
      where,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.recipe.count({ where }),
  ]);

  const countries = await prisma.country.findMany({});

  return json({
    recipes,
    totalRecipes,
    currentPage: page,
    totalPages: Math.ceil(totalRecipes / pageSize),
    countries,
    country,
    searchQuery,
  });
};

export default function Recipes() {
  const {
    recipes,
    currentPage,
    totalPages,
    totalRecipes,
    countries,
    searchQuery,
    country,
  } = useLoaderData<typeof loader>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipes({ recipes, currentPage, totalPages, totalRecipes }));
    dispatch(getCountries(countries));
  }, [countries, currentPage, dispatch, recipes, totalPages, totalRecipes]);

  return (
    <div>
      <RecipeHero />
      <Filter />
      {recipes.length === 0 ? (
        <NotFoundRecipe recipeName={searchQuery} country={country} />
      ) : (
        <RecipesCollection recipes={recipes} />
      )}
    </div>
  );
}
