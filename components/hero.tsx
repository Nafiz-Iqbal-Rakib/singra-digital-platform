'use client'

import { ArrowDown, MapPin } from 'lucide-react'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')

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
  }

  return (
    <section
      id="top"
      className="relative flex h-svh min-h-[640px] w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.png"
          alt="Aerial view of Singra's rivers, wetlands and green fields at sunrise"
          className="h-full w-full animate-kenburns object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-white/80">
            Discover Singra
          </p>

          <h1 className="font-serif text-[19vw] font-semibold leading-[0.9] tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
            SINGRA
          </h1>

          <p className="mt-4 text-lg font-light tracking-wide text-white/85 md:text-xl">
            Natore, Bangladesh
          </p>

          <p className="mt-8 max-w-xl text-pretty font-serif text-2xl italic leading-snug text-white md:text-3xl">
            Where Nature Meets Heritage.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Explore Singra */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Singra

              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>

            <span className="inline-flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4" aria-hidden />
              Singra, Natore, Bangladesh
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll arrow */}
      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce-soft text-white/70" />
      </button>
    </section>
  )
}
