"use client";

import IconButton from "@/components/IconButton";
import { ArrowUp } from "lucide-react";
import { ReactNode, useActionState, useRef } from "react";

interface BotMessage {
  error?: string;
  message?: string;
}

export default function TextBox(): ReactNode {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <form className="relative w-full">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        name="message"
        placeholder="send your message"
        className="p-3 w-full max-h-60 border border-gray-300 dark:border-gray-600 rounded-3xl outline-0 caret-blue-600 placeholder:text-[15px] pr-11 scrollbar-none resize-none"
      />

      <IconButton className="absolute bottom-3.75 right-2.5 p-1 rounded-full bg-green-500 text-white">
        <ArrowUp size={23} />
      </IconButton>
    </form>
  );
}
