import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneOf.Store - Custom Software Development Tools",
  description: "Custom Tailored Web, Mobile, and Cloud Tools. Your One Stop Software Development Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
