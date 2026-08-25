"use client";

import { MessageContext, MessageType } from "@/contexts/MessageContext";
import { ReactNode, useEffect, useState } from "react";

export default function MessageProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [messages, setMessages] = useState<MessageType[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const storage: string | null = localStorage.getItem("messages");

        return storage ? JSON.parse(storage) : [];
      } catch (error) {
        console.error(error);

        localStorage.removeItem("messages");
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleAddMessage = ({ message, type, id }: MessageType): void => {
    setMessages((old) => {
      const clone = [...old];

      clone.push({ message, type, id });

      return clone;
    });
  };

  return (
    <MessageContext value={{ messages, handleAddMessage }}>
      {children}
    </MessageContext>
  );
}
