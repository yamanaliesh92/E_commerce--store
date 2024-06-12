import Container from "@/components/ui/container";
import React from "react";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>Gallary</div>
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0">Info</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
