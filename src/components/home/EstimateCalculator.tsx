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
    <section className="bg-dark py-24 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Smart Feature</p>
            <h2 className="text-4xl md:text-6xl font-black text-white italic mb-6">GET AN <span className="text-primary">ESTIMATE</span></h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Planning your dream project in Kerala? Use our smart tool to get a rough breakdown of construction costs based on current market rates.
            </p>
            
            <div className="space-y-8 max-w-md">
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Ruler className="h-4 w-4 text-primary" /> Total Area (sq. ft.)
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="50"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-white font-black text-2xl">
                  <span>{area} <small className="text-xs text-gray-500">SQ.FT</small></span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Building2 className="h-4 w-4 text-primary" /> Construction Quality
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(RATES) as Array<keyof typeof RATES>).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-3 rounded-sm text-xs font-black uppercase tracking-tighter transition-all ${
                        tier === t ? "bg-primary text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  <Calculator className="h-4 w-4 text-primary" /> Number of Floors
                </label>
                <div className="flex gap-4">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFloors(f)}
                      className={`flex-1 py-3 rounded-sm text-lg font-black transition-all ${
                        floors === f ? "bg-primary text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative p-12 bg-primary group overflow-hidden rounded-sm transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Wallet className="h-24 w-24 text-black" />
              </div>
              
              <div className="relative z-10">
                <p className="text-black font-black uppercase tracking-widest text-xs mb-2">Estimated Total Cost</p>
                <div className="text-4xl md:text-6xl font-black text-black mb-1">
                  ₹{(estimate / 100000).toFixed(1)}<span className="text-2xl">L - </span>₹{((estimate * 1.05) / 100000).toFixed(1)}<span className="text-2xl">L</span>
                </div>
                <p className="text-black/60 text-sm font-bold uppercase mb-8">*Approx. market rate in Kerala</p>
                
                <div className="space-y-4 border-t border-black/10 pt-6">
                  <div className="flex justify-between items-center text-black font-bold uppercase text-xs">
                    <span>Steel & Cement</span>
                    <span>~45%</span>
                  </div>
                  <div className="flex justify-between items-center text-black font-bold uppercase text-xs">
                    <span>Labor Charges</span>
                    <span>~30%</span>
                  </div>
                  <div className="flex justify-between items-center text-black font-bold uppercase text-xs">
                    <span>Finishing (Tiles, Paint)</span>
                    <span>~25%</span>
                  </div>
                </div>

                <button className="mt-10 w-full bg-black text-white py-5 font-black uppercase tracking-widest hover:bg-gray-900 transition-colors">
                  Download Full Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
