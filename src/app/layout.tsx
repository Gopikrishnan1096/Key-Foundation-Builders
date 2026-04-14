import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Main } from "@/components/layout/Main";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | Best Construction Company in Kerala`,
    template: `%s | ${site.name}`,
  },
  description:
    "Key Foundation Builders — trusted civil & steel construction company in Kerala. Building homes, commercial spaces, steel structures & godowns since 1995. Get a free quote today.",
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
    siteName: site.name,
    title: `${site.name} | Best Construction Company in Kerala`,
    description:
      "Trusted civil & steel construction in Kerala since 1995. Homes, commercial buildings, steel structures & godowns. Serving Kochi, Thrissur, Kozhikode & all of Kerala.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Key Foundation Builders — Construction Company Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Construction Company Kerala`,
    description:
      "Trusted builders in Kerala since 1995 — homes, commercial, steel & godown construction. Call +91 96457 67050.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${heading.variable}`}>
      <body className="min-h-screen font-sans pb-mobile-bar md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
