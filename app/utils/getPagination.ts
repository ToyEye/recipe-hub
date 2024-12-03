export const getPagination = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const pagination: (number | string)[] = [];

  if (totalPages <= 1) {
    return pagination;
  }

  pagination.push(1);

  if (currentPage > 2) {
    pagination.push("...");
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    pagination.push(i);
  }

  if (currentPage < totalPages - 1) {
    pagination.push("...");
  }

  if (totalPages > 1) {
    pagination.push(totalPages);
  }

  return pagination;
};
