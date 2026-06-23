import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'
import SocialSidebar from '@/components/ui/SocialSidebar'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-violet/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <SocialSidebar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
