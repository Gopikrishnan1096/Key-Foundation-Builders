"use client";

import { useState } from "react";
import { Calculator, Ruler, Building2, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";

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

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-zinc-200">
      <Container>
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1">
            <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs font-sans">Valuation Tool</p>
            <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight mb-10">
              Project <br />
              <span className="italic text-primary">Appraisal</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-xl font-sans">
              An intelligent framework for high-fidelity cost distribution analysis, 
              tailored for Kerala's premium architectural market.
            </p>
            
            <div className="space-y-12 max-w-md">
              <div className="space-y-6">
                <label htmlFor="area-input" className="flex items-center gap-4 text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] font-sans">
                  Dimensional Area <span className="text-primary font-serif italic normal-case text-lg ml-auto">{area} SQ.FT</span>
                </label>
                <input 
                  id="area-input"
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="50"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-[1px] bg-zinc-200 appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-6">
                <label className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] font-sans">
                  Craftsmanship Tier
                </label>
                <div className="grid grid-cols-3 gap-6">
                  {(Object.keys(RATES) as Array<keyof typeof RATES>).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${
                        tier === t ? "border-primary text-primary" : "border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] font-sans">
                  Vertical Elevation
                </label>
                <div className="flex gap-6">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFloors(f)}
                      className={`flex-1 py-4 text-xl font-serif transition-all border ${
                        floors === f ? "border-primary text-primary" : "border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="relative p-12 md:p-16 bg-slate-50 border border-zinc-200 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Wallet className="h-32 w-32 text-primary" />
              </div>
              
              <div className="relative z-10">
                <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 font-sans">Estimated Capital Requisite</p>
                <div className="text-5xl md:text-7xl font-serif text-zinc-900 mb-2 leading-none">
                  ₹{(estimate / 100000).toFixed(1)}<span className="text-2xl text-primary">L </span>
                </div>
                <p className="text-primary/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 font-sans italic">Market Calibration: Kerala Standard</p>
                
                <div className="space-y-6 border-t border-zinc-200 pt-10">
                  {[
                    { label: "Structural Framework", val: "~45%" },
                    { label: "Artisanal Labor", val: "~30%" },
                    { label: "Signature Finishing", val: "~25%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                      <span className="text-zinc-500">{item.label}</span>
                      <span className="text-zinc-900">{item.val}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-16 w-full bg-primary text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all">
                  Request Detailed Specification
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
