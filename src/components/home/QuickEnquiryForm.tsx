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
    <div className="w-full rounded-sm border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-black text-white uppercase italic tracking-wider">GET A <span className="text-primary">QUOTE</span></h3>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Free Consultation & Estimate</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <input
              required
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-sm border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white outline-none transition focus:border-primary focus:bg-white/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Phone */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <input
                required
                type="tel"
                placeholder="9645..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-sm border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white outline-none transition focus:border-primary"
              />
            </div>
          </div>
          {/* Location */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Location</label>
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Kochi, Kerala"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-sm border border-white/10 bg-white/5 py-3 px-3 text-sm text-white outline-none transition focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-1 text-white">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Project Type</label>
          <div className="relative">
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <select
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full appearance-none rounded-sm border border-white/10 bg-white/5 py-3 pl-4 pr-10 text-sm text-white outline-none transition focus:border-primary"
            >
              <option value="" className="bg-black">Select Type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-black">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget Range */}
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Approx Budget</label>
          <input
            type="text"
            placeholder="e.g. 50 Lakhs"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 py-3 px-4 text-sm text-white outline-none transition focus:border-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitted}
          className={`flex w-full items-center justify-center gap-3 rounded-sm py-4 text-sm font-black uppercase tracking-widest transition-all ${
            submitted
              ? "bg-green-600 text-white"
              : "bg-primary text-black hover:bg-white hover:scale-[1.02]"
          }`}
        >
          {submitted ? (
            <>✓ Lead Sent via WhatsApp</>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}
