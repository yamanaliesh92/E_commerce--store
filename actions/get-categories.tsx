import { Category } from "../type";

const URL = `${process.env.NEXT_PUBLIC_API_UR}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  return res.json();
};
