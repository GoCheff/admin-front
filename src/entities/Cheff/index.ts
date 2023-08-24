type CheffType = {
  id: number;
  name: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other" | "preferNotToSay";
  mainCuisine: string;
  city: string;
  registerStatus: "pending" | "approved" | "rejected";
  registerReason: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export type { CheffType };
