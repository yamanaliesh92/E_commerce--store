import { Product } from "../type";

const qs = require("query-string");

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getBillboard = async (query: Query): Promise<Product> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(URL);

  return await res.json();
};
