"use client";

import IconButton from "@/components/IconButton";
import { MessageContext } from "@/contexts/MessageContext";
import { ArrowUp } from "lucide-react";
import { ReactNode, use, useActionState, useRef } from "react";
import { v4 } from "uuid";

export default function TextBox(): ReactNode {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleAddMessage } = use(MessageContext);

  const handleInput = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleActionState = async (
    _: unknown,
    formData: FormData,
  ): Promise<string | null> => {
    const message = formData.get("message") as string;

    if (!message.trim()) return "text box can not empty!";

    handleAddMessage({ message: message, type: "user", id: v4() });

    return null;
  };

  const [data, action, isPending] = useActionState(handleActionState, null);

  return (
    <form className="relative w-full" action={action}>
      {data && <p className="text-red-600 font-bold mb-3">{data}</p>}

      <textarea
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        name="message"
        placeholder="send your message"
        className="p-3 w-full max-h-60 border border-gray-300 dark:border-gray-600 rounded-3xl outline-0 caret-blue-600 placeholder:text-[15px] pr-11 scrollbar-none resize-none"
      />

      <IconButton
        type="submit"
        disabled={isPending}
        className="absolute bottom-3.75 right-2 p-1 rounded-full bg-green-600 text-white"
      >
        <ArrowUp size={23} />
      </IconButton>
    </form>
  );
}
