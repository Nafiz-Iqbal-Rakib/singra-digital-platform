import { Reveal } from '@/components/reveal'
import { ADMIN_STATS, LOCATION } from '@/lib/site-data'

export function AdministrativeOverview() {
  return (
    <section
      id="administration"
      className="scroll-mt-24 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">

          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
              Administrative Overview
            </p>

            <h2 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Singra at a glance.
            </h2>

            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/70">
              Singra Upazila is located in Natore District of
              Rajshahi Division. The upazila covers 528.47 square
              kilometres and had a population of 381,316 according
              to the 2022 Population and Housing Census.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {ADMIN_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                    {stat.label}
                  </dt>

                  <dd className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* LOCATION */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-10 sm:grid-cols-4">
          {[
            ['Upazila', LOCATION.upazila],
            ['District', LOCATION.district],
            ['Division', LOCATION.division],
            ['Country', LOCATION.country],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
                {label}
              </p>

              <p className="mt-1.5 font-serif text-xl">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}