import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GALLERY } from '@/lib/site-data'

export function GalleryPreview() {
  const items = GALLERY.slice(0, 6)

  return (
    <section
      id="gallery"
      className="bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from Singra."
          />

          <Reveal delay={120}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View Full Gallery

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 80}
              className="break-inside-avoid"
            >
              <div className="group overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}