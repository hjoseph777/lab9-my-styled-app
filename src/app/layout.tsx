import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

// Load fonts - replaced Geist with Inter which is available in next/font/google
const inter = Inter({
  variable: "--font-geist-sans", // Keep the same variable name to minimize CSS changes
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono", // Keep the same variable name
  subsets: ["latin"],
  display: "swap",
});

// Metadata defined in server component
export const metadata: Metadata = {
  title: "My Styled App",
  description: "A showcase of different styling methods in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
