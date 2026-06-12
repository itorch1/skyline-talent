import Logo from "../ui/Logo";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-agency-obsidian text-agency-silver border-agency-charcoal relative z-20 border-t pt-24 pb-8"
      id="contacts"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* --- MAIN STRUCTURE GRID --- */}
        <div className="grid grid-cols-1 gap-16 pb-20 md:grid-cols-12 lg:gap-8">
          
          {/* LEFT SIDE: Brand Identity Block (Spans 5 Columns) */}
          <div className="flex flex-col items-start md:col-span-5">
            <div className="mb-6 h-16 opacity-95">
              <Logo />
            </div>
            <p className="text-agency-silver max-w-sm font-sans text-xs leading-relaxed tracking-wide uppercase opacity-60">
              {t("footer.tagline")}
            </p>
            <p className="text-agency-silver/80 mt-3 max-w-xs font-sans text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* RIGHT SIDE: Interactive Concierge Registry (Spans 7 Columns) */}
          <div className="flex flex-col md:col-span-7">
            <h4 className="text-agency-gold mb-8 font-serif text-xs font-medium tracking-[0.3em] uppercase">
              {t("footer.registryTitle")}
            </h4>

            <div className="grid grid-cols-1 gap-x-12 gap-y-1 sm:grid-cols-2">
              {/* Box 1: Talent Booking */}
              <div className="group border-agency-charcoal/30 hover:border-agency-bronze/40 flex flex-col justify-between border-b py-4 transition-colors duration-300">
                <span className="text-agency-silver/40 text-[10px] tracking-widest uppercase">
                  {t("footer.boxBooking")}
                </span>
                <a
                  href="mailto:booking@skylinetalent.com"
                  className="text-agency-cream hover:text-agency-champagne mt-2 font-sans text-sm tracking-wide transition-colors"
                >
                  booking@skylinetalent.com
                </a>
              </div>

              {/* Box 2: Secure Telegram Channel */}
              <div className="group border-agency-charcoal/30 hover:border-agency-bronze/40 flex flex-col justify-between border-b py-4 transition-colors duration-300">
                <span className="text-agency-silver/40 text-[10px] tracking-widest uppercase">
                  {t("footer.boxDirect")}
                </span>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-agency-cream hover:text-agency-champagne mt-2 flex items-center justify-between font-sans text-sm tracking-wide transition-colors"
                >
                  <span>{t("footer.boxTelegram")}</span>
                  <span className="text-agency-bronze group-hover:text-agency-gold transform text-xs transition-all group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>

              {/* Box 3: Model Onboarding Scouting */}
              <div className="group border-agency-charcoal/30 hover:border-agency-bronze/40 flex flex-col justify-between border-b py-4 transition-colors duration-300">
                <span className="text-agency-silver/40 text-[10px] tracking-widest uppercase">
                  {t("footer.boxScouting")}
                </span>
                <a
                  href="mailto:join@skylinetalent.com"
                  className="text-agency-cream hover:text-agency-champagne mt-2 font-sans text-sm tracking-wide transition-colors"
                >
                  join@skylinetalent.com
                </a>
              </div>

              {/* Box 4: Secure WhatsApp */}
              <div className="group border-agency-charcoal/30 hover:border-agency-bronze/40 flex flex-col justify-between border-b py-4 transition-colors duration-300">
                <span className="text-agency-silver/40 text-[10px] tracking-widest uppercase">
                  {t("footer.boxChat")}
                </span>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-agency-cream hover:text-agency-champagne mt-2 flex items-center justify-between font-sans text-sm tracking-wide transition-colors"
                >
                  <span>{t("footer.boxWhatsApp")}</span>
                  <span className="text-agency-bronze group-hover:text-agency-gold transform text-xs transition-all group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>

              {/* Box 5: General, Press, & Media */}
              <div className="group border-agency-charcoal/30 hover:border-agency-bronze/40 flex flex-col justify-between border-b py-4 transition-colors duration-300 sm:col-span-2">
                <span className="text-agency-silver/40 text-[10px] tracking-widest uppercase">
                  {t("footer.boxGeneral")}
                </span>
                <a
                  href="mailto:info@skylinetalent.com"
                  className="text-agency-cream hover:text-agency-champagne mt-2 font-sans text-sm tracking-wide transition-colors"
                >
                  info@skylinetalent.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM LEGAL & UTILITIES LAYER --- */}
        <div className="text-agency-silver/40 mt-12 flex flex-col items-center justify-between gap-6 font-sans text-[11px] tracking-widest uppercase sm:flex-row">
          {/* Copyright Statement */}
          <div className="order-2 text-center sm:order-1 sm:text-left">
            © {currentYear} {t("footer.rights")}
          </div>

          {/* Clean Geometric Back to Top Utility */}
          <div className="order-1 sm:order-2">
            <button
              onClick={scrollToTop}
              className="group text-agency-silver/50 hover:text-agency-gold flex cursor-pointer items-center space-x-3 py-1 transition-colors"
            >
              <span>{t("footer.backToTop")}</span>
              <span className="text-agency-bronze group-hover:text-agency-gold transform text-sm transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}