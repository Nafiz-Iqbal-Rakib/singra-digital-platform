import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FOODS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Local Food & Cuisine in Singra | Natore, Bangladesh',
  description:
    'Discover the traditional dishes and culinary culture found in and around Singra, Natore, Bangladesh.',
}

export default function FoodPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Food"
          title="Taste Singra."
          description="Traditional dishes and the warm culinary culture of the region. Items below are editable placeholders — add verified local specialties over time."
          image="/images/food-1.png"
          imageAlt="Traditional Bangladeshi fish curry served with rice"
        />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="space-y-16 md:space-y-24">
            {FOODS.map((food, i) => (
              <Reveal
                as="article"
                key={food.name}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={food.image || '/placeholder.svg'}
                    alt={food.name}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-foreground/70">
                    {food.label}
                  </span>
                  <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                    {food.name}
                  </h2>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {food.description}
                  </p>
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
