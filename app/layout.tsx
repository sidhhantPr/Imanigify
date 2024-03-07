import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--front-ibm-plex",
});

export const metadata: Metadata = {
  title: "Sidfy",
  description: "AI generated 😄",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#624cf5" } }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlexSans.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
