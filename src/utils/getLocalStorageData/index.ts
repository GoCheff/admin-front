import { env } from "../../data";

function getLocalStorageData(key: string): string | null {
  return localStorage.getItem(`${env.standard.BASE_KEY}-${key}`);
}

export { getLocalStorageData };
