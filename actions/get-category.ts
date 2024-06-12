import { Category } from "../type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return await res.json();
};
