import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ModulesSection from "@/components/Modules";
import ParentAppSection from "@/components/ParentsApp";
import PricingSection from "@/components/Pricing";
import PaymentProvidersSection from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
//import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ModulesSection />
        <PaymentProvidersSection />
        <ParentAppSection />
        <PricingSection />
        <WhatsAppButton />
        <Contact />
      </main>
    </div>
  );
}
