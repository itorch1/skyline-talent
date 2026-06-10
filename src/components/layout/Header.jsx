import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import NavLink from "./NavLink";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const sentinelRef = useRef(null);

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
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 left-0 h-1 w-full"
      ></div>

      <header className={`bg-agency-onyx fixed top-0 left-0 z-50 w-full transition-all ${isPageScrolled ? 'h-22 py-3' : 'h-34 py-5'}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-full">
          <a href="#" className="h-full">
            <Logo />
          </a>
          <ul className="flex items-center gap-12">
            <NavLink to="#how" isPageScrolled={isPageScrolled}>How It Works</NavLink>
            <NavLink to="#gallery" isPageScrolled={isPageScrolled}>Gallery</NavLink>
            <NavLink to="#about" isPageScrolled={isPageScrolled}>About Us</NavLink>
            <NavLink to="#contacts" isPageScrolled={isPageScrolled}>Contacts</NavLink>
            <li>
              <Button href="#cta" size={isPageScrolled ? 'small' : 'medium'}>Request Talent</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
