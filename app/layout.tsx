import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"




const inter = Poppins({ 
  weight: ["400","700"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "LC Dev - Ultimate Portfolio",
  description: "Hi im Christian Agra a Web Developer",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
