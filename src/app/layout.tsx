import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hexis",
  description: "Hex is never ending story",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(["bg-black font-sans antialiased", fontSans.variable])}
      >
        <div className="max-w-screen-sm mx-auto w-full min-h-screen px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
