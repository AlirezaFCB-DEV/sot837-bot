import Logo from "@/components/Logo";
import Image from "next/image";
import { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header className="w-full p-5 border-b border-gray-300 dark:border-gray-600 shadow-md bg-white dark:bg-black lg:rounded-b-none rounded-3xl absolute z-10">
      <div className="flex justify-start items-center gap-3">
        <Image
          src={"/logo.svg"}
          alt="account image"
          width={2000}
          height={2000}
          className="w-15 p-1 bg-gray-300 dark:bg-gray-600 rounded-full"
        />

        <div>
          <Logo className="text-xl">-bot</Logo>
          <h4 className="text-gray-400 text-sm">Personal chat bot</h4>
        </div>
      </div>
    </header>
  );
}
