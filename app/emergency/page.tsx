import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { EmergencyCard } from '@/components/emergency-help'
import { EMERGENCY_SERVICES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Emergency & Help | Singra, Natore, Bangladesh',
  description:
    'Important emergency contacts and public services in Singra — hospital, police, fire service and key offices.',
}

export default function EmergencyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Emergency & Help"
          title="Help when you need it."
          description="Important contacts and public services for residents and visitors of Singra. Numbers and locations are editable placeholders — add verified official details."
          image="/images/place-4.png"
          imageAlt="A busy local market street in Singra"
        />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EMERGENCY_SERVICES.map((service, i) => (
              <Reveal key={service.name} delay={i * 80} className="h-full">
                <EmergencyCard service={service} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl bg-primary p-8 text-primary-foreground sm:flex-row md:p-10">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">National Emergency</p>
                <p className="text-primary-foreground/75">
                  Dial 999 for police, fire and ambulance across Bangladesh.
                </p>
              </div>
            </div>
            <a
              href="tel:999"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Call 999
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
