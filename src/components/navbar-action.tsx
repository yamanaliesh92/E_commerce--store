"use client";

import { ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/use-cart";
import { Button } from "./ui/button";

export default function NavbarAction() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center bg-black px-4 rounded-full py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm text-white font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
