import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

// Using system fonts as fallback
const inter = {
  variable: "--font-inter",
};

const poppins = {
  variable: "--font-poppins",
};

export const metadata: Metadata = {
  title: "aman kumar - Premium Tech Agency",
  description: "Leading technology agency specializing in web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cybersecurity services.",
  keywords: ["web development", "mobile apps", "AI solutions", "UI/UX design", "digital marketing", "cybersecurity", "tech agency"],
  authors: [{ name: "aman kumar" }],
  creator: "aman kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aman kumar.com",
    title: "aman kumar - Premium Tech Agency",
    description: "Leading technology agency specializing in web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cybersecurity services.",
    siteName: "aman kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "aman kumar - Premium Tech Agency",
    description: "Leading technology agency specializing in web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cybersecurity services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/08/28/15/20250828155209-GDNYJLMQ.js"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <NavigationProgress />
            <SmoothScrollProvider>
              <Header />
              {children}
              <Footer />
            </SmoothScrollProvider>
            <Analytics />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
