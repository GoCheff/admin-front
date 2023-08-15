import { useState } from "react";

import { getPageNumbers } from "./utils";

import { S } from "./styles";

interface TableProps {
  headers: { key: string; label: string }[];
  data: { [key: string]: any }[];
  itemsPerPage?: number;
  maxPageButtons?: number;
  columnWidths?: string[];
}

function Table({
  headers,
  data,
  itemsPerPage = 5,
  maxPageButtons = 3,
  columnWidths = headers.map(() => 100 / headers.length + "%"),
}: TableProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const needPagination = totalPages > 1;

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
  }

  return (
    <S.Container>
      <S.C.Table>
        <S.C.THead>
          <S.C.Tr>
            {headers.map((header) => (
              <S.C.Th key={header.key}>{header.label}</S.C.Th>
            ))}
          </S.C.Tr>
        </S.C.THead>
        <S.C.TBody className="divide-y divide-gray-200">
          {currentData.map((row) => (
            <S.C.Tr key={row.id} $body>
              {headers.map((header) => (
                <S.C.Td
                  key={header.key}
                  style={{
                    width: columnWidths[headers.indexOf(header)],
                    maxWidth: "1px",
                  }}
                >
                  {row[header.key]}
                </S.C.Td>
              ))}
            </S.C.Tr>
          ))}
        </S.C.TBody>
      </S.C.Table>

      {needPagination && (
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
      )}
    </S.Container>
  );
}

export { Table };
