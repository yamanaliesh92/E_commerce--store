"use client";
import React from "react";
import { usePreviewModal } from "../../../hooks/use-preview.model";
import Gallery from "../gallery";
import Info from "../info";
import Modal from "./modal";

export default function PreviewModal() {
  const PreviewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);
  if (!product) {
    return null;
  }
  return (
    <Modal open={PreviewModal.isOpen} onClose={PreviewModal.onClose}>
      <div className="grid w-full items-start gax-x-5 gap-y-8 sm:grid-cols-12">
        <div className="sm:col-span-4 mt-8 lg:col-span-5">
          <Gallery images={product.Images} />
        </div>
        <div className="sm:col-span-8 ml-10 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}
