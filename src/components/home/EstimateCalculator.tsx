"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";
import { site } from "@/lib/site";

const RATES = {
  basic: 1900,
  premium: 2300,
  luxury: 2800,
};

export function EstimateCalculator() {
  const [area, setArea] = useState<number>(1000);
  const [tier, setTier] = useState<keyof typeof RATES>("premium");
  const [floors, setFloors] = useState<number>(1);

  const estimate = area * RATES[tier] * floors;

  const msg = [
    `📐 *PROJECT APPRAISAL REQUEST*`,
    `--------------------------`,
    `🏠 *Area:* ${area} sq.ft`,
    `✨ *Tier:* ${tier.toUpperCase()}`,
    `🏢 *Floors:* ${floors}`,
    `💰 *Estimated Value:* ₹${(estimate / 100000).toFixed(1)}L`,
    `--------------------------`,
    `I would like to request a detailed specification for this project.`
  ].join("\n");

  const waUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* ── Left: Controls ── */}
          <div className="flex-1 w-full">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
              VALUATION TOOL
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight mb-8">
              Project <em className="not-italic text-[#C9A96E]">Appraisal</em> <br />
              Tool
            </h2>
            <p className="text-[#666666] text-base mb-14 max-w-md">
              An intelligent framework for high-fidelity cost distribution analysis,
              tailored for Kerala&apos;s construction market.
            </p>

            <div className="space-y-12 max-w-md">
              {/* Area slider */}
              <div className="space-y-4">
                <label htmlFor="area-input" className="flex items-center justify-between text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">
                  <span>Dimensional Area</span>
                  <span className="text-[#C9A96E] font-serif text-lg normal-case">{area} sq.ft</span>
                </label>
                <input
                  id="area-input"
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[9px] text-[#999] font-bold">
                  <span>500</span><span>5,000 sq.ft</span>
                </div>
              </div>

              {/* Craftsmanship tier */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">
                  Craftsmanship Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(RATES) as Array<keyof typeof RATES>).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-4 text-[10px] font-bold uppercase tracking-[0.15em] transition-all border ${
                        tier === t
                          ? "border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/5"
                          : "border-zinc-200 text-[#999] hover:text-[#1A1A1A] hover:border-zinc-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-[#999] font-bold">
                  {(Object.entries(RATES) as [keyof typeof RATES, number][]).map(([t, rate]) => (
                    <span key={t}>₹{(rate / 1000).toFixed(1)}k/sqft</span>
                  ))}
                </div>
              </div>

              {/* Floors */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">
                  Vertical Elevation (Floors)
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFloors(f)}
                      className={`flex-1 py-4 text-2xl font-serif transition-all border ${
                        floors === f
                          ? "border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/5"
                          : "border-zinc-200 text-[#999] hover:text-[#1A1A1A] hover:border-zinc-400"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Output panel (dark bg, gold number) ── */}
          <div className="flex-1 w-full lg:max-w-[480px]">
            <div className="bg-[#111111] p-12 md:p-16 relative overflow-hidden">
              {/* Decorative bg icon */}
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Wallet className="h-32 w-32 text-[#C9A96E]" />
              </div>

              <div className="relative z-10">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] mb-6">
                  Estimated Capital Requisite
                </p>

                {/* Gold number */}
                <div className="text-6xl md:text-8xl font-serif text-[#C9A96E] mb-2 leading-none">
                  ₹{(estimate / 100000).toFixed(1)}
                  <span className="text-3xl">L</span>
                </div>
                <p className="text-[10px] text-[#C9A96E]/50 font-bold uppercase tracking-[0.2em] mb-12">
                  Market Calibration: Kerala Standard
                </p>

                {/* Breakdown */}
                <div className="space-y-5 border-t border-white/10 pt-10">
                  {[
                    { label: "Structural Framework", val: "~45%" },
                    { label: "Artisanal Labor", val: "~30%" },
                    { label: "Signature Finishing", val: "~25%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.15em]">
                      <span className="text-white/40">{item.label}</span>
                      <span className="text-white/70">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 flex items-center justify-center w-full border border-[#C9A96E] text-[#C9A96E] py-5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300"
                >
                  Request Detailed Specification
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
