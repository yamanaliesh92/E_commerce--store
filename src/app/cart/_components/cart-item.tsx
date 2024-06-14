import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-butoon";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Product } from "../../../../type";
interface CartItemProps {
  data: Product;
}
export default function CartItem({ data }: CartItemProps) {
  return (
    <div className="flex py-6 border-b">
      <div className="h-24 relative w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.Images[0].url}
          className="object-cover object-center"
          alt=""
        />
      </div>
      <div className="ml-4 relative flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={() => {}} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>

            <p className="text-gray-500 border-l border-gray-200 ml-4 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </div>
  );
}
