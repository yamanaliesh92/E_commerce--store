"use client";
import React, { useEffect, useState } from "react";

const formatPrice = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: number | string;
}

export default function Currency({ value }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold">{formatPrice.format(Number(value))}</div>
  );
}
