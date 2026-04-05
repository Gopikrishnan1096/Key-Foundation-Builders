export const site = {
  name: "Key Foundation Builders",
  tagline: "Trusted Construction Experts in Kerala",
  siteUrl: "https://www.keyfoundation.in",
  founded: 2014,
  phone: "+91 95266 82306",
  phoneRaw: "919526682306",
  whatsapp: "+91 95266 82306",
  whatsappRaw: "919526682306",
  email: "hello@keyfoundation.in",
  address: {
    line1: "Building No./Flat No. 14/108D, NSS Karayogam No.3095, Parppacode",
    city: "Edakkattuvayal",
    state: "Kerala",
    pin: "682315",
    country: "India",
  },
  mapsUrl: "https://maps.app.goo.gl/mWky1chFCnjeQgTa6",
  mapsEmbed:
    "https://maps.google.com/maps?q=9.863936,76.418773&z=17&output=embed",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  keywords: [
    "construction company Kerala",
    "building contractors Kerala",
    "construction company Kochi",
    "house construction Ernakulam",
    "builders Kochi",
    "home builders Kerala",
    "commercial construction Kerala",
    "warehouse construction Kerala",
    "best builders in Kerala",
    "construction company Thrissur",
    "residential construction Kerala",
    "Key Foundation Builders",
  ],
} as const;

export function fullAddress(): string {
  const { line1, city, state, pin } = site.address;
  return `${line1}, ${city}, ${state} ${pin}`;
}

/** Google Maps embed src — uses the exact pinned coordinates. */
export function mapsEmbedSrc(): string {
  return site.mapsEmbed;
}
