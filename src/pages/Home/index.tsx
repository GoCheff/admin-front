import { useRouteLoaderData } from "react-router-dom";

import { Button, Table } from "../../ui/layouts";

import { headers } from "./data";

function HomePage(): JSX.Element {
  const { cheffs } = useRouteLoaderData("data") as {
    cheffs: { id: number; name: string; foodType: string }[];
  };

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

  return <Table headers={headers} data={data} />;
}

export { HomePage };
