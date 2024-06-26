import React from "react";
import { Billboard } from "../../type";
interface BillboardProps {
  data: Billboard;
}
export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="p-4  rounded-xl overflow-hidden ">
      <div
        className="rounded-xl h-[200px] w-full relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imgUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-y-1 text-center ">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}
