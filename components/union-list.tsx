'use client'

import { useState } from 'react'
import { ChevronDown, Building2, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function UnionList() {
  const [open, setOpen] = useState(false)

  const unions = [
    {
      number: '01',
      name: 'Sukash Union',
    },
    {
      number: '02',
      name: 'Dahia Union',
    },
    {
      number: '03',
      name: 'Italy Union',
    },
    {
      number: '04',
      name: 'Kalam Union',
    },
    {
      number: '05',
      name: 'Chamari Union',
    },
    {
      number: '06',
      name: 'Hatiandaha Union',
    },
    {
      number: '07',
      name: 'Lalore Union',
    },
    {
      number: '08',
      name: 'Sherkole Union',
    },
    {
      number: '09',
      name: 'Tajpur Union',
    },
    {
      number: '10',
      name: 'Chaugram Union',
    },
    {
      number: '11',
      name: 'Chhatardighi Union',
    },
    {
      number: '12',
      name: 'Ramananda Khajura Union',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
      <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-10">

        {/* Header */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Administrative Areas
            </p>

            <h3 className="font-serif text-2xl font-semibold md:text-3xl">
              Municipality &amp; Union Parishads
            </h3>
          </div>

          <span
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300',
              open && 'rotate-180',
            )}
          >
            <ChevronDown className="h-5 w-5" />
          </span>
        </button>

        {/* Content */}
        <div
          className={cn(
            'grid transition-all duration-500',
            open
              ? 'mt-8 grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">

            {/* Municipality */}
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-primary/5 p-4">
              <Building2 className="h-5 w-5 shrink-0 text-primary" />

              <div>
                <p className="font-medium">
                  Singra Municipality
                </p>
              </div>
            </div>

            {/* Union Parishads */}
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {unions.map((union) => (
                <li
                  key={union.number}
                  className="
                    rounded-xl
                    border
                    border-border
                    p-4
                    transition-colors
                    hover:border-primary/40
                  "
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />

                    <div>
                      <p className="font-medium">
                        {union.name}
                      </p>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Union Parishad {union.number}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <p className="mt-5 text-sm text-muted-foreground">
              Singra Upazila consists of 1 municipality and 12 union
              parishads.
            </p>

          </div>
        </div>
      </Reveal>
    </section>
  )
}