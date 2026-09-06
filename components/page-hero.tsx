import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden pt-16">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image || '/placeholder.svg'} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-white/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{eyebrow}</span>
        </nav>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
