import Link from 'next/link'
import { Globe, Mail, Send } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Places', href: '/places' },
      { label: 'Food', href: '/food' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Emergency & Help', href: '/emergency' },
      { label: 'Blood', href: '/blood' },
      { label: 'Important Offices', href: '/emergency' },
    ],
  },
  {
    title: 'Administrative',
    links: [
      { label: 'Municipality', href: '/#administration' },
      { label: 'Unions', href: '/#administration' },
      { label: 'Population', href: '/#administration' },
      { label: 'Administrative Info', href: '/#administration' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl font-semibold tracking-[0.16em]">SINGRA</p>
            <p className="mt-3 text-sm text-muted-foreground">Singra, Natore, Bangladesh</p>
            <p className="mt-6 max-w-xs font-serif text-xl italic text-foreground/80">
              Discover. Experience. Remember.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Send, label: 'Messenger' },
                { icon: Globe, label: 'Website' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-3">
          <p>Phone: {CONTACT.phone}</p>
          <p>Email: {CONTACT.email}</p>
          <p className="sm:text-right">{CONTACT.address}</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2026 Singra, Natore. All rights reserved.</p>
          <p>Made with love in Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
