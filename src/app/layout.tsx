import "./style/globals.css";
import Personal from "./components/personal";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { poppins } from "./utils/fonts";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#11a5e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1738" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${poppins.variable} bg-light-background dark:bg-dark-background min-h-screen mx-auto flex-grow relative`}
      >
        <Navigation />
        <Personal />
        <main className="max-w-[1400px] w-full mx-auto flex-1 z-10">
          {children}
        </main>
        <span className="bg-light-blue-400 size-80 rounded-full absolute right-0 z-0 blur-[256px] animate-pulse animate-duration-[5000ms]"></span>
        <span className="bg-light-blue-400 opacity-75 size-60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[256px] z-0 animate-pulse animate-duration-[10500ms]"></span>
        <span className="bg-light-blue-400 size-80 rounded-full absolute left-0 bottom-0 blur-[256px] z-0 animate-pulse animate-duration-[8600ms]"></span>
        <Footer />
      </body>
    </html>
  );
}
