import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, KeyRound, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 bg-ivory-50">
      {/* Soft Ambient Radiance */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-radial from-gold-100/50 via-sage-50/40 to-transparent blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtle Dignity Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/80 text-gold-700 text-xs font-medium tracking-wide mb-8 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Digital Estate & Memory Sanctuary</span>
          </motion.div>

          {/* Emotional Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-title font-normal tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            Grief shouldn't come with{" "}
            <span className="italic font-light text-sage-700 underline decoration-gold-300 decoration-1 underline-offset-8">
              90 passwords
            </span>{" "}
            to remember.
          </motion.h1>

          {/* Reassuring Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg sm:text-xl text-ink-body font-sans font-normal max-w-2xl mx-auto leading-relaxed"
          >
            A gentle way to say goodbye to what's left behind.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              id="begin"
              href="#begin-dialog"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sage-600 text-ivory-50 text-base font-medium tracking-wide shadow-card hover:bg-sage-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-ivory-50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Begin, gently</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-gold-200" />
            </a>
          </motion.div>

          {/* Quiet Trust Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
              Takes 5 minutes
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-ivory-400" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
              Zero-knowledge encryption
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-ivory-400" />
            <span>No technical jargon</span>
          </motion.div>
        </div>

        {/* Ambient Visual Preview Card: The Digital Sanctuary Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl bg-ivory-card border border-ivory-300/80 p-6 sm:p-8 shadow-card overflow-hidden">
            {/* Delicate top rule with gold floral node */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-ivory-200 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sage-500" />
                <span className="font-serif italic text-sm text-ink-title">Estate Peace of Mind</span>
              </div>
              <span className="font-mono text-[11px] tracking-wider uppercase text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200/60">
                Safe Custody
              </span>
            </div>

            {/* Representative Ledger Items */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200/70 hover:border-sage-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sage-100/80 flex items-center justify-center text-sage-700 mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-ink-title font-medium">Online Accounts</h3>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  Email, streaming, social profiles, and subscriptions closed or memorialized with quiet dignity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200/70 hover:border-gold-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-600 mb-3">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-ink-title font-medium">Digital Assets & Nominees</h3>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  Clear instructions for bank portals, mutual funds, and investments so nothing remains unclaimed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200/70 hover:border-sage-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sage-100/80 flex items-center justify-center text-sage-700 mb-3">
                  <FeatherIcon className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base text-ink-title font-medium">Letters & Final Words</h3>
                <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                  Letters to loved ones delivered only when the time comes, untouched by algorithms or cold eyes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FeatherIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
)
