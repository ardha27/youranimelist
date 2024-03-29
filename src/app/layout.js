import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YourAnimeList",
  description: "Your Pocket Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
