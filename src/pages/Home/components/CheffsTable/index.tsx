import { useContext, useState } from "react";

import { toast } from "../../../../libs";

import { UserContext } from "../../../../context";

import { services } from "../../../../services";

import { Button, Table } from "../../../../ui/layouts";

import { CheffType, ResponseType } from "../../../../entities";

import { headers } from "../../data";

import { S } from "./styles";

interface CheffsTableProps {
  cheffs: CheffType[] | null;
  loading?: boolean;
  setNeedRetry: (value: boolean) => void;
}

function CheffsTable({ cheffs, loading, setNeedRetry }: CheffsTableProps) {
  const { token } = useContext(UserContext);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  async function handleClick(type: "approve" | "refuse", id: number) {
    setLoadingAction(type);

    try {
      const { message } = await services.cheffs[type]({
        token,
        id,
      });

      setNeedRetry(true);
      toast.success(message);
    } catch (error) {
      const { message: errorMessage } = error as ResponseType<{}>;

      toast.error(errorMessage);
    }

    setLoadingAction(null);
  }

  const data = (cheffs || []).map((cheff) => ({
    ...cheff,
    _createdAt: new Date(cheff.createdAt).toLocaleDateString("pt-BR"),
    _options: cheff.registerStatus === "pending" && (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          size="small"
          theme="success"
          loading={loadingAction === "approve"}
          disabled={loadingAction !== null}
          onClick={() => handleClick("approve", cheff.id)}
        >
          Aprovar
        </Button>
        <Button
          size="small"
          theme="danger"
          loading={loadingAction === "refuse"}
          disabled={loadingAction !== null}
          onClick={() => handleClick("refuse", cheff.id)}
        >
          Reprovar
        </Button>
      </div>
    ),
  }));

  return (
    <S.C.Section>
      <Table headers={headers} data={data} loading={loading} />
    </S.C.Section>
  );
}

export { CheffsTable };
