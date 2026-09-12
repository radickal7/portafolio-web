import Hero from "../components/sections/Hero"
import TechStrip from "../components/sections/TechStrip"
import Capabilities from "../components/sections/Capabilities"
import FeaturedProjects from "../components/sections/FeaturedProjects"
import Services from "../components/sections/Services"
import Process from "../components/sections/Process"
import AISection from "../components/sections/AISection"
import AboutSection from "../components/sections/AboutSection"
import ContactCTA from "../components/sections/ContactCTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStrip />
      <Capabilities />
      <FeaturedProjects />
      <Services />
      <Process />
      <AISection />
      <AboutSection />
      <ContactCTA />
    </main>
  )
}
