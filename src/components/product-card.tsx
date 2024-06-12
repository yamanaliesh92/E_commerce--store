"use client";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Product } from "../../type";
import Currency from "./ui/currency";
import IconButton from "./ui/icon-butoon";

interface ProductCardProps {
  data: Product;
}
export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="bg-white  group rounded-xl cursor-pointer border p-3 space-y-4">
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          alt="Image"
          fill
          className="object-cover aspect-square rounded-md"
          src={data.Images?.[0].url}
        />
        <div className="opacity-0 group-hover:opacity-100 absolute transition w-full px-6 bottom-5  ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
}
