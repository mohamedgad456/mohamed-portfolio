export default function Button({
  children,
  href,
  variant = "primary",
  download = false,
  target,
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          isPrimary
            ? "bg-white text-black hover:bg-cyan-300"
            : "border border-white/15 text-white hover:border-cyan-400/50 hover:text-cyan-300"
        }
      `}
    >
      {children}

      <span className="text-base transition-transform duration-300 hover:translate-x-1">
        →
      </span>
    </a>
  );
}