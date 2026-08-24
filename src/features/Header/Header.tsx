import Image from "next/image";
import { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header className="w-full p-5 border-b border-gray-300 shadow-md">
      <div className="flex justify-start items-center gap-3">
        <Image
          src={"/logo.svg"}
          alt="account image"
          width={2000}
          height={2000}
          className="w-15 p-1 bg-gray-300 rounded-full"
        />

        <div>
          <h3 className="font-bold">sot837-bot</h3>
          <h4 className="text-gray-400 text-sm">Personal chat bot</h4>
        </div>
      </div>
    </header>
  );
}
