import { useCallback, useEffect, useState } from "react";
import { env } from "../data";

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => T] {
  const _key = `${env.standard.BASE_KEY}-${key}`;

  function parseJSON(value: string | null): T {
    try {
      return JSON.parse(value ?? "");
    } catch {
      console.log("parsing error on", { value });
      return initialValue;
    }
  }

  const readValue = useCallback((): T => {
    try {
      const item = localStorage.getItem(_key);
      return item && typeof parseJSON(item) === typeof initialValue
        ? parseJSON(item)
        : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${_key}”:`, error);
      return initialValue;
    }
  }, [initialValue, _key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  function setValue(value: T): T {
    try {
      localStorage.setItem(_key, JSON.stringify(value));
      setStoredValue(value);

      window.dispatchEvent(new Event("local-storage"));
      return value;
    } catch (error) {
      console.warn(`Error setting localStorage key “${_key}”:`, error);
      return initialValue;
    }
  }

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if (
        (event as StorageEvent)?.key &&
        (event as StorageEvent).key !== _key
      ) {
        return;
      }

      if (
        !(event as StorageEvent)?.newValue &&
        storedValue &&
        event.type === "storage"
      ) {
        switch (typeof initialValue) {
          case "string":
            // @ts-ignore
            setValue("");
            break;
          case "number":
            // @ts-ignore
            setValue(0);
            break;
          case "boolean":
            // @ts-ignore
            setValue(false);
            break;
          case "object":
            // @ts-ignore
            setValue({});
            break;
        }
        return;
      }

      setStoredValue(readValue());
    },
    [_key, readValue]
  );

  useEffect(() => {
    setValue(readValue());

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);
  }, []);

  return [storedValue, setValue];
}

export { useLocalStorage };
