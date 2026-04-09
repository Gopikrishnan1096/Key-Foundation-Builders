"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Quote request from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 bg-transparent"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">
          Full Identity
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          autoComplete="name"
          className="w-full border-b border-zinc-200 bg-transparent py-4 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">
          Contact Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          autoComplete="tel"
          className="w-full border-b border-zinc-200 bg-transparent py-4 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">
          Vision / Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full border-b border-zinc-200 bg-transparent py-4 text-sm text-zinc-900 outline-none transition-all focus:border-primary placeholder:text-zinc-400 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:bg-zinc-900"
      >
        Submit Inquiry
      </button>
      {status === "sent" ? (
        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-4" role="status">
          ✓ Inquiry Dispatched to Engineering Team
        </p>
      ) : null}
    </form>
  );
}
