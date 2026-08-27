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

  const handleAddMessage = async (message: MessageType): Promise<void> => {
    setMessages((old) => [...old, message]);

    try {
      await FetchData("http://localhost:5000/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    } catch (error) {
      console.error("Failed to send messages:", error);
    }
  };

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const res = await FetchData<MessageType[]>(
          "http://localhost:5000/history",
        );

        setMessages(res);
      } catch (error) {
        console.error("Failed to get messages:", error);
      }
    };

    handleGetData();
  }, []);

  return (
    <MessageContext value={{ messages, handleAddMessage }}>
      {children}
    </MessageContext>
  );
}
