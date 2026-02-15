import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}

export default App
