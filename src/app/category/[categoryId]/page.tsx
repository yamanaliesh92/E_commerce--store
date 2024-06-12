import React from "react";
import { getProducts } from "../../../../actions/get-products";
import { getSizes } from "../../../../actions/get-sizes";

interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default async function CategoryPage({
  searchParams,
  params,
}: CategoryPageProps) {
  const products = await getProducts({ categoryId: params.categoryId });
  const sizes = await getSizes();
  return <div></div>;
}
