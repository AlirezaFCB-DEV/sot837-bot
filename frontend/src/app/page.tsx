import Chat from "@/features/Chat/Chat";
import MessageProvider from "@/providers/MessageProvider";
import { ReactNode } from "react";

export default function HomePage(): ReactNode {
  return (
    <main className="w-screen h-screen p-2 flex justify-center items-center">
      <MessageProvider>
        <Chat />
      </MessageProvider>
    </main>
  );
}
