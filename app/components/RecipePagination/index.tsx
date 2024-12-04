import { Link } from "@remix-run/react";
import { FC } from "react";

import { getPagination } from "~/utils/getPagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const RecipePagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  const pagination = getPagination(currentPage, totalPages);

  return (
    <div className=" mx-auto flex justify-center gap-3 mt-4 md:mt-8">
      {pagination.map((page, index) =>
        typeof page === "number" ? (
          <Link
            key={index}
            to={`?page=${page}`}
            className={`w-6 h-6 flex justify-center items-center border border-solid rounded-full border-graphite transition-all duration-1000 ease-custom-ease hover:bg-graphite hover:text-off-white  ${
              page === currentPage && "scale-150 "
            } `}
          >
            {page}
          </Link>
        ) : (
          <span key={index} style={{ margin: "0 5px" }}>
            {" "}
            {page}
          </span>
        )
      )}
    </div>
  );
};
