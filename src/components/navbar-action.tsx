"use client";

import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function NavbarAction() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center bg-black px-4 rounded-full py-2">
        <ShoppingBag size={20} color="white" />
      </Button>
    </div>
  );
}
