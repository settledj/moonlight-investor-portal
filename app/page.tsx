import { FloatingNav } from "@/components/nav/FloatingNav";
import { Hero } from "@/components/hero/Hero";
import { PitchVideo } from "@/components/video/PitchVideo";
import { PitchDeck } from "@/components/deck/PitchDeck";
import { CompanySnapshot } from "@/components/snapshot/CompanySnapshot";
import { InvestmentHighlights } from "@/components/highlights/InvestmentHighlights";
import { FounderSection } from "@/components/team/FounderSection";
import { InvestorFAQ } from "@/components/faq/InvestorFAQ";
import { DataRoom } from "@/components/documents/DataRoom";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <PitchVideo />
      <PitchDeck />
      <CompanySnapshot />
      <InvestmentHighlights />
      <FounderSection />
      <InvestorFAQ />
      <DataRoom />
      <ContactSection />
      <Footer />
    </main>
  );
}
