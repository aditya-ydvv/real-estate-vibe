"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { heroSlides } from "@/data/heroSlides";
import { SearchTabs } from "@/components/home/SearchTabs";

export function HeroSlideshow() {
  const reduceMotion = useReducedMotion();
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 28 }, reduceMotion ? [] : [autoplay]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, idx) => (
            <div key={slide.src} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,16,0.50)_0%,rgba(8,10,16,0.58)_30%,rgba(8,10,16,0.66)_100%)]"
        style={{ transform: reduceMotion ? undefined : `translateY(${Math.min(scrollY * 0.08, 40)}px)` }}
      />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 pt-24 pb-14 text-center sm:px-6 lg:px-8">
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Find your place in Delhi NCR
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
          Premium homes and trusted advisors across Delhi, Gurgaon, Noida, and beyond.
        </p>
        <div className="mt-8 w-full">
          <SearchTabs />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white transition duration-300"
        style={{ opacity: scrollY > 80 ? 0 : 1 }}
      >
        <ChevronDown className="size-7 animate-bounce" />
      </div>
    </section>
  );
}
