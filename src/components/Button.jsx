export default function Button({
  children,
  href,
  variant = "primary",
  download = false,
  target,
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        group
        inline-flex
        w-fit
        shrink-0
        items-center
        justify-center
        gap-3
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          variant === "primary"
            ? "bg-white text-black hover:bg-cyan-300"
            : "border border-white/15 bg-transparent text-white hover:border-cyan-400/50 hover:text-cyan-300"
        }
      `}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}