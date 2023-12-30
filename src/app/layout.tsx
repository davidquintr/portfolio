import type { Metadata } from "next";
import "./style/globals.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

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
      <body className="flex flex-col font-poppins bg-light-bg dark:bg-dark-bg min-h-screen">
        <Header />
        <nav className="sticky top-[-10px] z-10 max-w-[1360px] w-full mx-auto">
          <div className="px-4 sm:mx-4 flex gap-2.5 justify-center bg-white dark:bg-dark-box rounded-lg my-2.5 py-2">
            <Navigation />
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
