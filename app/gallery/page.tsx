import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { GALLERY } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Gallery | Singra, Natore, Bangladesh',
  description:
    'A visual journey through the landscapes, people and everyday life of Singra, Natore, Bangladesh.',
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Moments from Singra."
          description="A visual journey through the landscapes, people and everyday life of Singra."
          image="/images/gallery-8.png"
          imageAlt="Aerial view of a Singra village among fields and river"
        />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {GALLERY.map((item, i) => (
              <Reveal key={item.src} delay={(i % 4) * 70} className="break-inside-avoid">
                <figure className="group overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src || '/placeholder.svg'}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
