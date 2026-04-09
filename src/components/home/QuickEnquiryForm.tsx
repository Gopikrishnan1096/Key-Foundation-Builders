"use client";

import { useState } from "react";
import { MessageCircle, User, Phone, ChevronDown, Send } from "lucide-react";
import { site } from "@/lib/site";

const projectTypes = [
  "New House Construction",
  "Commercial Building",
  "Warehouse / Industrial",
  "House Renovation",
  "Interior & Finishing",
  "Other / Not Sure Yet",
];

export function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `🚀 *NEW LEAD FROM WEBSITE*`,
      `--------------------------`,
      `👤 *Name:* ${name || "–"}`,
      `📞 *Phone:* ${phone || "–"}`,
      `📍 *Location:* ${location || "–"}`,
      `🏗️ *Project:* ${projectType || "–"}`,
      `💰 *Budget:* ${budget || "–"}`,
      `--------------------------`,
      `Please contact this lead ASAP.`,
    ].join("\n");

    const waUrl = `https://wa.me/919645767050?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="w-full bg-white/50 p-8 md:p-10 border border-zinc-200 backdrop-blur-3xl">
      <div className="mb-10">
        <h3 className="text-2xl font-serif text-zinc-900 italic">Signature Inquiry</h3>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Personalized Consultation</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Identity</label>
          <div className="relative">
            <User className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-zinc-200 bg-transparent py-4 pl-8 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Contact Number</label>
            <div className="relative">
              <Phone className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-zinc-200 bg-transparent py-4 pl-8 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400"
              />
            </div>
          </div>
          {/* Location */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Desired Location</label>
            <input
              required
              type="text"
              placeholder="E.g. Kochi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-b border-zinc-200 bg-transparent py-4 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Architectural Interest</label>
          <div className="relative">
            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <select
              aria-label="Project Type"
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full appearance-none border-b border-zinc-200 bg-transparent py-4 text-sm text-zinc-900 outline-none transition-all focus:border-primary"
            >
              <option value="" className="bg-white">Select Project Type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitted}
          className={`group mt-8 flex w-full items-center justify-center gap-4 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
            submitted
              ? "bg-green-600 text-white"
              : "bg-primary text-white hover:bg-zinc-900"
          }`}
        >
          {submitted ? (
            <>✓ Dispatched</>
          ) : (
            <>
              Request Presentation
              <Send className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
