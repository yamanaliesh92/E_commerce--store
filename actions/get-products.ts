import { Product } from "../type";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (query?: Query): Promise<Product[]> => {
  const res = await fetch(URL);

  return await res.json();
};
