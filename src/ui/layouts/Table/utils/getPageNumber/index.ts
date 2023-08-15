interface GetPageNumbersProps {
  currentPage: number;
  maxPageButtons: number;
  totalPages: number;
}

function getPageNumbers({
  currentPage,
  maxPageButtons,
  totalPages,
}: GetPageNumbersProps): number[] {
  const startPageIndex = Math.max(currentPage - 1, 0);
  const endPageIndex = Math.min(
    startPageIndex + maxPageButtons - 1,
    totalPages - 1
  );

  return Array.from(
    { length: endPageIndex - startPageIndex + 1 },
    (_, i) => startPageIndex + i
  );
}

export { getPageNumbers };
