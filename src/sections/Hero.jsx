import { useState, useEffect, useRef } from "react";
import Button from "../components/ui/Button";

import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.png";
import { useTranslation } from "react-i18next";

const HERO_IMAGES = [hero1, hero2, hero3];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);
  const { t } = useTranslation();

  function setUpTimer() {
    return setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
  }

  useEffect(() => {
    timerRef.current = setUpTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  function handleClickSlideIndicator(index) {
    setCurrentImageIndex(index);
    clearInterval(timerRef.current);
    timerRef.current = setUpTimer();
  }

  return (
    /* CHANGED: Removed 'mt-18' and fixed h-[calc(...)]. 
       ADDED: 'h-dvh' (Dynamic Viewport Height) and 'pt-26' (to cleanly push content below the fixed header) */
    <section className="bg-agency-obsidian relative flex h-dvh w-full items-center justify-center overflow-hidden pt-26">
      {/* 1. Background Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-40" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* 2. Dark Luxury Vignette Overlay */}
      <div className="from-agency-obsidian to-agency-obsidian/60 absolute inset-0 z-10 bg-gradient-to-t via-transparent" />

      {/* 3. Main Foreground Content */}
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Large Luxury Heading */}
        <h1 className="text-agency-cream max-w-4xl font-serif text-3xl leading-[1.15] tracking-wide uppercase md:text-6xl lg:text-6xl">
          {t("hero.titleNormal")}<br />
          <span className="text-agency-champagne font-normal lowercase italic">
            {t("hero.titleItalic")}
          </span>
        </h1>

        {/* Muted Subtitle */}
        <p className="text-agency-silver mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
          {t("hero.description")}
        </p>

        {/* Core Tagline Values */}
        <p className="text-agency-silver mt-2 hidden font-sans text-xs font-medium tracking-[0.2em] uppercase sm:block md:text-sm">
          {t("hero.values")}
        </p>

        {/* Custom Gradient CTA Button */}
        <div className="mt-10">
          <Button href="#cta">{t("header.cta")}</Button>
        </div>
      </div>

      {/* 4. Minimalist Slide Indicators (Bottom Center) */}
      <div className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 transform gap-2 sm:flex">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClickSlideIndicator(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-agency-champagne w-8"
                : "bg-agency-silver/40 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
