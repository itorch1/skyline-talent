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
  { id: 1, name: "Valeria", height: "176 cm", image: girl1 },
  { id: 2, name: "Anastasia", height: "178 cm", image: girl2 },
  { id: 3, name: "Daria", height: "175 cm", image: girl3 },
  { id: 4, name: "Ekaterina", height: "177 cm", image: girl4 },
  { id: 5, name: "Angelina", height: "179 cm", image: girl5 },
  { id: 6, name: "Sofia", height: "174 cm", image: girl6 },
  { id: 7, name: "Karina", height: "176 cm", image: girl7 },
  { id: 8, name: "Alina", height: "178 cm", image: girl8 },
  { id: 9, name: "Kristina", height: "175 cm", image: girl9 },
];

export default function Gallery() {
  return (
    <section
      className="bg-agency-obsidian border-agency-charcoal relative z-20 border-t py-24 md:py-32 scroll-mt-22"
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {MODELS.map((model) => (
            <div
              key={model.id}
              className="group bg-agency-onyx border-agency-charcoal/40 relative aspect-[3/4] w-full cursor-pointer overflow-hidden border shadow-2xl"
            >
              {/* 
                1. Image Layer 
                - Starts completely grayscale (grayscale-100) and slightly high-contrast (contrast-115)
                - Smoothly shifts back to full color (group-hover:grayscale-0) on hover
              */}
              <div
                className="absolute inset-0 scale-100 bg-cover bg-center contrast-115 grayscale filter transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${model.image})` }}
              />

              {/* 2. Gradient Overlay (Darkens slightly at the bottom to hold the text cleanly) */}
              <div className="from-agency-obsidian via-agency-obsidian/10 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

              {/* 3. Text Overlay Content */}
              <div className="absolute bottom-0 left-0 z-20 w-full translate-y-2 transform p-6 transition-transform duration-500 ease-out group-hover:translate-y-0 md:p-8">
                {/* Thin gold accent decorative bar */}
                <div className="bg-agency-gold mb-3 h-[1px] w-6 transition-all duration-500 group-hover:w-12" />

                {/* Model Name */}
                <h3 className="text-agency-cream mb-1 font-serif text-2xl tracking-wide uppercase">
                  {model.name}
                </h3>

                {/* Metadata fading up */}
                <div className="text-agency-silver flex h-0 items-center justify-between font-sans text-xs tracking-wider uppercase opacity-0 transition-all duration-500 ease-out group-hover:h-5 group-hover:opacity-100">
                  <span>Height: {model.height}</span>
                  <span className="text-agency-gold font-medium">
                    Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
