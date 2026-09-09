import Preloader from "@/features/home/components/Preloader";
import Hero from "@/features/home/components/Hero";
import PartnerLogos from "@/features/home/components/PartnerLogos";
import PillarGrid from "@/features/home/components/PillarGrid";
import ProductMomentAI from "@/features/home/components/ProductMomentAI";
import HowItWorks from "@/features/home/components/HowItWorks";
import TrustStats from "@/features/home/components/TrustStats";
import CoverageTeaser from "@/features/home/components/CoverageTeaser";
import FAQTeaser from "@/features/home/components/FAQTeaser";
import { JsonLd } from "@/shared/components/JsonLd";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/shared/utils/appLinks";

export const metadata = {
  title: "Getly — The Super App For Modern Traveller",
  description:
    "Turning unfamiliar places into unforgettable experiences. Getly combines a global multi-currency wallet, virtual cards, global eSIMs, and flight bookings in one app.",
  openGraph: {
    title: "Getly — The Super App For Modern Traveller",
    description:
      "Turning unfamiliar places into unforgettable experiences. Getly combines a global multi-currency wallet, virtual cards, global eSIMs, and flight bookings in one app.",
    url: "https://getly.app",
    siteName: "Getly",
    images: [{ url: "https://getly.app/hero/hero-image.jpg" }],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Getly",
    url: "https://getly.app",
    logo: "https://getly.app/brand/getly-logo.svg",
    description: "The Super App For Modern Traveller — turning unfamiliar places into unforgettable experiences.",
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Getly",
    operatingSystem: "iOS, Android",
    applicationCategory: "TravelApplication, FinanceApplication",
    installUrl: APP_STORE_URL,
    sameAs: [PLAY_STORE_URL],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={appSchema} />
      <Preloader />
      
      <div className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <PartnerLogos />
        <PillarGrid />
        <ProductMomentAI />
        <HowItWorks />
        <TrustStats />
        <CoverageTeaser />
        <FAQTeaser />
      </div>
    </>
  );
}
