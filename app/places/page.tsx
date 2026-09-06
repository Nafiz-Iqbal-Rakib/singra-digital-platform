import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { PLACES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Places to Explore in Singra | Natore, Bangladesh',
  description:
    'Explore the natural landscapes, rural life and notable places of Singra Upazila in Natore, Bangladesh.',
}

export default function PlacesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Places"
          title="Explore Singra."
          description="From wetlands and riverside villages to open paddy fields — places that tell the story of Singra. Listings below are editable placeholders."
          image="/images/places-hero.png"
          imageAlt="Panoramic landscape of Singra with river and fields"
        />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLACES.map((place, i) => (
              <Reveal
                as="article"
                key={place.name}
                delay={(i % 3) * 90}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.image || '/placeholder.svg'}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                    {place.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold">{place.name}</h2>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {place.description}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
