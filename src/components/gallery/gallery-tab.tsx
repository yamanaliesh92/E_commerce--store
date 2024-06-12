import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { Image as ImageType } from "../../../type";

interface GalleryTabProps {
  key: string;
  image: ImageType;
}

export default function GalleryTab({ key, image }: GalleryTabProps) {
  return (
    <Tab className="flex aspect-square cursor-pointer items-center justify-center bg-white rounded-md">
      {({ selected }) => (
        <div>
          <span className="h-full absolute w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}
