'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Only the homepage has the transparent-over-hero treatment.
  const overHero = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || !overHero
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className={cn(
            'font-serif text-2xl font-semibold tracking-[0.18em] transition-colors md:text-[26px]',
            solid ? 'text-foreground' : 'text-background',
          )}
          aria-label="Singra — home"
        >
          SINGRA
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            if (link.highlight) {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-white/90" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              )
            }
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium tracking-wide transition-colors',
                    solid ? 'text-foreground/75 hover:text-foreground' : 'text-background/85 hover:text-background',
                    active && (solid ? 'text-foreground' : 'text-background'),
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300',
                      active && 'scale-x-100',
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden',
            solid ? 'text-foreground hover:bg-muted' : 'text-background hover:bg-white/10',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-background transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-serif text-2xl font-semibold tracking-[0.18em]">SINGRA</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-muted"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-1 px-6 pb-16">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between border-b border-border/60 py-4 font-serif text-3xl transition-colors',
                  link.highlight ? 'text-destructive' : 'text-foreground hover:text-primary',
                )}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
                {link.highlight && (
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-destructive" aria-hidden />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <p className="px-6 pb-8 text-sm text-muted-foreground">Singra, Natore, Bangladesh</p>
      </div>
    </header>
  )
}
