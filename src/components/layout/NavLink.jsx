function NavLink({ children, to, isPageScrolled }) {
  return (
    <li>
      <a
        href={to}
        className={`text-agency-silver hover:text-agency-champagne transition-color duration-300 ${isPageScrolled ? "text-lg" : "xl:text-xl text-lg"}`}
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
