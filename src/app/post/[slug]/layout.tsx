import "../../style/globals.css";
import Footer from "../../components/footer";
import { poppins } from "../../utils/fonts";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c6ceff" },
    { media: "(prefers-color-scheme: dark)", color: "#263365" },
  ],
};

export default async function RootLayout({ children}: { children: React.ReactNode }) {  

  return (
    <html lang="en">
      <body
        className={`flex flex-col ${poppins.variable} bg-light-background dark:bg-dark-background min-h-screen mx-auto flex-grow relative`}
      >
        <main className="flex flex-col max-w-[1400px] w-full mx-auto flex-1 z-10 px-4 lg:px-12">
          {children}
        </main>
        <span className="bg-light-blue-400 size-60 sm:size-80 rounded-full absolute right-0 z-0 blur-[256px] animate-pulse animate-duration-[5000ms]"></span>
        <span className="bg-light-blue-400 opacity-75 size-40 sm:size-60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[256px] z-0 animate-pulse animate-duration-[10500ms]"></span>
        <span className="bg-light-blue-400 size-60 sm:size-80 rounded-full absolute left-0 bottom-0 blur-[256px] z-0 animate-pulse animate-duration-[8600ms]"></span>
        <Footer lang="en"/>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
