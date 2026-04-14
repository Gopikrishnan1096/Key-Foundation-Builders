import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

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
  header: { width: 581, height: 682 },
  footer: { width: 581, height: 682 },
} as const;

export function Logo({
  variant = "header",
  withLink = true,
  className = "",
  onDarkBackground = false,
  isHome = false,
}: Props) {
  const isHeader = variant === "header";

  /** Strong white hale so black logos are visible on dark hero */
  const darkHeroFilter =
    "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.8))_drop-shadow(0_0_15px_rgba(255,255,255,0.6))] bg-white/10 rounded-xl p-1";

  const headerImgClass =
    isHome && isHeader
      ? `w-[54.51px] h-[64px] object-contain object-left ${
          onDarkBackground ? darkHeroFilter : ""
        }`
      : isHeader
        ? `h-14 w-auto max-w-[8rem] object-contain object-left sm:h-16 sm:max-w-[10rem] md:h-16 md:max-w-[12rem] ${
            onDarkBackground ? darkHeroFilter : ""
          }`
        : "";

  const img = (
    <Image
      src="/logo.png"
      alt={site.name}
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
          : `h-24 w-auto max-w-[12rem] object-contain object-left sm:h-32 sm:max-w-[16rem] ${className}`
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
