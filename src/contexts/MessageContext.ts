"use client";

import { createContext } from "react";

export type MessageType = {
  id: string;
  date: string;
  time: string;
  content: string;
  type: "user" | "bot";
};

export type MessageContextType = {
  messages: MessageType[];
  handleAddMessage: (message: MessageType) => void;
};

export const MessageContext = createContext({
  messages: [],
  handleAddMessage: () => {},
} as MessageContextType);
