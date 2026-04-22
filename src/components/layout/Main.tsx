"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** 
 * Hero page gets no top padding — the fixed transparent header floats over
 * the full-screen hero. Non-home pages get padding to clear the fixed black bar.
 */
export function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      id="main-content"
      className={isHome ? "" : "pt-[4.5rem] sm:pt-20"}
    >
      {children}
    </main>
  );
}
