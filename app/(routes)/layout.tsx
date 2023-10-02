import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambisius Coding Challenge #230916H",
  description: "Simple Restaurant",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-6 space-y-5 w-full md:w-[650px]">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold">
                [Contoh] Sistem Restoran
              </h1>
              <p className="text-muted-foreground text-sm">
                Ambisius Coding Challenge #230916H
              </p>
            </div>
          </div>
          <div dir="ltr" data-orientation="horizontal">
            <Navbar />
            <div className="px-6 py-4 mt-4 bg-muted rounded-md min-h-[300px]">
              {children}
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Semua data disimpan di Local Storage Browser
          </p>
        </main>
      </body>
    </html>
  );
}
