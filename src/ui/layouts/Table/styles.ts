import styled from "styled-components";

import tw from "twin.macro";

const Container = styled.div``;

const Table = styled.table`
  ${tw`w-full divide-y divide-quaternary-200`}
`;

const THead = styled.thead`
  ${tw`bg-primary-200`}
`;

interface TrProps {
  $body?: boolean;
}

const Tr = styled.tr<TrProps>`
  ${({ $body }) => ($body ? tw`bg-white hover:bg-primary-50` : tw``)}
`;

const Th = styled.th`
  ${tw`px-6 py-3 text-xs font-bold text-left text-quaternary uppercase`}
`;

const TBody = styled.tbody`
  ${tw`divide-y divide-quaternary-200`}
`;

const Td = styled.td`
  ${tw`px-6 py-4 text-sm text-quaternary truncate`}
`;

const Pagination = styled.div`
  ${tw`my-4 flex justify-center`}
`;

const Previous = styled.button`
  ${tw`mr-1 px-3 py-2.5 text-quaternary font-bold rounded disabled:text-quaternary-200 text-xs uppercase`}
`;

interface NumberProps {
  $active?: boolean;
}

const Number = styled.button<NumberProps>`
  ${tw`px-4 py-2.5 mx-1 text-quaternary rounded-md font-bold text-sm`}
  ${({ $active }) => ($active ? tw`bg-primary text-white` : tw``)}
`;

const Next = styled.button`
  ${tw`ml-1 px-3 py-2.5 text-quaternary font-bold rounded disabled:text-quaternary-200 text-xs uppercase`}
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
