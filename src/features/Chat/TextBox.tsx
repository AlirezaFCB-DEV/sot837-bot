"use client";

import IconButton from "@/components/IconButton";
import { MessageContext } from "@/contexts/MessageContext";
import { ArrowUp } from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  use,
  useRef,
  useState,
} from "react";
import { v4 } from "uuid";

export type BotMessage = {
  error?: string;
  typeError?: string;
  message?: string;
};

export default function TextBox(): ReactNode {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isIptEmpty, setIsIptEmpty] = useState<string>("");
  const [data, setData] = useState<BotMessage | null>(null);
  const { handleAddMessage } = use(MessageContext);

  const handleInput = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const resetTextarea = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.value = "";
    textarea.style.height = "auto";
    setIsIptEmpty("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const message = String(
      new FormData(e.currentTarget).get("message") ?? "",
    ).trim();

    if (!message) {
      setData({ typeError: "text box can not empty!" });
      return;
    }

    handleAddMessage({ message, type: "user", id: v4() });
    resetTextarea();
    setData(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const botRes: BotMessage = await res.json();

      if (botRes.error) {
        setData({
          error: `Im so sory may we got a error : ${botRes.error}`,
        });
        return;
      }

      if (botRes.message) {
        handleAddMessage({ message: botRes.message, type: "bot", id: v4() });
      }

      setData(botRes);
    } catch {
      setData({
        error: "Im so sory may we got a server error please try again later.",
      });
    }
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      {data?.typeError && !isIptEmpty.trim() && (
        <p className="text-red-600 font-bold mb-3">{data.typeError}</p>
      )}

      {data?.error && (
        <p className="fixed top-0 right-0 left-0 bottom-0 w-full h-full flex justify-center items-center bg-white/10 dark:bg-black/10 backdrop-blur-md text-2xl text-red-600 font-bold">
          {data.error}
        </p>
      )}

      <textarea
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setIsIptEmpty(e.target.value)
        }
        name="message"
        placeholder="send your message"
        className="p-3 w-full max-h-60 border border-gray-300 dark:border-gray-600 rounded-3xl outline-0 caret-blue-600 placeholder:text-[15px] pr-11 scrollbar-none resize-none"
      />

      <IconButton
        type="submit"
        className="absolute bottom-3.75 right-2 p-1 rounded-full bg-green-600 text-white"
      >
        <ArrowUp size={23} />
      </IconButton>
    </form>
  );
}
