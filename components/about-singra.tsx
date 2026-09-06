import { Reveal } from '@/components/reveal'
import { LOCATION } from '@/lib/site-data'

export function AboutSingra() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-foreground/70">
              About Singra
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              A place worth discovering.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Singra is an upazila in {LOCATION.district} District, part of the{' '}
              {LOCATION.division} Division of {LOCATION.country}. Shaped by rivers, wetlands
              and open farmland, it is a place where everyday rural life unfolds against a
              quietly beautiful landscape.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 border-l-2 border-accent/60 pl-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
                History &amp; Heritage
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Singra carries the layered heritage of its region — its communities, crafts and
                traditions passed down over generations. This section is editable so that verified
                local history and heritage details can be added over time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Upazila</dt>
                <dd className="mt-1 font-serif text-xl">{LOCATION.upazila}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">District</dt>
                <dd className="mt-1 font-serif text-xl">{LOCATION.district}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Division</dt>
                <dd className="mt-1 font-serif text-xl">{LOCATION.division}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about.png"
              alt="A serene view of the Singra countryside with river and greenery"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-primary px-7 py-5 text-primary-foreground shadow-xl md:block">
            <p className="font-serif text-lg italic">Where Nature</p>
            <p className="font-serif text-lg italic">Meets Heritage.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
