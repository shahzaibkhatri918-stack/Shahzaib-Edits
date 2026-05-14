import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahzaib Soomro | Professional Video Editor",
  description:
    "Portfolio website for Shahzaib Soomro, a professional video editor specializing in talking head videos, VSL, Facebook ads, podcasts, reels, YouTube, corporate videos, and event recaps.",
  keywords: [
    "video editor",
    "vsl editor",
    "talking head editor",
    "professional video editor",
    "davinci resolve editor",
    "reels editor",
    "youtube video editor",
    "corporate video editor",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
