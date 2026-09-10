import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niluka Dasuni | Full Stack Developer",
  description: "Porfolio website of Niluka Dasuni, an aspiring Full Stack Developer.",
};

export default function RootLayout({ 
  children, 
}: Readonly<{ 
  children: React.ReactNode; 
}>) {
  return (
    <html
      lang="en">
      <body className = "min-h-screen bg-[#050A14] text-white"> {children}</body>
    </html>
  );
}
