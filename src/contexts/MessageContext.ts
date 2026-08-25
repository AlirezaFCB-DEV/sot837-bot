"use client";

import { createContext } from "react";

export type MessageType = {
  id: string;
  type: "user" | "bot";
  message: string;
};

export type MessageContextType = {
  messages: MessageType[];
  handleAddMessage: ({ message, type }: MessageType) => void;
};

export const MessageContext = createContext({
  messages: [],
  handleAddMessage: () => {},
} as MessageContextType);
