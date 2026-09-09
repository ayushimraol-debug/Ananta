import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AnimatedStatSection } from './components/AnimatedStatSection'
import { FooterSection } from './components/FooterSection'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-50 text-ink-body font-sans selection:bg-sage-100 selection:text-sage-800">
      <Header />
      <main>
        <HeroSection />
        <AnimatedStatSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
