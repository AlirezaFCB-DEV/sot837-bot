"use client";

import IconButton from "@/components/IconButton";
import { MessageContext } from "@/contexts/MessageContext";
import { ArrowUp } from "lucide-react";
import {
  ChangeEvent,
  ReactNode,
  use,
  useActionState,
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
  const { handleAddMessage } = use(MessageContext);
  const [isIptEmpty, setIsIptEmpty] = useState<string>("");

  const handleInput = (): void => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleActionState = async (
    _: unknown,
    formData: FormData,
  ): Promise<BotMessage> => {
    const message = formData.get("message") as string;

    setIsIptEmpty("");

    if (!message.trim()) return { typeError: "text box can not empty!" };

    handleAddMessage({ message: message, type: "user", id: v4() });

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message }),
    });

    const botRes: BotMessage = await res.json();

    if (botRes.error) {
      return {
        error: "Im so sory may we got a server error please try again later.",
      };
    }

    if (botRes.message) {
      handleAddMessage({ message: botRes.message, type: "bot", id: v4() });
    }

    return botRes;
  };

  const [data, action, isPending] = useActionState(handleActionState, null);

  return (
    <form className="relative w-full" action={action}>
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
        disabled={isPending}
        className="absolute bottom-3.75 right-2 p-1 rounded-full bg-green-600 text-white"
      >
        <ArrowUp size={23} />
      </IconButton>
    </form>
  );
}
