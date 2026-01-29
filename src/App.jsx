import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import About from "./components/About"
import CTA from "./components/CTA"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <About />
      <CTA />
    </>
  )
}

export default App
