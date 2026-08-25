"use client";

import { MessageContext, MessageType } from "@/contexts/MessageContext";
import { ReactNode, useEffect, useState } from "react";

export default function MessageProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const handleStorage = () => {
      const storage: string | null = localStorage.getItem("messages");

      if (storage) {
        setMessages(JSON.parse(storage));
      }
    };

    handleStorage();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
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
