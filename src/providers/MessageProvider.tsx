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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const res = await FetchData<MessageType[]>(
          "https://sot837-bot.onrender.com/history",
        );

        setMessages(res);
      } catch (error) {
        console.error("Failed to get messages:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    handleGetData();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      if (messages.length === 0) return;

      const handleSendData = async () => {
        try {
          await FetchData("https://sot837-bot.onrender.com/history", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(messages[messages.length - 1]),
          });
        } catch (error) {
          console.error("Failed to send messages:", error);
        }
      };

      handleSendData();
    }
  }, [messages, isLoaded]);

  const handleAddMessage = (message: MessageType): void => {
    setMessages((old) => [...old, message]);
  };

  return (
    <MessageContext value={{ messages, handleAddMessage }}>
      {children}
    </MessageContext>
  );
}
