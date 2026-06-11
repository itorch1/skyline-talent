import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import NavLink from "./NavLink";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentinelRef = useRef(null);

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

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 left-0 h-1 w-full"
      ></div>

      <header
        className={`bg-agency-onyx border-agency-charcoal/20 fixed top-0 left-0 z-50 w-full border-b transition-all ${isPageScrolled ? "h-18 py-3" : "h-22 py-3 sm:h-26 sm:py-5"}`}
      >
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex h-full items-center">
            <Logo />
          </a>
          <ul className={`hidden items-center gap-12 md:flex`}>
            <NavLink to="#how" isPageScrolled={isPageScrolled}>
              How It Works
            </NavLink>
            <NavLink to="#gallery" isPageScrolled={isPageScrolled}>
              Gallery
            </NavLink>
            <NavLink to="#about" isPageScrolled={isPageScrolled}>
              About Us
            </NavLink>
            <NavLink to="#contacts" isPageScrolled={isPageScrolled}>
              Contacts
            </NavLink>
            <li>
              <Button
                href="#cta"
                size={isPageScrolled ? "small" : "medium"}
                scaleOnScreenSize={true}
              >
                Request Talent
              </Button>
            </li>
          </ul>

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
            {/* Micro Category Tag */}
            <span className="text-agency-gold border-agency-charcoal/40 mb-8 border-b pb-4 font-sans text-[10px] tracking-[0.4em] uppercase">
              Navigation
            </span>

            {/* Elegant Editorial Menu Links Grid */}
            <nav className="flex flex-col">
              {[
                { name: "How It Works", href: "#how", index: "01" },
                { name: "Gallery", href: "#gallery", index: "02" },
                { name: "About Us", href: "#about", index: "03" },
                { name: "Contacts", href: "#contacts", index: "04" },
              ].map((link) => (
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
                Request Talent
              </Button>
            </div>
          </div>

          {/* Refined Institutional Bottom Plate */}
          <div className="text-agency-silver/30 mx-auto flex w-full max-w-lg items-center justify-between px-8 pt-12 pb-8 font-sans text-[9px] tracking-[0.25em] uppercase">
            <span className="flex items-center gap-2">
              <span className="bg-agency-gold inline-block h-1 w-1 animate-pulse rounded-full" />
              SKyline Talent
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
