import { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import Navbar from "@/features/navigation/Navbar";
import Footer from "@/features/footer/Footer";
import DownloadCTA from "@/features/home/components/DownloadCTA";
import SmoothScrollProvider from "@/shared/providers/SmoothScrollProvider";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className={`scroll-smooth ${cairo.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/brand/icon-blue.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[var(--canvas)] text-[var(--ink)] font-sans overflow-x-hidden min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <DownloadCTA />
            <Footer />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
