import "@repo/ui/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Toast } from "@ui/index";
import Gnb from "@/components/Gnb";
import MobileSizeWatcher from "@/components/MobileSizeWatcher";
import { Providers } from "./providers";

const spoqaHanSansNeo = localFont({
  src: [
    { path: "./fonts/SpoqaHanSansNeo-Thin.woff", weight: "100" },
    { path: "./fonts/SpoqaHanSansNeo-Light.woff", weight: "300" },
    { path: "./fonts/SpoqaHanSansNeo-Regular.woff", weight: "400" },
    { path: "./fonts/SpoqaHanSansNeo-Medium.woff", weight: "500" },
    { path: "./fonts/SpoqaHanSansNeo-Bold.woff", weight: "700" },
  ],
  variable: "--font-spoqa", // CSS 변수로 폰트를 지정
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="ko">
      <body className={spoqaHanSansNeo.variable}>
        <MobileSizeWatcher />
        <Gnb />
        <Providers>
          <div className="md:ml-200">{children}</div>
        </Providers>
        <Toast />
      </body>
    </html>
  );
}
