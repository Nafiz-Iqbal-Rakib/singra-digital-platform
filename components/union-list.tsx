'use client'

import { useState } from 'react'
import { ChevronDown, Building2, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { UNIONS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function UnionList() {
  const [open, setOpen] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
      <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-foreground/70">
              Administrative Areas
            </p>
            <h3 className="font-serif text-2xl font-semibold md:text-3xl">
              Municipality &amp; Union Parishads
            </h3>
          </div>
          <span
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-transform',
              open && 'rotate-180',
            )}
          >
            <ChevronDown className="h-5 w-5" />
          </span>
        </button>

        <div
          className={cn(
            'grid transition-all duration-500',
            open ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-primary/5 p-4">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Singra Municipality</p>
                <p className="text-sm text-muted-foreground">Pourashava — details to be added</p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {UNIONS.map((union) => (
                <li
                  key={union.name}
                  className="rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground/70" />
                    <div>
                      <p className="font-medium">{union.name}</p>
                      {union.note && (
                        <p className="mt-0.5 text-sm text-muted-foreground">{union.note}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Union names and details are editable placeholders. Replace with verified data.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
