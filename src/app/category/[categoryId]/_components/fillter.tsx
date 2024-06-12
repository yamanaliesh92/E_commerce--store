"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Color, Size } from "../../../../../type";
import qs from "query-string";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}
export default function Filter({ valueKey, name, data }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                "border text-sm border-gray-300 rounded-md text-gray-800 bg-white p-2 ",
                selectedValue === filter.id && "bg-black text-white"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
