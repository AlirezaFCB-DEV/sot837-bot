import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "sot837",
    template: "%s | sot837",
  },
  description: "sot837 first chat bot",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-gray-300 dark:bg-black/90 dark:text-white/80"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
