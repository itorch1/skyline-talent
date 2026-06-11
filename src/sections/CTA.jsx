import Button from "../components/ui/Button";

export default function CTA() {
  return (
    <section
      className="bg-agency-obsidian border-agency-charcoal relative z-20 scroll-mt-18 overflow-hidden border-t"
      id="cta"
    >
      {/* 50/50 Grid Container */}
      <div className="grid min-h-[60vh] grid-cols-1 md:min-h-[70vh] md:grid-cols-2">
        {/* --- LEFT SIDE: FOR CLIENTS --- */}
        <div className="group bg-agency-obsidian hover:bg-agency-onyx/50 relative flex flex-col items-start justify-between p-12 transition-colors duration-500 md:p-20">
          {/* Subtle right boundary line for desktop separation */}
          <div className="bg-agency-charcoal/40 absolute top-10 right-0 bottom-10 hidden w-[1px] md:block" />

          <div className="max-w-md">
            <span className="text-agency-gold mb-4 block font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
              For Clients
            </span>
            <h2 className="text-agency-cream mb-6 font-serif text-3xl leading-tight tracking-wide uppercase md:text-4xl lg:text-5xl">
              Elevate Your <br />
              <span className="text-agency-champagne font-normal lowercase italic">
                Next Event
              </span>
            </h2>
            <p className="text-agency-silver mb-8 font-sans text-sm leading-relaxed md:text-base">
              Partner with Skyline to secure premium, highly professional talent
              for your upcoming luxury brand activations, yacht gatherings,
              international campaigns, or private social experiences. Let us
              handle the details seamlessly.
            </p>
          </div>

          {/* Client Action Button */}
          <div className="mt-auto pt-4">
            <Button href="#contact-clients">Book Talent</Button>
          </div>
        </div>

        {/* --- RIGHT SIDE: FOR MODELS --- */}
        <div className="group bg-agency-onyx md:bg-agency-obsidian hover:bg-agency-onyx/50 relative flex flex-col items-start justify-between p-12 transition-colors duration-500 md:p-20">
          <div className="max-w-md">
            <span className="text-agency-gold mb-4 block font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
              For Models
            </span>
            <h2 className="text-agency-cream mb-6 font-serif text-3xl leading-tight tracking-wide uppercase md:text-4xl lg:text-5xl">
              Join The <br />
              <span className="text-agency-champagne font-normal lowercase italic">
                Roster
              </span>
            </h2>
            <p className="text-agency-silver mb-8 font-sans text-sm leading-relaxed md:text-base">
              We provide exclusive representation for outstanding talent,
              connecting you with elite global opportunities, luxury hospitality
              partnerships, and premium international showcases. Build your
              career in secure, curated environments.
            </p>
          </div>

          {/* Model Action Button */}
          <div className="mt-auto pt-4">
            <Button href="#contact-models">Apply Instantly</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
