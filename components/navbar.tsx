'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [scrolled, setScrolled] = useState(false)

  /* =========================================================
     NAVBAR SCROLL STATE
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* =========================================================
     HOMEPAGE SECTION DETECTION
     ========================================================= */
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = [
      'about',
      'administration',
      'places',
      'food',
      'gallery',
      'emergency',
      'blood',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      let currentSection = 'top'

      for (const id of sections) {
        const element = document.getElementById(id)

        if (!element) continue

        if (element.offsetTop <= scrollPosition) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
     ========================================================= */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* =========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
     ========================================================= */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* =========================================================
     SCROLL TO HOMEPAGE SECTION
     ========================================================= */
  const scrollToSection = (section: string) => {
    if (section === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      setActiveSection('top')
      return
    }

    const element = document.getElementById(section)

    if (!element) return

    const navbarOffset = 100

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset

    window.scrollTo({
      top,
      behavior: 'smooth',
    })

    setActiveSection(section)
  }

  /* =========================================================
     HOME NAVIGATION
     ========================================================= */
  const goHome = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    /*
      Already on homepage:
      Smooth scroll to top.
    */
    if (pathname === '/') {
      e.preventDefault()

      scrollToSection('top')
      return
    }

    /*
      On another page:
      Navigate to homepage.
    */
    e.preventDefault()

    router.push('/')
  }

  /* =========================================================
     ABOUT NAVIGATION
     ========================================================= */
  const goAbout = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    /*
      Already on homepage:
      Smooth scroll directly to About.
    */
    if (pathname === '/') {
      e.preventDefault()

      scrollToSection('about')
      return
    }

    /*
      On another page:
      Go to homepage first.
      The #about hash will tell the browser where to go.
    */
    e.preventDefault()

    router.push('/#about')
  }

  /* =========================================================
     NORMAL NAVIGATION
     ========================================================= */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof NAV_LINKS)[number]
  ) => {
    /*
      HOME
    */
    if (link.label === 'Home') {
      goHome(e)
      return
    }

    /*
      ABOUT
    */
    if (link.label === 'About') {
      goAbout(e)
      return
    }

    /*
      IMPORTANT:

      Places, Food, Gallery, Emergency and Blood
      navigate to their actual pages.

      So we DO NOT preventDefault() here.
    */
  }

  /* =========================================================
     GET SECTION USED FOR INDICATOR
     ========================================================= */
  const getIndicatorSection = (
    link: (typeof NAV_LINKS)[number]
  ) => {
    const sectionMap: Record<string, string> = {
      Home: 'top',
      About: 'about',
      Places: 'places',
      Food: 'food',
      Gallery: 'gallery',
      Emergency: 'emergency',
      Blood: 'blood',
    }

    return sectionMap[link.label] ?? null
  }

  /* =========================================================
     ACTIVE NAV LINK
     ========================================================= */
  const isActive = (
    link: (typeof NAV_LINKS)[number]
  ) => {
    /*
      HOMEPAGE

      Indicator follows the section currently being viewed.
    */
    if (pathname === '/') {
      const section = getIndicatorSection(link)

      if (section) {
        return activeSection === section
      }
    }

    /*
      OTHER PAGES

      Active state follows the actual URL.
    */
    if (link.href === '/') {
      return pathname === '/'
    }

    return (
      pathname === link.href ||
      pathname.startsWith(link.href + '/')
    )
  }

  return (
    <header
      className={cn(
        `
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          transition-all
          duration-300
        `,

        pathname === '/' && !scrolled
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-background border-border/70 shadow-[0_1px_20px_rgba(0,0,0,0.05)]',
      )}
    >
      <nav
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-5
          md:h-20
          md:px-8
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          href="/"
          onClick={goHome}
          className={cn(
            `
              relative
              z-50
              font-serif
              text-2xl
              font-semibold
              tracking-[0.18em]
              transition-colors
              md:text-[26px]
            `,

            pathname === '/' && !scrolled
              ? 'text-white hover:text-white/80'
              : 'text-foreground hover:text-primary',
          )}
          aria-label="Singra — home"
        >
          SINGRA
        </Link>

        {/* =====================================================
            DESKTOP NAV
        ===================================================== */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link)

            /* =================================================
               BLOOD
            ================================================= */
            if (link.highlight) {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-destructive
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-white
                      shadow-sm
                      transition-transform
                      hover:-translate-y-0.5
                      hover:shadow-md
                    "
                  >
                    <span
                      className="
                        inline-block
                        h-2
                        w-2
                        rounded-full
                        bg-white/90
                      "
                      aria-hidden
                    />

                    {link.label}
                  </Link>
                </li>
              )
            }

            /* =================================================
               NORMAL LINK
            ================================================= */
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cn(
                    `
                      relative
                      text-sm
                      font-medium
                      tracking-wide
                      transition-colors
                    `,

                    pathname === '/' && !scrolled
                      ? active
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                      : active
                        ? 'text-foreground'
                        : 'text-foreground/75 hover:text-foreground',
                  )}
                >
                  {link.label}

                  {/* ACTIVE INDICATOR */}
                  <span
                    className={cn(
                      `
                        absolute
                        -bottom-1.5
                        left-0
                        h-px
                        w-full
                        origin-left
                        transition-transform
                        duration-300
                      `,

                      pathname === '/' && !scrolled
                        ? 'bg-white'
                        : 'bg-accent',

                      active
                        ? 'scale-x-100'
                        : 'scale-x-0',
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            `
              relative
              z-50
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              transition-colors
              hover:bg-muted
              lg:hidden
            `,

            pathname === '/' && !scrolled
              ? 'text-white'
              : 'text-foreground',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* =======================================================
          MOBILE MENU
      ======================================================= */}
      <div
        className={cn(
          `
            absolute
            left-0
            right-0
            top-full
            border-t
            border-border/70
            bg-background
            shadow-[0_12px_30px_rgba(0,0,0,0.08)]
            lg:hidden
            transition-all
            duration-300
            ease-out
          `,

          open
            ? 'pointer-events-auto visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0',
        )}
      >
        <div
          className="
            flex
            min-h-[calc(100vh-4rem)]
            flex-col
            items-center
            justify-center
            overflow-y-auto
            px-6
            py-10
          "
        >
          <ul className="flex w-full max-w-sm flex-col items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link)

              return (
                <li
                  key={link.href}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setOpen(false)

                      /*
                        HOME
                      */
                      if (link.label === 'Home') {
                        goHome(e)
                        return
                      }

                      /*
                        ABOUT
                      */
                      if (link.label === 'About') {
                        goAbout(e)
                        return
                      }

                      /*
                        ALL OTHER LINKS

                        Let Next.js navigate normally.
                      */
                    }}
                    className={cn(
                      `
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        border-b
                        border-border/50
                        px-6
                        py-5
                        font-serif
                        text-3xl
                        transition-colors
                      `,

                      link.highlight
                        ? 'text-destructive hover:bg-destructive/5'
                        : active
                          ? 'bg-muted text-primary'
                          : 'text-foreground hover:bg-muted',
                    )}
                  >
                    {link.label}

                    {link.highlight && (
                      <span
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-destructive
                        "
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Singra, Natore, Bangladesh
          </p>
        </div>
      </div>
    </header>
  )
}