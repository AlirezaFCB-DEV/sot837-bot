import { MessageType } from "@/contexts/MessageContext";
import { ReactNode } from "react";

type Props = Pick<MessageType, "content" | "type">;

export default function MessageItem({
  content: message,
  type,
}: Props): ReactNode {
  const isUser = type === "user";

  return (
    <li
      className={`w-full ${isUser ? "pl-10" : "pr-10"}`}
      dir={isUser ? "rtl" : "ltr"}
    >
      <p
        className={`p-3 w-fit rounded-2xl ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-gray-100 dark:bg-white/20 border border-gray-300 dark:border-gray-600"
        }`}
        dir="ltr"
      >
        {message}
      </p>
    </li>
  );
}
