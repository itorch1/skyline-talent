function NavLink({ children, to, isPageScrolled }) {
  return (
    <li>
      <a
        href={to}
        className={`text-agency-silver hover:text-agency-champagne transition-color duration-300 ${isPageScrolled ? "text-lg" : "text-xl"}`}
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
