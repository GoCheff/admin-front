import { env } from "../../data";

function getLocalStorageData(
  key: string,
  type: string
): Object | string | null {
  const value = localStorage.getItem(`${env.standard.BASE_KEY}-${key}`);

  if (!value || typeof value !== type) return null;

  return JSON.parse(value);
}

export { getLocalStorageData };
