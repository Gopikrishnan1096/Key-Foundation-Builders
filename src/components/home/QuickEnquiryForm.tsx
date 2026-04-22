"use client";

import { useState } from "react";
import { MessageCircle, User, Phone, ChevronDown, Send, MapPin } from "lucide-react";
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
      `--------------------------`,
      `Please contact this lead ASAP.`,
    ].join("\n");

    const waUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <FloatingInput
        id="enquiry-name"
        label="Full Name"
        type="text"
        required
        value={name}
        onChange={setName}
        icon={<User className="h-4 w-4" />}
      />

      <div className="grid grid-cols-2 gap-6">
        {/* Phone */}
        <FloatingInput
          id="enquiry-phone"
          label="Phone"
          type="tel"
          required
          value={phone}
          onChange={setPhone}
          icon={<Phone className="h-4 w-4" />}
        />
        {/* Location */}
        <FloatingInput
          id="enquiry-location"
          label="Location"
          type="text"
          required
          value={location}
          onChange={setLocation}
          icon={<MapPin className="h-4 w-4" />}
        />
      </div>

      {/* Project Type */}
      <div className="relative group">
        <ChevronDown className="pointer-events-none absolute right-0 bottom-4 h-4 w-4 text-[#999]" />
        <select
          aria-label="Project Type"
          required
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full appearance-none bg-transparent border-b border-zinc-300 py-4 pr-8 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#C9A96E] text-[#666]"
        >
          <option value="">Select Project Type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-white">
              {t}
            </option>
          ))}
        </select>
        <div className="h-[1px] w-0 bg-[#C9A96E] absolute bottom-0 left-0 transition-all duration-300 group-focus-within:w-full" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className={`group mt-6 flex w-full items-center justify-center gap-4 py-5 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
          submitted
            ? "bg-green-700 text-white"
            : "bg-[#0A0A0A] text-white hover:bg-[#C9A96E] hover:text-[#0A0A0A]"
        }`}
      >
        {submitted ? (
          <>✓ Message Dispatched</>
        ) : (
          <>
            Send Enquiry
            <Send className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

// ── Floating label input ─────────────────────────────────────────────────────
function FloatingInput({
  id,
  label,
  type,
  required,
  value,
  onChange,
  icon,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || !!value;

  return (
    <div className="relative group">
      {/* Floating label */}
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium ${
          lifted
            ? "top-0 text-[9px] text-[#C9A96E] uppercase tracking-[0.2em]"
            : "top-4 text-sm text-[#999]"
        }`}
      >
        {label}
      </label>

      <div className="flex items-center gap-2 border-b border-zinc-300 focus-within:border-[#C9A96E] transition-colors relative">
        {icon && (
          <span className={`text-[#999] transition-colors mt-4 ${lifted ? "text-[#C9A96E]" : ""}`}>
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent pt-5 pb-2 text-sm text-[#1A1A1A] outline-none placeholder-transparent"
        />
      </div>
    </div>
  );
}
