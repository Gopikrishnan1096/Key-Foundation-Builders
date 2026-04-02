import Image from "next/image";
import Link from "next/link";

type Props = {
  /** Header: compact; footer: a bit larger */
  variant?: "header" | "footer";
  withLink?: boolean;
  className?: string;
};

const imgSize = {
  /** 2× asset for sharp rendering on retina */
  header: { width: 640, height: 280 },
  footer: { width: 560, height: 240 },
} as const;

export function Logo({
  variant = "header",
  withLink = true,
  className = "",
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
          ? `h-11 w-auto max-h-12 max-w-[12.5rem] object-contain object-left sm:h-12 sm:max-h-14 sm:max-w-[15rem] md:max-w-[16.5rem] ${className}`
          : `h-12 w-auto max-w-[17rem] object-contain object-left sm:h-14 sm:max-w-[19rem] ${className}`
      }
      priority={isHeader}
    />
  );

  if (!withLink) return img;

  return (
    <Link
      href="/"
      className={
        isHeader
          ? `group flex max-w-[min(100%,18rem)] shrink-0 items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm ring-1 ring-slate-200/80 outline-none backdrop-blur-sm transition hover:bg-white hover:ring-slate-300/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:px-3 sm:py-2 ${className}`
          : `flex shrink-0 items-center outline-none ring-offset-2 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent ${className}`
      }
    >
      {img}
    </Link>
  );
}
