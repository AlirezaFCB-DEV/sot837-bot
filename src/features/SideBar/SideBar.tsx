import { ReactNode } from "react";
import History from "./History";

export default function SideBar(): ReactNode {
  return (
    <aside className="hidden lg:flex flex-col justify-start items-center gap-5 border-l border-gray-300 dark:border-gray-600 w-100 xl:w-150 h-full pt-30 px-5">
      <button className="p-4 w-full border border-gray-400 dark:border-gray-500 text-cyan-700 dark:text-cyan-500 text-xl rounded-2xl cursor-pointer transition-all duration-150 ease-in-out hover:-translate-y-1 active:opacity-30">
        گفتگو جدید +
      </button>

      <History />
    </aside>
  );
}
