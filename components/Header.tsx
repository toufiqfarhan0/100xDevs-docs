import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = ({ children}: HeaderProps) => {
  return (
    <div className="min-h-[92px] min-w-full flex-nowrap bg-dark-500 flex w-full items-center justify-between gap-2 px-4">
      <Link href="/" className="md:flex-1">
        {/* <Image
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        /> */}
        <p className="text-4xl font-bold">Dev Docs</p>
      </Link>
      {children}
    </div>
  );
};

export default Header;
