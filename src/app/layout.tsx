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
        className={`flex flex-col ${poppins.variable} bg-light-background min-h-screen px-4 mx-auto flex-grow`}
      >
        <Navigation />
        <Personal />
        <main className="max-w-[1360px] w-full mx-auto flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
