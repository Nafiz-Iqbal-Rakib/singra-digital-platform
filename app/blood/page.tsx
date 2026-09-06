import type { Metadata } from 'next'
import { Droplet, Users, HeartHandshake } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { BloodSearch } from '@/components/blood-search'

export const metadata: Metadata = {
  title: 'Blood Donation & Donor Search | Singra, Natore, Bangladesh',
  description:
    'Find available blood donors near Singra or register as a donor. Give blood and save lives in your community.',
}

const facts = [
  { icon: Droplet, title: 'One donation', text: 'Can help save up to three lives.' },
  { icon: Users, title: 'Community', text: 'Local donors connected by blood group and area.' },
  { icon: HeartHandshake, title: 'Every drop counts', text: 'Register today and help someone in need.' },
]

export default function BloodPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blood"
          title="Give blood. Save lives."
          description="Search for available blood donors near Singra, or register to become one. Together we build a stronger, healthier community."
          image="/images/blood.png"
          imageAlt="Volunteers at a community blood donation drive in Singra"
        />

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 grid gap-5 sm:grid-cols-3">
            {facts.map((fact, i) => (
              <Reveal
                key={fact.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <fact.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-serif text-xl font-semibold">{fact.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{fact.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <BloodSearch />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
