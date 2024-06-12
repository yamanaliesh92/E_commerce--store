import React from "react";
import { Product } from "../../type";
import NoResult from "./ui/no-result";

interface ProductListProps {
  title: string;
  items: Product[];
}

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}
    </div>
  );
}
