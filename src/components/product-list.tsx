import React from "react";
import { Product } from "../../type";

interface ProductListProps {
  title: string;
  items: Product[];
}

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
    </div>
  );
}
