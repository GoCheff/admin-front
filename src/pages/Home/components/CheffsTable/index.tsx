import { Button, Table } from "../../../../ui/layouts";

import { headers } from "../../data";

import { S } from "./styles";

interface CheffsTableProps {
  cheffs: { id: number; name: string; foodType: string }[];
}

function CheffsTable({ cheffs }: CheffsTableProps) {
  const data = cheffs.map((cheff) => ({
    id: cheff.id,
    name: cheff.name,
    foodType: cheff.foodType,
    _options: (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button size="small">Aprovar</Button>
        <Button size="small">Reprovar</Button>
      </div>
    ),
  }));

  return (
    <S.C.Section>
      <Table headers={headers} data={data} />
    </S.C.Section>
  );
}

export { CheffsTable };
