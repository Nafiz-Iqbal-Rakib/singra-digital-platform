import Link from 'next/link'
import { Ambulance, Building2, Flame, Phone, ShieldAlert, MapPin, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EMERGENCY_SERVICES, type EmergencyService } from '@/lib/site-data'

const ICONS = {
  hospital: Ambulance,
  police: ShieldAlert,
  fire: Flame,
  office: Building2,
} as const

export function EmergencyCard({ service }: { service: EmergencyService }) {
  const Icon = ICONS[service.icon]
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-serif text-2xl font-semibold">{service.name}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-accent-foreground/70" />
          {service.phone ? (
            <a href={`tel:${service.phone}`} className="font-medium hover:text-primary">
              {service.phone}
            </a>
          ) : (
            <span className="text-muted-foreground">Number to be added</span>
          )}
        </p>
        <p className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent-foreground/70" />
          {service.location}
        </p>
      </div>
    </div>
  )
}

export function EmergencyHelp() {
  return (
    <section id="emergency" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Emergency & Help"
          title="Help when you need it."
          subtitle="Important contacts and services for residents and visitors."
        />
        <Reveal delay={120}>
          <Link
            href="/emergency"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {EMERGENCY_SERVICES.map((service, i) => (
          <Reveal key={service.name} delay={i * 80} className="h-full">
            <EmergencyCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
