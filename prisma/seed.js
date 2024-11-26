import { PrismaClient } from "@prisma/client";
import recipeData from "./seed";

const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.createMany({ data: recipeData });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
