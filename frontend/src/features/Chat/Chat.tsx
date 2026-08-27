import { ReactNode } from "react";
import Header from "../Header/Header";
import TextBox from "./TextBox";
import Messages from "./Messages";
import SideBar from "../SideBar/SideBar";

export default function Chat(): ReactNode {
  return (
    <section className="w-full h-full rounded-3xl border border-gray-400 dark:border-gray-600 bg-white dark:bg-black/80 flex justify-between relative">
      <Header />

      <div className="w-full h-full flex flex-col justify-between relative">
        <main className="w-full flex-1 overflow-auto scrollbar-none mb-2">
          <Messages />
        </main>

        <footer className="w-full flex flex-col justify-start items-center gap-2 p-3 border-t border-gray-300 dark:border-gray-600 text-center">
          <TextBox />

          <h5 className="text-sm text-gray-400">
            sot837-bot may make mistakes. verify important information.
          </h5>
        </footer>
      </div>

      <SideBar />
    </section>
  );
}
