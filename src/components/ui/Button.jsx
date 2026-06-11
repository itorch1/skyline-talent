const classNameBase =
  "bg-gradient-to-r from-agency-bronze via-agency-champagne to-agency-gold transition-all " +
  "bg-[length:200%_auto] bg-left text-agency-obsidian font-sans font-medium tracking-wide " +
  "hover:bg-right hover:text-agency-obsidian " +
  "transition-[background-position] duration-300 ease-out inline-block shadow-lg shadow-agency-gold/10 ";

const sizes = {
  medium: "px-6 py-4 text-xl",
  small: "px-4 py-2 text-lg",
  mediumDynamic: "px-4 py-2 text-lg lg:px-6 lg:py-4 lg:text-xl",
};

function Button({
  children,
  href,
  onClick,
  size = "medium",
  scaleOnScreenSize = false,
}) {
  const className =
    classNameBase + `${scaleOnScreenSize && size!== 'small' ? sizes.mediumDynamic : sizes[size]}`;

  if (href)
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
