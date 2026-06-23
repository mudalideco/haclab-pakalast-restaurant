import type { Metadata } from "next";
import { Figtree, Nunito } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider";

const figtree = Figtree({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pakalast Restaurant | 24/7 Authentic Ugandan Flavors in Makindye",
  description: "Your neighborhood spot in Makindye serving hearty portions of local favorites, from sunrise to sunset. Open all day, every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}