import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";
import { getCategory } from "../../../../actions/get-category";
import { getColors } from "../../../../actions/get-colors";
import { getProducts } from "../../../../actions/get-products";
import { getSizes } from "../../../../actions/get-sizes";
import Filter from "./_components/fillter";

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
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
