import type { Metadata } from "next";
import { MainProvider } from '@/context/MainContext'
import "./globals.css";

export const metadata: Metadata = {
  title: "myPortfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">
        <MainProvider >{children}</MainProvider>
      </body>
    </html>
  );
}
