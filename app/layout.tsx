import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡爪爪宠物洗护",
  description:
    "宠物洗护、美容修剪与皮毛护理单页官网，包含服务项目、门店环境、价格套餐、顾客评价与在线预约。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
