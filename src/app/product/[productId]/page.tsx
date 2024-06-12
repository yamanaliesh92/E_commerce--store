import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
import { getProduct } from "../../../../actions/get-product";
import { getProducts } from "../../../../actions/get-products";

export const revalidate = 0;

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  const suggestionProduct = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* <div>{product.name}</div> */}
            <Gallery images={product.Images} />
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList items={suggestionProduct} title="Related items" />
        </div>
      </Container>
    </div>
  );
}
