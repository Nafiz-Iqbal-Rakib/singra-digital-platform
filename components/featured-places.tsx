import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PLACES, type Place } from '@/lib/site-data'

function PlaceCard({ place, large = false }: { place: Place; large?: boolean }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={place.image || '/placeholder.svg'}
        alt={place.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          {place.category}
        </span>
        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h3
              className={`font-serif font-semibold text-white ${large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}
            >
              {place.name}
            </h3>
            <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-white/80">
              {place.description}
            </p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all group-hover:bg-white group-hover:text-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  )
}

export function FeaturedPlaces() {
  const [featured, ...rest] = PLACES

  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Places"
            title="Explore Singra."
            subtitle="Places that tell the story of Singra."
          />
          <Reveal delay={120}>
            <Link
              href="/places"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore All Places
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <div className="h-[420px] lg:h-full">
              <PlaceCard place={featured} large />
            </div>
          </Reveal>
          {rest.slice(0, 2).map((place, i) => (
            <Reveal key={place.name} delay={i * 100}>
              <div className="h-[320px] lg:h-[calc((100%-1.25rem)/2)]">
                <PlaceCard place={place} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
