import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent-foreground/70">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
