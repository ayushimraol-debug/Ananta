import React, { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { AlertCircle, IndianRupee, FileText, Compass } from 'lucide-react'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

const CountingNumber: React.FC<CounterProps> = ({ value, prefix = '', suffix = '', duration = 2.2 }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const displayRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('en-IN'))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      })
      return controls.stop
    }
  }, [isInView, count, value, duration])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = v
      }
    })
    return () => unsubscribe()
  }, [rounded])

  return (
    <span ref={ref} className="inline-flex items-baseline font-serif">
      {prefix && <span className="mr-1">{prefix}</span>}
      <span ref={displayRef}>0</span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

export const AnimatedStatSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px 0px' })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-ivory-100/60 border-y border-ivory-300/80 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100/80 border border-sage-200 text-sage-800 text-xs font-medium uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-sage-600" />
            <span>The Hidden Toll of Modern Passing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl text-ink-title font-medium tracking-tight"
          >
            What happens to our digital lives when we are gone?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-ink-body leading-relaxed"
          >
            We prepare physical wills and name bank nominees. Yet the hundreds of online accounts holding our memories, messages, and assets quietly slip into the dark.
          </motion.p>
        </div>

        {/* The Two Animated Stat Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Stat Card 1: Less than 3% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl bg-ivory-card border border-ivory-300 p-8 sm:p-10 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700">
                  <FileText className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-sans font-medium text-ink-muted uppercase tracking-widest bg-ivory-100 px-3 py-1 rounded-full border border-ivory-300/70">
                  Digital Estate Gap
                </span>
              </div>

              {/* Stat Number with Count-Up */}
              <div className="mb-4 text-ink-title">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-sage-700 tracking-tight">
                  <span className="text-3xl sm:text-4xl font-serif text-ink-title font-normal mr-2">Less than</span>
                  <CountingNumber value={3} suffix="%" duration={1.8} />
                </span>
              </div>

              {/* Exact user requirement statement */}
              <h3 className="font-serif text-xl sm:text-2xl text-ink-title leading-snug font-normal mt-3">
                of wills in India include instructions for online accounts.
              </h3>

              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                Families are left navigating locked smartphones, two-factor SMS authentications, and unresponsive cloud providers during their deepest hours of grief.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ivory-200 flex items-center gap-2 text-xs text-sage-700">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
              <span>Leaves photos, conversations, and subscriptions unresolved</span>
            </div>
          </motion.div>

          {/* Stat Card 2: ₹82,000 crore */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl bg-ivory-card border border-ivory-300 p-8 sm:p-10 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600">
                  <IndianRupee className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-sans font-medium text-ink-muted uppercase tracking-widest bg-ivory-100 px-3 py-1 rounded-full border border-ivory-300/70">
                  Stranded Wealth
                </span>
              </div>

              {/* Stat Number with Count-Up */}
              <div className="mb-4 text-ink-title">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-gold-600 tracking-tight">
                  <CountingNumber value={82000} prefix="₹" duration={2.4} />
                  <span className="text-3xl sm:text-4xl font-serif text-ink-title font-normal ml-2">crore</span>
                </span>
              </div>

              {/* Exact user requirement statement */}
              <h3 className="font-serif text-xl sm:text-2xl text-ink-title leading-snug font-normal mt-3">
                Unclaimed deposits in India exceed ₹82,000 crore.
              </h3>

              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                Dormant bank accounts, forgotten mutual funds, insurance policies, and provident funds sit unclaimed simply because heirs were never handed the map.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ivory-200 flex items-center gap-2 text-xs text-gold-700">
              <AlertCircle className="w-3.5 h-3.5 text-gold-500" />
              <span>Reported across RBI, IEPFA, and leading financial registries</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
