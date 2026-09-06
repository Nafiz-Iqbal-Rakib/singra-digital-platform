'use client'

import { useMemo, useState } from 'react'
import { Search, Droplet, MapPin, Clock, Heart } from 'lucide-react'
import { BLOOD_GROUPS, AREAS, SAMPLE_DONORS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function BloodSearch() {
  const [group, setGroup] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [searched, setSearched] = useState(false)

  const results = useMemo(() => {
    return SAMPLE_DONORS.filter(
      (d) => (!group || d.group === group) && (!area || d.area === area),
    )
  }, [group, area])

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSearched(true)
        }}
        className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-end"
      >
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Blood Group
          </label>
          <div className="flex flex-wrap gap-2">
            {BLOOD_GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGroup((prev) => (prev === g ? '' : g))}
                className={cn(
                  'inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors',
                  group === g
                    ? 'border-destructive bg-destructive text-white'
                    : 'border-border hover:border-destructive/50',
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="area"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Area
          </label>
          <select
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
          >
            <option value="">All areas</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Search className="h-4 w-4" />
          Search Donors
        </button>
      </form>

      <div className="mt-8 border-t border-border pt-8">
        {!searched ? (
          <p className="text-sm text-muted-foreground">
            Select a blood group and area, then search available donors. Results below use sample
            placeholder data — connect a database to show real, verified donors.
          </p>
        ) : results.length === 0 ? (
          <div className="rounded-2xl bg-muted/60 p-8 text-center">
            <Droplet className="mx-auto h-8 w-8 text-destructive/60" />
            <p className="mt-3 font-medium">No donors found for this selection</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different blood group or area.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              {results.length} donor{results.length > 1 ? 's' : ''} found{' '}
              <span className="text-foreground/50">(sample placeholder data)</span>
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((donor) => (
                <li
                  key={donor.name}
                  className="flex items-center gap-4 rounded-2xl border border-border p-4"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-destructive/10 font-serif text-lg font-semibold text-destructive">
                    {donor.group}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium">{donor.name}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {donor.area}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Last donated {donor.lastDonation}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-destructive/5 p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Heart className="h-6 w-6 text-destructive" />
          <div>
            <p className="font-medium">Want to become a donor?</p>
            <p className="text-sm text-muted-foreground">
              Registration connects to a database once configured.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-full bg-destructive px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Register as Donor
        </button>
      </div>
    </div>
  )
}
