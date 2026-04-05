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
  const [projectType, setProjectType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi ${site.name}! I'd like to enquire about a project.`,
      `Name: ${name || "–"}`,
      `Phone: ${phone || "–"}`,
      `Project Type: ${projectType || "Not specified"}`,
      `Please contact me at your earliest convenience. Thank you!`,
    ].join("\n");

    const waUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="w-full rounded-2xl border border-amber-200/60 bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 shadow-sm">
          <MessageCircle className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Free Consultation</p>
          <p className="text-xs text-gray-500">Reply within 1 business day</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          Online
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="enquiry-name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="enquiry-phone"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
          />
        </div>

        {/* Project type */}
        <div className="relative">
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select
            id="enquiry-project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            aria-label="Project Type"
            className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-9 text-sm text-gray-700 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
          >
            <option value="">Project Type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          id="enquiry-submit-btn"
          type="submit"
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold shadow-md transition-all duration-200 ${
            submitted
              ? "bg-green-500 text-white"
              : "bg-amber-400 text-gray-900 hover:bg-amber-500 hover:shadow-lg active:scale-[0.98]"
          }`}
        >
          {submitted ? (
            <>✓ Opening WhatsApp…</>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get Free Quote on WhatsApp
            </>
          )}
        </button>
      </form>

      <p className="mt-3 text-center text-[11px] text-gray-400">
        🔒 Your details are shared only via WhatsApp. No spam.
      </p>
    </div>
  );
}
