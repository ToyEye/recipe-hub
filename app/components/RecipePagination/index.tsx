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
    <div className=" mx-auto flex justify-center gap-2 mt-4 md:mt-6">
      {pagination.map((page, index) =>
        typeof page === "number" ? (
          <Link
            key={index}
            to={`?page=${page}`}
            className={page === currentPage ? "active" : ""}
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
