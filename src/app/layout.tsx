import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Header, MobileApply } from "@/components/shell";
import { Footer } from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EAK International School | Learn boldly. Grow kindly.",
    template: "%s | EAK International School",
  },
  description:
    "A K–12 school in Bengaluru where curious learning and kind community help every child grow.",
  openGraph: {
    title: "EAK International School",
    description: "Learn boldly. Grow kindly.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-primary"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileApply />
      </body>
    </html>
  );
}
