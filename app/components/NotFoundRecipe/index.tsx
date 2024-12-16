export const NotFoundRecipe = ({
  recipeName,
  country,
}: {
  recipeName: string;
  country: string;
}) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-xl">
          Recipe{" "}
          <span className="font-bold capitalize underline">
            {recipeName.toLowerCase()}
          </span>{" "}
          {country && <span>in country {country} </span>}
          is not found.
        </h2>
      </div>
    </section>
  );
};
