import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import NavLink from "./NavLink";
import { useTranslation } from "react-i18next";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentinelRef = useRef(null);
  const { t, i18n } = useTranslation();

  // IntersectionObserver for tracking whether page was scrolled
  useEffect(function () {
    const observer = new IntersectionObserver(
      function ([entry]) {
        if (entry.isIntersecting) setIsPageScrolled(false);
        else setIsPageScrolled(true);
      },
      {
        root: null,
        threshold: 0,
      },
    );
    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when full-screen mobile menu is overlaying
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Safe fallback comparison check for abbreviation changes
  const currentLang = i18n.language || "en";

  // Dynamic Translation Array for Mobile Renders
  const mobileLinks = [
    { name: t("header.how"), href: "#how", index: "01" },
    { name: t("header.gallery"), href: "#gallery", index: "02" },
    { name: t("header.about"), href: "#about", index: "03" },
    { name: t("header.contacts"), href: "#contacts", index: "04" },
  ];

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 left-0 h-1 w-full"
      ></div>

      <header
        className={`bg-agency-onyx border-agency-charcoal/20 fixed top-0 left-0 z-50 w-full border-b transition-all ${
          isPageScrolled ? "h-18 py-3" : "h-22 py-3 sm:h-26 sm:py-5"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex h-full items-center">
            <Logo />
          </a>
          
          {/* --- DESKTOP NAVIGATION --- */}
          <ul className="hidden items-center gap-10 md:flex">
            <NavLink to="#how" isPageScrolled={isPageScrolled}>
              {t("header.how")}
            </NavLink>
            <NavLink to="#gallery" isPageScrolled={isPageScrolled}>
              {t("header.gallery")}
            </NavLink>
            <NavLink to="#about" isPageScrolled={isPageScrolled}>
              {t("header.about")}
            </NavLink>
            <NavLink to="#contacts" isPageScrolled={isPageScrolled}>
              {t("header.contacts")}
            </NavLink>
          </ul>

          {/* --- DESKTOP RIGHT CONTROLS (CTA + SWITCHER) --- */}
          <div className="hidden items-center gap-6 md:flex">
            <Button
              href="#cta"
              size={isPageScrolled ? "small" : "medium"}
              scaleOnScreenSize={true}
            >
              {t("header.cta")}
            </Button>
            
            {/* Positioned on the absolute right edge */}
            <div className="flex items-center font-sans text-xs font-semibold tracking-widest text-agency-silver uppercase border-l border-agency-charcoal/40 pl-6 h-4">
              <button
                onClick={() => toggleLanguage("en")}
                className={`transition-colors duration-300 focus:outline-none cursor-pointer ${
                  currentLang.startsWith("en") ? "text-agency-gold" : "text-agency-silver/40 hover:text-agency-silver"
                }`}
              >
                EN
              </button>
              <span className="mx-2 text-agency-charcoal/40 select-none">/</span>
              <button
                onClick={() => toggleLanguage("ukr")}
                className={`transition-colors duration-300 focus:outline-none cursor-pointer ${
                  currentLang.startsWith("uk") ? "text-agency-gold" : "text-agency-silver/40 hover:text-agency-silver"
                }`}
              >
                UKR
              </button>
            </div>
          </div>

          {/* --- MOBILE HAMBURGER TOGGLE --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-6 w-6 cursor-pointer flex-col items-center justify-center focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span
              className={`bg-agency-cream h-px w-full origin-center transition-all duration-300 ease-out ${
                isMenuOpen ? "absolute rotate-45" : "mb-1.5"
              }`}
            />

            {/* Middle Line */}
            <span
              className={`bg-agency-cream h-px w-full transition-all duration-300 ease-out ${
                isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom Line */}
            <span
              className={`bg-agency-cream h-px w-full origin-center transition-all duration-300 ease-out ${
                isMenuOpen ? "absolute -rotate-45" : "mt-1.5"
              }`}
            />
          </button>
        </nav>

        {/* --- REDESIGNED MOBILE OVERLAY LAYER --- */}
        <div
          className={`bg-agency-obsidian/98 fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto backdrop-blur-md transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }`}
        >
          {/* Main Menu Context Area */}
          <div className="mx-auto flex w-full max-w-lg flex-col px-8 pt-32">
            
            {/* Header Plate for Mobile Menu: Category Tag + Integrated Switcher */}
            <div className="border-agency-charcoal/40 mb-8 flex items-center justify-between border-b pb-4">
              <span className="text-agency-gold font-sans text-[10px] tracking-[0.4em] uppercase">
                Navigation
              </span>
              
              {/* Refined Mobile Language Switcher */}
              <div className="flex items-center font-sans text-[11px] font-bold tracking-widest uppercase">
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`py-1 transition-colors ${
                    currentLang.startsWith("en") ? "text-agency-gold" : "text-agency-silver/30"
                  }`}
                >
                  EN
                </button>
                <span className="text-agency-charcoal/40 mx-2 select-none">/</span>
                <button
                  onClick={() => toggleLanguage("ukr")}
                  className={`py-1 transition-colors ${
                    currentLang.startsWith("uk") ? "text-agency-gold" : "text-agency-silver/30"
                  }`}
                >
                  UKR
                </button>
              </div>
            </div>

            {/* Elegant Editorial Menu Links Grid */}
            <nav className="flex flex-col">
              {mobileLinks.map((link) => (
                <a
                  key={link.index}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className="group border-agency-charcoal/20 text-agency-cream active:text-agency-gold flex items-baseline justify-between border-b py-5 transition-all duration-300"
                >
                  {/* Label Title */}
                  <span className="font-serif text-2xl tracking-wide uppercase transition-transform duration-300 group-active:translate-x-1">
                    {link.name}
                  </span>
                  {/* Asymmetric Micro Numbering */}
                  <span className="text-agency-bronze font-sans text-[10px] font-light tracking-widest">
                    {link.index}
                  </span>
                </a>
              ))}
            </nav>

            {/* Clean CTA Placement */}
            <div className="mt-12">
              <Button
                href="#cta"
                size="medium"
                onClick={handleMobileLinkClick}
                className="w-full justify-center text-center"
              >
                {t("header.cta")}
              </Button>
            </div>
          </div>

          {/* Refined Institutional Bottom Plate */}
          <div className="text-agency-silver/30 mx-auto flex w-full max-w-lg items-center justify-between px-8 pt-12 pb-8 font-sans text-[9px] tracking-[0.25em] uppercase">
            <span className="flex items-center gap-2">
              <span className="bg-agency-gold inline-block h-1 w-1 animate-pulse rounded-full" />
              Skyline Talent
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;