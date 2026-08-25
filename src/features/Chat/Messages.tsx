"use client";

import { MessageContext } from "@/contexts/MessageContext";
import { ReactNode, use } from "react";
import MessageItem from "./MessageItem";

export default function Messages(): ReactNode {
  const { messages } = use(MessageContext);

  return (
    <ul className="w-full h-full flex flex-col justify-start items-center gap-7 p-5 mt-25">
      {messages.map((message) => (
        <MessageItem {...message} key={message.id} />
      ))}
    </ul>
  );
}
