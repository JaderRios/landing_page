import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page",
  description: "Generated by Israel Rios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-between bg-gradient-to-b from-sky-400 via-green-400 to-lime-300 screen p-10">
          <Header />
          <section className="p-10">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
