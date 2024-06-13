import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-butoon";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Color, Size } from "../../../../../type";
import Filter from "./fillter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilter({ sizes, colors }: MobileFilterProps) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="z-40 lg:hidden relative"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="flex relative flex-col w-full h-full ml-auto max-w-xs overflow-y-auto py-4 pb-6 bg-white">
            <div className="flex items-center px-4 justify-end">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
          </DialogPanel>
          {/* render the filter */}
          <div className="p-4">
            <Filter valueKey="sizeId" name="sizes" data={sizes} />
            <Filter valueKey="colorId" name="colors" data={colors} />
          </div>
        </div>
      </Dialog>
    </>
  );
}
