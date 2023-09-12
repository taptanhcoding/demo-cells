import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/global.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalLayout from "@/components/layout/GlobalLayout";
import ClientLayout from "@/components/layout/ClientLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Core base fe economy",
  description: "Code by Chuyendev",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="vi">
        <body>          
          <GlobalLayout>
            <ClientLayout>{children}</ClientLayout>
          </GlobalLayout>
        </body>
      </html>
    </>
  );
}
