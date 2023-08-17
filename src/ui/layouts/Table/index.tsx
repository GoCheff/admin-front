import { useState } from "react";

import { S } from "./styles";
import { Pagination } from "./components/Pagination";

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
        <S.C.TBody>
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
          {currentData.length === 0 && (
            <S.C.Tr $body>
              <S.C.Td $empty colSpan={headers.length}>
                Nenhum registro encontrado
              </S.C.Td>
            </S.C.Tr>
          )}
        </S.C.TBody>
      </S.C.Table>

      {needPagination && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          maxPageButtons={maxPageButtons}
        />
      )}
    </S.Container>
  );
}

export { Table };
