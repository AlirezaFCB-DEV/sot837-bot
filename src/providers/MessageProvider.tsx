"use client";

import { MessageContext, MessageType } from "@/contexts/MessageContext";
import { FetchData } from "@/helpers/FetchData";
import { ReactNode, useEffect, useState } from "react";

export default function MessageProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (messages.length === 0) return;

    const handlesendData = async () => {
      await FetchData<MessageType>("https://sot837-bot.onrender.com/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messages[messages.length - 1]),
      });
    };

    handlesendData();
  }, [messages]);

  useEffect(() => {
    const handleGetData = async () => {
      const res = await FetchData<MessageType[]>(
        "https://sot837-bot.onrender.com/history",
      );

      setMessages(res);
    };

    handleGetData();
  }, []);

  const handleAddMessage = (message: MessageType): void => {
    setMessages((old) => [...old, message]);
  };

  return (
    <MessageContext value={{ messages, handleAddMessage }}>
      {children}
    </MessageContext>
  );
}
