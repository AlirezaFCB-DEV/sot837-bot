import { ReactNode } from "react";
import Header from "../Header/Header";
import TextBox from "./TextBox";

export default function Chat(): ReactNode {
  return (
    <section className="w-full h-full rounded-3xl border border-gray-400 bg-white">
      <Header />

      <main>
        <h1>hello world!</h1>
      </main>

      <footer className="w-full flex flex-col justify-start items-center gap-3 p-3 border-t border-gray-300 text-center">
        <TextBox />

        <h5 className="text-sm text-gray-400">
          sot837-bot may make mistakes. verify important information.
        </h5>
      </footer>
    </section>
  );
}
