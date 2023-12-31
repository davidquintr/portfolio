import type { Metadata } from "next";
import "../style/globals.css";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { MetadataHome } from "../sources/metadata_en";
import { poppins } from "../utils/fonts";
import { ReactNode } from "react";
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#11a5e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1738" },
  ],
};

export const metadata: Metadata = MetadataHome;

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body
        className={`flex flex-col ${poppins.variable} font-poppins bg-light-bg dark:bg-dark-bg min-h-screen`}
      >
        <Header />
        <nav className="sticky top-[-10px] z-10 max-w-[1360px] w-full mx-auto">
          <div className="px-4 sm:mx-4 flex gap-2.5 justify-center bg-white dark:bg-dark-box rounded-lg my-2.5 py-2">
            <Navigation locale={locale} />
          </div>
        </nav>
        <main className="max-w-[1360px] w-full sm:px-4 mx-auto flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
