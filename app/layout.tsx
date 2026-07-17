import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { profile } from "@/data/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          // Jalan sebelum paint pertama & sebelum React hydrate, cegah flash tema salah.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("portfolio-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){}`,
          }}
        />
      </head>
      <body className="page-shell min-h-full flex flex-col text-fg">
        <div className="page-sheen pointer-events-none absolute inset-0" />
        <Nav />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}