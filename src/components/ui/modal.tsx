"use client";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import React, { Fragment } from "react";
import IconButton from "./icon-butoon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, open, children }: ModalProps) {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" onClose={onClose} className="z-10 relative">
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed overflow-y-auto inset-0 ">
          <div className="flex min-h-full items-center p-4 text-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="flex w-full px-4 pb-8 relative items-center overflow-hidden bg-white pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-8 lg:p-8">
                  <div className="absolute top-4 ring-4 ">
                    <IconButton onClick={onClose} icon={<X size={15} />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
