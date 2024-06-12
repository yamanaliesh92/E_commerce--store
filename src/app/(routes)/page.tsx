import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";
import { getBillboard } from "../../../actions/get-billboard";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("b5df6470-7e7b-4aa1-92b0-31396eb510ec");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
