import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
import { getBillboard } from "../../../actions/get-billboard";
import { getProduct } from "../../../actions/get-products";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProduct();
  console.log("++++product", products);
  const billboard = await getBillboard("b5df6470-7e7b-4aa1-92b0-31396eb510ec");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex  flex-col   gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList items={products} title="Featured Products" />
      </div>
    </Container>
  );
}
