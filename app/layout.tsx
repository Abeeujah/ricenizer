import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryClientProvider from "./QueryClientProvider";
import Footer from "./components/Footer";
import { NavbarDefault } from "./components/NavBar";
import { ThemeProvider } from "./components/WithMt.exports";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url.author }],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url.base),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Abeeujah",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemeProvider>
            <NavbarDefault />
            <main>
              <div className="container">{children}</div>
            </main>
            <div className="sm:relative">
              <div className="">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
