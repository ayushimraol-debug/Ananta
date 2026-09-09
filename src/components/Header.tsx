import React from 'react'
import { Feather, Shield, Heart } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-ivory-300 bg-ivory-50/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center text-sage-700 shadow-sm">
            <Feather className="w-4 h-4 stroke-[1.75]" />
          </div>
          <div>
            <span className="font-serif text-2xl tracking-wide text-ink-title font-medium">Ananta</span>
            <span className="hidden sm:inline-block ml-2 text-xs text-ink-muted uppercase tracking-widest font-sans font-normal border-l border-ivory-300 pl-2">
              Legacy Stewardship
            </span>
          </div>
        </div>

        {/* Quiet Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-body font-medium">
          <a href="#about" className="hover:text-sage-700 transition-colors">The Problem</a>
          <a href="#process" className="hover:text-sage-700 transition-colors">How We Help</a>
          <a href="#security" className="hover:text-sage-700 transition-colors flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-sage-600" />
            <span>Bank-Grade Privacy</span>
          </a>
        </nav>

        {/* Minimal Action */}
        <div className="flex items-center gap-4">
          <a
            href="#begin"
            className="text-xs sm:text-sm font-sans font-medium px-4 py-2 rounded-full border border-sage-200 bg-sage-50 text-sage-700 hover:bg-sage-100 transition-all shadow-sm hover:border-sage-300 flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-sage-600 fill-sage-100" />
            <span>For Families</span>
          </a>
        </div>
      </div>
    </header>
  )
}
