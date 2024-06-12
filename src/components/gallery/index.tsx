import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface GalleryProps {
  Images: Image[];
}
export default function Gallery({ Images }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block"></div>
    </Tab.Group>
  );
}
