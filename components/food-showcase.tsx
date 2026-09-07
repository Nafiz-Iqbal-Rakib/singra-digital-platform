import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FOODS } from '@/lib/site-data'

export function FoodShowcase() {
  return (
    <section id="food" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Local Food"
          title="Taste Singra."
          subtitle="Discover the flavors of local life."
        />
        <Reveal delay={120}>
          <Link
            href="/food"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore Food
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] md:grid md:grid-cols-4 md:overflow-visible">
        {FOODS.map((food, i) => (
          <Reveal
            as="article"
            key={food.name}
            delay={i * 80}
            className="group w-[78vw] shrink-0 snap-start sm:w-[45vw] md:w-auto"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={food.image || '/placeholder.svg'}
                alt={food.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                {food.label}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold">{food.name}</h3>
            <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {food.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
