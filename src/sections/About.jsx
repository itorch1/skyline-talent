const EXPERIENCES = [
  "Fashion shows",
  "Luxury yacht events",
  "Destination weekends",
  "VIP nightlife",
  "Hospitality partnerships",
  "Brand activations",
  "Content productions",
  "Private social gatherings",
  "Luxury travel experiences",
];

export default function AboutUs() {
  return (
    <section
      className="bg-agency-obsidian border-agency-charcoal relative z-20 border-t py-24 md:py-32 scroll-mt-18"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* --- SECTION HEADER/SUBTITLE PREFIX --- */}
        <div className="mb-8">
          <span className="text-agency-gold font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
            Exclusive Network
          </span>
        </div>

        {/* --- MAIN EDITORIAL TWO-COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Massive Statement Title (Spans 5 grid cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-agency-cream font-serif text-3xl leading-[1.1] tracking-wide uppercase md:text-5xl lg:text-6xl">
              Connecting Ukrainian Talent <br />
              <span className="text-agency-champagne mt-2 block font-normal lowercase italic">
                with global opportunities
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative Copy Blocks (Spans 7 grid cols) */}
          <div className="text-agency-silver space-y-6 font-sans text-base leading-relaxed md:text-lg lg:col-span-7">
            <p>
              Founded with a vision of connecting exceptional Ukrainian talent
              with world-class opportunities,
              <span className="text-agency-cream font-medium">
                {" "}
                Skyline Talent
              </span>{" "}
              operates at the intersection of fashion, hospitality, luxury
              lifestyle, and event culture.
            </p>
            <p>
              Our models are selected not only for their appearance, but for
              their professionalism, communication skills, social presence, and
              ability to represent premium brands and experiences.
            </p>
            <p>
              From Monaco and Cannes to Dubai, Mykonos, and Miami, Skyline
              Talent supports clients seeking to elevate the atmosphere, image,
              and success of their events, campaigns, and brand experiences
              through carefully selected talent.
            </p>
            <p>
              Whether for a fashion show, hospitality activation, luxury venue,
              yacht event, destination experience, content production, or
              private social gathering, our team delivers talent that reflects
              the standards of the world's most exclusive environments.
            </p>
            <p className="text-agency-champagne pt-4 font-serif text-xl italic md:text-2xl">
              "We believe the right people transform an event from memorable to
              unforgettable."
            </p>
          </div>
        </div>

        {/* --- EXPERIENCES WE SUPPORT SUB-SECTION --- */}
        {/* <div className="mt-24 md:mt-32 pt-16 border-t border-agency-charcoal/40">
          <div className="mb-12">
            <h3 className="font-serif text-xl md:text-2xl text-agency-cream tracking-widest uppercase text-center lg:text-left">
              Experiences We Support
            </h3>
          </div>
          
          {/* Minimalist, clean multi-column text grid for experiences *
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
            {EXPERIENCES.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center space-x-4 py-2 border-b border-agency-charcoal/20 hover:border-agency-bronze/30 transition-colors duration-300"
              >
                {/* Micro-indicator that lights up gold on hover *
                <span className="font-sans text-xs text-agency-bronze font-mono group-hover:text-agency-gold transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="font-sans text-agency-cream group-hover:text-agency-champagne transition-colors tracking-wide text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
