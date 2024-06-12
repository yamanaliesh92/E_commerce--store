"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { Image as ImageType } from "../../../type";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}
export default function Gallery({ images }: GalleryProps) {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="w-full sm:h-[250px]  aspect-square">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative  sm:h-[250px]  w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                alt=""
                src={image.url}
                className="object-cover   object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
