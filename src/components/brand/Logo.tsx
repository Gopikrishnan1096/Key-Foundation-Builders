import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "header" | "footer";
  withLink?: boolean;
  className?: string;
  /** Dark hero behind transparent nav — use drop-shadow only, no box */
  onDarkBackground?: boolean;
  /** Larger mark on the home page */
  isHome?: boolean;
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
  isHome = false,
}: Props) {
  const isHeader = variant === "header";

  /** No white pill — halo keeps the mark readable on dark hero */
  const darkHeroFilter =
    "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.75))_drop-shadow(0_0_12px_rgba(255,255,255,0.2))]";

  const headerImgClass =
    isHome && isHeader
      ? `h-14 w-auto max-w-[18rem] object-contain object-left sm:h-[4.25rem] sm:max-w-[22rem] md:h-[4.75rem] md:max-w-[26rem] ${
          onDarkBackground ? darkHeroFilter : ""
        }`
      : isHeader
        ? `h-11 w-auto max-w-[13rem] object-contain object-left sm:h-12 sm:max-w-[16rem] md:h-14 md:max-w-[17rem] ${
            onDarkBackground ? darkHeroFilter : ""
          }`
        : "";

  const img = (
    <Image
      src="/logo.png"
      alt="Key Foundation Builders"
      width={imgSize[variant].width}
      height={imgSize[variant].height}
      sizes={
        isHeader
          ? isHome
            ? "(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
            : "(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
          : "(max-width: 640px) 240px, 280px"
      }
      className={
        isHeader
          ? `${headerImgClass} ${className}`
          : `h-12 w-auto max-w-[17rem] object-contain object-left sm:h-14 sm:max-w-[19rem] ${className}`
      }
      priority={isHeader}
    />
  );

  if (!withLink) return img;

  const headerLinkClass =
    "inline-flex max-w-[min(100%,28rem)] shrink-0 items-center bg-transparent p-0 outline-none ring-0 ring-offset-0 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    (onDarkBackground ? "focus-visible:ring-offset-primary/40" : "");

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
