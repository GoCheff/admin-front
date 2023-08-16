import { Dispatch, SetStateAction } from "react";

import { getPageNumbers } from "../../utils";

import { S } from "../../styles";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  maxPageButtons: number;
}

function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  maxPageButtons,
}: PaginationProps) {
  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  return (
    <S.Pagination>
      <S.Previous
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &larr;&nbsp;&nbsp;Anterior
      </S.Previous>
      {getPageNumbers({ currentPage, totalPages, maxPageButtons }).map(
        (page) => (
          <S.Number
            key={page}
            onClick={() => handlePageChange(page)}
            $active={currentPage === page}
          >
            {page + 1}
          </S.Number>
        )
      )}
      <S.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Próximo&nbsp;&nbsp;&rarr;
      </S.Next>
    </S.Pagination>
  );
}

export { Pagination };
