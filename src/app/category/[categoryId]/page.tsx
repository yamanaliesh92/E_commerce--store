import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";
import { getCategory } from "../../../../actions/get-category";
import { getColors } from "../../../../actions/get-colors";
import { getProducts } from "../../../../actions/get-products";
import { getSizes } from "../../../../actions/get-sizes";

interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

export default async function CategoryPage({
  searchParams,
  params,
}: CategoryPageProps) {
  const products = await getProducts({ categoryId: params.categoryId });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
      </Container>
    </div>
  );
}
