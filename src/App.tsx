import { motion } from 'framer-motion'
import AnimatedBackground from './components/ui/AnimatedBackground'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import LoadingScreen from './components/ui/LoadingScreen'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(sectionIds)

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-500 focus:text-white"
      >
        Skip to main content
      </a>

      <Header activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.main>

      <Footer />
    </>
  )
}

export default App
