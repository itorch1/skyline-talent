import { useState } from "react";
import girl4 from "../images/girl1.jpg";
import girl2 from "../images/girl2.jpg";
import girl8 from "../images/girl3.jpg";
import girl1 from "../images/girl4.jpg";
import girl5 from "../images/girl5.jpg";
import girl6 from "../images/girl6.jpg";
import girl7 from "../images/girl7.jpg";
import girl3 from "../images/girl8.jpg";
import girl9 from "../images/girl9.jpg";

const MODELS = [
  { id: 1, name: "Valeria", height: "172 cm", image: girl1 },
  { id: 2, name: "Anastasia", height: "176 cm", image: girl2 },
  { id: 3, name: "Daria", height: "173 cm", image: girl3 },
  { id: 4, name: "Ekaterina", height: "170 cm", image: girl4 },
  { id: 5, name: "Angelina", height: "175 cm", image: girl5 },
  { id: 6, name: "Sofia", height: "168 cm", image: girl6 },
  { id: 7, name: "Karina", height: "172 cm", image: girl7 },
  { id: 8, name: "Alina", height: "178 cm", image: girl8 },
  { id: 9, name: "Kristina", height: "168 cm", image: girl9 },
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="bg-agency-obsidian border-agency-charcoal relative z-20 border-t py-24 md:py-32 scroll-mt-18"
      id="gallery"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <span className="text-agency-gold mb-3 font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
            Roster
          </span>
          <h2 className="text-agency-cream font-serif text-3xl tracking-wide uppercase md:text-5xl">
            Featured Talent
          </h2>
          <p className="text-agency-silver mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed md:text-base">
            Exclusive representation of premium models for luxury events, brand
            activations, and international placements.
          </p>
        </div>

        {/* --- PORTRAIT CARD GRID --- */}
        {/* Optimized mobile grid layout: 
            - grid-cols-2 on mobile (sm:grid-cols-2) 
            - grid-cols-3 on desktop (md:grid-cols-3)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:gap-10">
          {MODELS.map((model, index) => {
            // On mobile viewports, conditionally hide cards beyond the 4th slot if not expanded
            const isHiddenOnMobile = !isExpanded && index >= 4;

            return (
              <div
                key={model.id}
                className={`group bg-agency-onyx border-agency-charcoal/40 relative w-full cursor-pointer overflow-hidden border shadow-2xl transition-all duration-500 aspect-square sm:aspect-3/4 ${
                  isHiddenOnMobile ? "hidden md:block" : "block"
                }`}
              >
                {/* 1. Image Layer */}
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-top contrast-115 grayscale filter transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${model.image})` }}
                />

                {/* 2. Gradient Overlay */}
                <div className="from-agency-obsidian via-agency-obsidian/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-80 transition-opacity duration-500 md:opacity-70 md:group-hover:opacity-85" />

                {/* 3. Text Overlay Content */}
                <div className="absolute bottom-0 left-0 z-20 w-full p-4 transition-transform duration-500 ease-out md:translate-y-2 md:p-8 md:group-hover:translate-y-0">
                  {/* Thin gold accent line */}
                  <div className="bg-agency-gold mb-2 h-[1px] w-4 transition-all duration-500 md:mb-3 md:w-6 md:group-hover:w-12" />

                  {/* Model Name - Adjusted scaling for mobile grid visibility */}
                  <h3 className="text-agency-cream mb-0.5 font-serif text-lg tracking-wide uppercase md:mb-1 md:text-2xl">
                    {model.name}
                  </h3>

                  {/* Metadata layer: Always visible on mobile screens for better accessibility, hovers on desktop */}
                  <div className="text-agency-silver flex items-center justify-between font-sans text-[10px] tracking-wider uppercase md:h-0 md:text-xs md:opacity-0 md:transition-all md:duration-500 md:ease-out md:group-hover:h-5 md:group-hover:opacity-100">
                    <span>{model.height}</span>
                    <span className="text-agency-gold font-medium">Available</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- LUXURY TRUNCATION TOGGLE (Mobile Only) --- */}
        <div className="mt-12 flex justify-center md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex flex-col items-center space-y-2 text-agency-silver hover:text-agency-gold transition-colors py-2 cursor-pointer focus:outline-none"
          >
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase">
              {isExpanded ? "Collapse Roster" : "View Full Roster"}
            </span>
            <div className="relative w-16 h-px bg-agency-charcoal overflow-hidden">
              <div 
                className={`absolute inset-0 bg-agency-gold h-full w-full transition-transform duration-500 ease-out ${
                  isExpanded ? "translate-x-0" : "-translate-x-full group-hover:translate-x-0"
                }`} 
              />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}