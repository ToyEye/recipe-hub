import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Hero } from "~/components/Hero";
import { RandomRecipes } from "~/components/RandomRecipes";
import { Statistics } from "~/components/Statistics";
import prisma from "~/db.server";
import { getRandomRecipes } from "~/utils/recipeRandomizer";

export const meta: MetaFunction = () => {
  return [
    { title: "Recipes Hub" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const recipes = await prisma.recipe.findMany({});

  const randomRecipes = getRandomRecipes(recipes);

  return randomRecipes;
};

export default function Home() {
  const recipes = useLoaderData<typeof loader>();

  return (
    <div>
      <Hero />
      <Statistics />
      <RandomRecipes recipes={recipes} />
    </div>
  );
}
