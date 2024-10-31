import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fireworks of offers",
  description: "Find great oportunities!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body>
        {children}
      </body>
    </html>
  );
}
