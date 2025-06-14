import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beniamin Hekimian - Software Engineer",
  description: "Explore Beniamin Hekimian's portfolio showcasing full-stack web development projects built with Next.js and Tailwind CSS.",
  openGraph: {
    title: "Beniamin Hekimian - Software Engineer",
    description: "Explore Beniamin Hekimian's portfolio showcasing full-stack web development projects built with Next.js and Tailwind CSS.",
    url: "https://beniamin-hekimian.github.io",
    siteName: "Beniamin Hekimian Portfolio",
    images: [
      {
        url: "https://beniamin-hekimian.github.io/mockup.png",
        width: 1200,
        height: 675,
        alt: "Beniamin Hekimian Portfolio Preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
