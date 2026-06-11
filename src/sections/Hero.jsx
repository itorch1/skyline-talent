import { useState, useEffect, useRef } from "react";
import Button from "../components/ui/Button";

import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.png";

// High-end, atmospheric editorial imagery
const HERO_IMAGES = [
  hero1, // Monaco/Yacht setting vibe
  hero2, // Luxury travel aesthetic
  hero3, // Elegant evening activation vibe
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);

  function setUpTimer() {
    return setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Cross-fades every 5 seconds
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
    <section className="bg-agency-obsidian relative mt-18 flex h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden">
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
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-6 pt-10 text-center">
        {/* Large Luxury Heading */}
        <h1 className="text-agency-cream max-w-4xl font-serif text-4xl leading-[1.15] tracking-wide uppercase md:text-6xl lg:text-6xl">
          Where Exceptional Talent <br />
          <span className="text-agency-champagne font-normal lowercase italic">
            meets Exceptional Experiences
          </span>
        </h1>

        {/* Muted Subtitle */}
        <p className="text-agency-silver mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
          Ukrainian models for luxury events, fashion shows, hospitality
          experiences, yacht gatherings, nightlife activations, and
          international campaigns.
        </p>

        {/* Core Tagline Values */}
        <p className="text-agency-silver mt-2 font-sans text-xs font-medium tracking-[0.2em] uppercase md:text-sm">
          Discreet • Professional • International
        </p>

        {/* Custom Gradient CTA Button */}
        <div className="mt-10">
          <Button href="#contact">Request Talent</Button>
        </div>
      </div>

      {/* 4. Minimalist Slide Indicators (Bottom Center) */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
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
