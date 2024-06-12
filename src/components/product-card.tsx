"use client";
import Image from "next/image";
import React from "react";
import { Product } from "../../type";

interface ProductCardProps {
  data: Product;
}
export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="bg-white group rounded-xl cursor-pointer border p-3 space-y-4">
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          alt="Image"
          fill
          width={200}
          className="object-cover aspect-square rounded-md"
          height={200}
          src={data.images?.[0].url}
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <div className="flex gap-x-6 justify-center">
          <IconButton />
        </div>
      </div>
    </div>
  );
}
