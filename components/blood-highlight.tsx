import Link from 'next/link'
import { Droplet, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function BloodHighlight() {
  return (
    <section id="blood" className="scroll-mt-24 bg-destructive text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            <Droplet className="h-3.5 w-3.5" />
            Blood Donation
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Give blood. Save lives in Singra.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/85">
            Find available blood donors near you, or register to help someone in need. A single
            donation can save up to three lives.
          </p>
          <Link
            href="/blood"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-destructive transition-transform hover:-translate-y-0.5"
          >
            Find &amp; Register Donors
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blood.png"
              alt="Volunteers at a community blood donation drive"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
