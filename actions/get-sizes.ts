import { Size } from "../type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getCategories = async (): Promise<Size[]> => {
  const res = await fetch(URL, { cache: "no-cache" });

  return await res.json();
};
