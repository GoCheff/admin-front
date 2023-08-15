import { Table } from "../../ui/layouts/Table";

function HomePage(): JSX.Element {
  return (
    <Table
      headers={["id", "name", "email"]}
      data={[
        { id: 1, name: "John Doe", email: "lorem@email.com" },
        { id: 2, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 23, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 2435, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 254354, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 2534543, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 5435432, name: "Jane Doe", email: "lorem2@email.com" },
        { id: 25434, name: "Jane Doe", email: "lorem2@email.com" },
      ]}
    />
  );
}

export { HomePage };
