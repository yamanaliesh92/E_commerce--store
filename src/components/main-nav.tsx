"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Category } from "../../type";

interface MainNavProps {
  data: Category[];
}

export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();
  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm transition-colors font-medium hover:text-black ${
            route.active ? "text-black" : "text-neutral-500"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
