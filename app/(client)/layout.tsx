import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Recoil } from "./store/provider";
import { Provider } from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anicomics",
  description: "Anime merchandise t-shirt brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en" className="scrollbar-none">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
