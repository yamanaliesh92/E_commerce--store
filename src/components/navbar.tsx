import Link from "next/link";
import React from "react";
import { getCategories } from "../../actions/get-categories";
import MainNav from "./main-nav";
import Container from "./ui/container";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
}
