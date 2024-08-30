import { HeaderDesktop } from "@/app/components/root/header-desktop"
import { HeaderMobile } from "@/app/components/root/header-mobile"
import { HeroSection } from "./_components/hero-section"
import { ResultsSection } from "./_components/results-section"
import { Footer } from "@/app/components/root/footer"
import { WorksSection } from "./_components/works-section"
import { Suspense } from "react"
import { FaqSection } from "./_components/faq-section"
import { CardsSection } from "./_components/cards-section"

const HomePage = () => {
  return (
    <Suspense>
      <HeaderDesktop />
      <HeaderMobile />
      <main>
        <HeroSection />
        <CardsSection />
        <WorksSection />
        {/* <ResultsSection /> */}
        <FaqSection />
      </main>
      <Footer />
    </Suspense>
  )
}

export default HomePage