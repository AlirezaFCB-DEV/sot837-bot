import Form from "@/components/Form";
import { ReactNode } from "react";

export default function loginPage(): ReactNode {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-4 bg-gray-300 dark:bg-black/90">
      <Form />
    </main>
  );
}
