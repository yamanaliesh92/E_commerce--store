import { Category } from "../type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

console.log("+++", URL);

export const getBillboard = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return await res.json();
};
