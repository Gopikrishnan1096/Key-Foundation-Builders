"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Matches `Header` row height so content clears the fixed bar. */
export function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      id="main-content"
      className={
        isHome
          ? "pt-[5.75rem] sm:pt-[6.25rem]"
          : "pt-[4.5rem] sm:pt-20"
      }
    >
      {children}
    </main>
  );
}
