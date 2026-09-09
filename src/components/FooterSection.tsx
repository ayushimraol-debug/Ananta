import React from 'react'
import { Feather, Lock, ArrowUpRight } from 'lucide-react'

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-ivory-50 border-t border-ivory-300 relative overflow-hidden">
      {/* Editorial Pull Quote Anchor */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Soft Botanical Leaf Ornament */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 text-sage-700 mb-8 border border-sage-200 shadow-xs">
          <Feather className="w-5 h-5 stroke-[1.5]" />
        </div>

        {/* The Exact Footer Line from User Specification */}
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-title font-normal leading-relaxed sm:leading-relaxed max-w-3xl mx-auto">
          &ldquo;You said goodbye once. You shouldn't have to keep saying it &mdash; to a bank, a phone company, a login screen.&rdquo;
        </blockquote>

        <p className="mt-6 text-sm text-ink-muted font-sans tracking-wide">
          Ananta provides quiet closure, ensuring your wishes are honored with dignity and your loved ones are spared administrative heartache.
        </p>

        <div className="mt-10">
          <a
            href="#begin"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-800 underline decoration-gold-400 underline-offset-8 transition-colors group"
          >
            <span>Learn how Ananta protects your digital legacy</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-500" />
          </a>
        </div>
      </div>

      {/* Gentle Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-ivory-300 to-transparent" />
      </div>

      {/* Reassurance & Metadata Bar */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-ink-title font-medium">Ananta</span>
          <span>&copy; {new Date().getFullYear()} Ananta Memorial & Estate Stewardship. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-sage-700">
            <Lock className="w-3.5 h-3.5" />
            <span>256-bit AES Zero-Knowledge</span>
          </span>
          <a href="#privacy" className="hover:text-ink-body transition-colors">Privacy Charter</a>
          <a href="#terms" className="hover:text-ink-body transition-colors">Ethics & Security</a>
          <a href="#contact" className="hover:text-ink-body transition-colors">Quiet Support</a>
        </div>
      </div>
    </footer>
  )
}
