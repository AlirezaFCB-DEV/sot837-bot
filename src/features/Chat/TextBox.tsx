"use client";

import { ArrowUp } from "lucide-react";
import { ReactNode, useRef } from "react";

export default function TextBox(): ReactNode {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="relative w-full">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        placeholder="send your message"
        className="p-3 w-full max-h-60 border border-gray-300 rounded-3xl outline-0 caret-blue-600 placeholder:text-[15px] pr-11 scrollbar-none resize-none"
      />

      <ArrowUp
        className="absolute bottom-3.75 right-2.5 p-1 rounded-full bg-green-500 text-white"
        size={30}
      />
    </div>
  );
}
