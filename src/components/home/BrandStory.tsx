import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { site } from "@/lib/site";

export function BrandStory() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592be585d5f8?auto=format&fit=crop&q=80&w=1000"
              alt="Architectural details"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-[20px] border-white/20 m-8" />
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Legacy</p>
              <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
                Built on <br />
                <span className="italic text-primary">Strong Foundations</span>
              </h2>
            </div>
            
            <p className="text-zinc-600 text-lg leading-relaxed">
              At Key Foundation Builders, we believe strength, safety, and trust are non‑negotiable.
              Since {site.founded}, we’ve delivered civil and steel construction projects across Kerala
              with disciplined engineering, quality materials, and transparent execution.
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2 pt-8 border-t border-zinc-200">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">The Vision</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  To build Kerala’s most dependable structures — engineered for durability and delivered with integrity.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">The Mission</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  To provide end‑to‑end civil and steel construction with predictable timelines, quality control, and clear BOQs.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-4xl font-serif text-zinc-900">30+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1 font-bold">Years of Trust</div>
                </div>
                <div className="w-[1px] h-12 bg-zinc-200" />
                <div>
                  <div className="text-4xl font-serif text-zinc-900">100+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1 font-bold">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
