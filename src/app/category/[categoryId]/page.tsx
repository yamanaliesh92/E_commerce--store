import Billboard from "@/components/billboard";
import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/no-result";
import React from "react";
import { getCategory } from "../../../../actions/get-category";
import { getColors } from "../../../../actions/get-colors";
import { getProducts } from "../../../../actions/get-products";
import { getSizes } from "../../../../actions/get-sizes";
import Filter from "./_components/fillter";
import MobileFilter from "./_components/mobile-fillter";

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
            <MobileFilter sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
