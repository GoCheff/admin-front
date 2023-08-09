import { dotenv } from "./data";

class Env {
  public readonly standard: Record<string, any> = {};
  public readonly logical = {};

  constructor(private readonly dotenv: ImportMetaEnv) {
    for (const key in this.dotenv) {
      if (!key.startsWith("VITE_")) {
        continue;
      }

      const _key = key.replace(/^VITE_/, "");
      this.standard[_key] = this.dotenv[key];
    }

    this.logical = {};
  }
}

const env = new Env(dotenv);

export { env };
