"use client";

import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function NavbarAction() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center bg-black px-4 rounded-full py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm text-white font-medium">0</span>
      </Button>
    </div>
  );
}
