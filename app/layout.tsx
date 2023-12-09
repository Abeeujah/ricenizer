import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/WithMt.exports";
import { NavbarDefault } from "./components/NavBar";
import Footer from "./components/Footer";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
