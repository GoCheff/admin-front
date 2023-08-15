import styled from "styled-components";

import tw from "twin.macro";

const Container = styled.div``;

const Table = styled.table`
  ${tw`w-full divide-y divide-gray-200`}
`;

const THead = styled.thead`
  ${tw`bg-gray-50`}
`;

interface TrProps {
  $body?: boolean;
}

const Tr = styled.tr<TrProps>`
  ${({ $body }) => ($body ? tw`bg-white hover:bg-gray-50` : tw``)}
`;

const Th = styled.th`
  ${tw`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase`}
`;

const TBody = styled.tbody`
  ${tw`divide-y divide-gray-200`}
`;

const Td = styled.td`
  ${tw`px-6 py-4 text-sm text-gray-500 truncate`}
`;

const Pagination = styled.div`
  ${tw`my-4 flex justify-center`}
`;

const Previous = styled.button`
  ${tw`mr-1 px-3 py-2.5 text-black font-bold rounded disabled:text-gray-400 text-xs uppercase`}
`;

interface NumberProps {
  $active?: boolean;
}

const Number = styled.button<NumberProps>`
  ${tw`px-4 py-2.5 mx-1 text-black rounded-md font-bold text-sm`}
  ${({ $active }) => ($active ? tw`bg-primary text-white` : tw``)}
`;

const Next = styled.button`
  ${tw`ml-1 px-3 py-2.5 text-black font-bold rounded disabled:text-gray-400 text-xs uppercase`}
`;

const S = {
  C: { Table, THead, Tr, Th, TBody, Td },
  Container,
  Pagination,
  Previous,
  Number,
  Next,
};

export { S };
