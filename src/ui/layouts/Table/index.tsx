import { useState } from "react";
import { S } from "./styles";

interface TableProps {
  headers: string[];
  data: { [key: string]: any }[];
  itemsPerPage?: number;
  maxPageButtons?: number;
  columnWidths?: string[];
}

function Table({
  headers,
  data,
  itemsPerPage = 1,
  maxPageButtons = 3,
  columnWidths = headers.map(() => 100 / headers.length + "%"),
}: TableProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  function getPageNumbers() {
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

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  return (
    <S.Container>
      <S.C.Table>
        <S.C.THead>
          <S.C.Tr>
            {headers.map((header) => (
              <S.C.Th key={header}>{header}</S.C.Th>
            ))}
          </S.C.Tr>
        </S.C.THead>
        <S.C.TBody className="divide-y divide-gray-200">
          {currentData.map((row) => (
            <S.C.Tr key={row.id} $body>
              {headers.map((header) => (
                <S.C.Td
                  key={header}
                  style={{
                    width: columnWidths[headers.indexOf(header)],
                    maxWidth: "1px",
                  }}
                >
                  {row[header]}
                </S.C.Td>
              ))}
            </S.C.Tr>
          ))}
        </S.C.TBody>
      </S.C.Table>

      <S.Pagination>
        <S.Previous
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &larr;&nbsp;&nbsp;Anterior
        </S.Previous>
        {getPageNumbers().map((page) => (
          <S.Number
            key={page}
            onClick={() => handlePageChange(page)}
            $active={currentPage === page}
          >
            {page + 1}
          </S.Number>
        ))}
        <S.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className=""
        >
          Próximo&nbsp;&nbsp;&rarr;
        </S.Next>
      </S.Pagination>
    </S.Container>
  );
}

export { Table };
