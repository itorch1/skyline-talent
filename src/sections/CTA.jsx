import Button from "../components/ui/Button";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();

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
              {t("ctaSection.clients.tag")}
            </span>
            <h2 className="text-agency-cream mb-6 font-serif text-3xl leading-tight tracking-wide uppercase md:text-4xl lg:text-5xl">
              {t("ctaSection.clients.titleNormal")} <br />
              <span className="text-agency-champagne font-normal lowercase italic">
                {t("ctaSection.clients.titleItalic")}
              </span>
            </h2>
            <p className="text-agency-silver mb-8 font-sans text-sm leading-relaxed md:text-base">
              {t("ctaSection.clients.desc")}
            </p>
          </div>

          {/* Client Action Button */}
          <div className="mt-auto pt-4">
            <Button href="#contact-clients">
              {t("ctaSection.clients.btn")}
            </Button>
          </div>
        </div>

        {/* --- RIGHT SIDE: FOR MODELS --- */}
        <div className="group bg-agency-onyx md:bg-agency-obsidian hover:bg-agency-onyx/50 relative flex flex-col items-start justify-between p-12 transition-colors duration-500 md:p-20">
          <div className="max-w-md">
            <span className="text-agency-gold mb-4 block font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
              {t("ctaSection.models.tag")}
            </span>
            <h2 className="text-agency-cream mb-6 font-serif text-3xl leading-tight tracking-wide uppercase md:text-4xl lg:text-5xl">
              {t("ctaSection.models.titleNormal")} <br />
              <span className="text-agency-champagne font-normal lowercase italic">
                {t("ctaSection.models.titleItalic")}
              </span>
            </h2>
            <p className="text-agency-silver mb-8 font-sans text-sm leading-relaxed md:text-base">
              {t("ctaSection.models.desc")}
            </p>
          </div>

          {/* Model Action Button */}
          <div className="mt-auto pt-4">
            <Button href="#contact-models">
              {t("ctaSection.models.btn")}
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}