import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { WHY_VISIT } from '@/lib/site-data'

export function WhyVisit() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Why Singra?"
        title="Nature, heritage, culture and stories waiting to be discovered."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {WHY_VISIT.map((item, i) => (
          <Reveal
            as="article"
            key={item.index}
            delay={(i % 2) * 100}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl md:aspect-16/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image || '/placeholder.svg'}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
              <span className="font-serif text-sm text-white/60">{item.index}</span>
              <div className="mt-1 flex items-end justify-between gap-4">
                <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-white/0 transition-colors duration-500 group-hover:text-white/85">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
