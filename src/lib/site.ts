export const site = {
  name: "Key Foundation Builders",
  tagline: "Trusted Construction Experts in Kerala",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "hello@keyfoundation.in",
  address: {
    line1: "Building No. 12, Industrial Estate Road",
    city: "Kochi",
    state: "Kerala",
    pin: "682030",
    country: "India",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export function fullAddress(): string {
  const { line1, city, state, pin } = site.address;
  return `${line1}, ${city}, ${state} ${pin}`;
}

/** URL-encoded query for Google Maps embed (no API key). */
export function mapsEmbedSrc(): string {
  const q = encodeURIComponent(fullAddress());
  return `https://www.google.com/maps?q=${q}&output=embed`;
}
