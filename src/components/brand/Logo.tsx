import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "header" | "footer";
  withLink?: boolean;
  className?: string;
  /**
   * Strong contrast when header sits on dark hero (frosted pill + shadow).
   * False = default light header bar.
   */
  onDarkBackground?: boolean;
};

const imgSize = {
  header: { width: 640, height: 280 },
  footer: { width: 560, height: 240 },
} as const;

export function Logo({
  variant = "header",
  withLink = true,
  className = "",
  onDarkBackground = false,
}: Props) {
  const isHeader = variant === "header";

  const img = (
    <Image
      src="/logo.png"
      alt="Key Foundation Builders"
      width={imgSize[variant].width}
      height={imgSize[variant].height}
      sizes={
        isHeader
          ? "(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
          : "(max-width: 640px) 240px, 280px"
      }
      className={
        isHeader
          ? `h-11 w-auto max-h-12 max-w-[12.5rem] object-contain object-left sm:h-12 sm:max-h-14 sm:max-w-[15rem] md:max-w-[16.5rem] ${
              onDarkBackground
                ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
                : ""
            } ${className}`
          : `h-12 w-auto max-w-[17rem] object-contain object-left sm:h-14 sm:max-w-[19rem] ${className}`
      }
      priority={isHeader}
    />
  );

  if (!withLink) return img;

  const headerLinkClass = onDarkBackground
    ? "group flex max-w-[min(100%,18rem)] shrink-0 items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-2 ring-white/80 outline-none backdrop-blur-md transition hover:bg-white hover:ring-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary/50 sm:px-3 sm:py-2"
    : "group flex max-w-[min(100%,18rem)] shrink-0 items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm ring-1 ring-slate-200/80 outline-none backdrop-blur-sm transition hover:bg-white hover:ring-slate-300/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:px-3 sm:py-2";

  return (
    <Link
      href="/"
      className={
        isHeader
          ? `${headerLinkClass} ${className}`
          : `flex shrink-0 items-center outline-none ring-offset-2 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent ${className}`
      }
    >
      {img}
    </Link>
  );
}
