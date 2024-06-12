import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
import { getProduct } from "../../../../actions/get-product";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>{product.name}</div>
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0">Info</div>
          </div>
          <hr className="my-10" />
        </div>
      </Container>
    </div>
  );
}
