import { useState } from "react";
import Button from "../components/ui/Button";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("clients"); // "clients" or "models"

  const stepKey = activeTab === "clients" ? "clientSteps" : "modelSteps";

  const currentSteps = [
    {
      number: "01",
      title: t(`howItWorks.${stepKey}.one.title`),
      description: t(`howItWorks.${stepKey}.one.desc`),
    },
    {
      number: "02",
      title: t(`howItWorks.${stepKey}.two.title`),
      description: t(`howItWorks.${stepKey}.two.desc`),
    },
    {
      number: "03",
      title: t(`howItWorks.${stepKey}.three.title`),
      description: t(`howItWorks.${stepKey}.three.desc`),
    },
  ];

  return (
    <section
      className="bg-agency-obsidian border-agency-charcoal relative z-20 scroll-mt-18 border-t py-24 md:py-32"
      id="how"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <span className="text-agency-gold mb-3 font-sans text-xs font-medium tracking-[0.3em] uppercase md:text-sm">
            {t("howItWorks.tag")}
          </span>
          <h2 className="text-agency-cream font-serif text-3xl tracking-wide uppercase md:text-5xl">
            {t("howItWorks.title")}
          </h2>

          {/* --- MONOLITHIC LINE SWITCHER --- */}
          <div className="border-agency-charcoal/40 mt-10 flex gap-12 border-b pb-px">
            <button
              onClick={() => setActiveTab("clients")}
              className={`relative cursor-pointer pb-4 font-sans text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === "clients"
                  ? "text-agency-gold"
                  : "text-agency-silver hover:text-agency-cream"
              }`}
            >
              {t("howItWorks.switchers.clients")}
              {activeTab === "clients" && (
                <div className="from-agency-bronze to-agency-gold absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("models")}
              className={`relative cursor-pointer pb-4 font-sans text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === "models"
                  ? "text-agency-gold"
                  : "text-agency-silver hover:text-agency-cream"
              }`}
            >
              {t("howItWorks.switchers.models")}
              {activeTab === "models" && (
                <div className="from-agency-bronze to-agency-gold absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r" />
              )}
            </button>
          </div>
        </div>

        {/* --- STEP CARDS GRID --- */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 lg:gap-12">
          {currentSteps.map((step) => (
            <div
              key={step.number}
              className="group bg-agency-onyx border-agency-charcoal/60 hover:border-agency-bronze/40 relative flex flex-col justify-between border p-8 shadow-xl transition-all duration-500 md:p-10"
            >
              {/* Subtle top decorative accent line that glows on hover */}
              <div className="from-agency-champagne to-agency-gold absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full" />

              <div>
                {/* Large Subtle Number Display */}
                <div className="text-agency-bronze/40 group-hover:text-agency-gold/60 mb-6 font-serif text-4xl font-light tracking-wider transition-colors duration-300 md:text-5xl">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-agency-cream mb-4 font-serif text-xl tracking-wide md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-agency-silver font-sans text-sm leading-relaxed md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- CONTEXTUAL BOTTOM CALL TO ACTION --- */}
        <div className="animate-fade-in mt-16 text-center">
          {activeTab === "clients" ? (
            <Button href="#contact-clients">
              {t("howItWorks.ctas.clients")}
            </Button>
          ) : (
            <Button href="#contact-models">
              {t("howItWorks.ctas.models")}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
