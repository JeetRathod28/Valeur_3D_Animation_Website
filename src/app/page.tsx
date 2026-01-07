import HeroSplit from "@/components/sections/HeroSplit";
import ValueProp from "@/components/sections/ValueProp";
import MechanismReveal from "@/components/sections/MechanismReveal";
import MaterialDetail from "@/components/sections/MaterialDetail";
import DayNightTransition from "@/components/sections/DayNightTransition";
import Philosophy from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <main className="min-h-screen bg-butter">
      {/* 
         BRAND & ACCOUNT NAVIGATION 
         Fixed position to float over the full-screen hero and subsequent sections.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between p-6 md:p-8 lg:p-10 pointer-events-none">
        {/* LEFT: Brand Name */}
        <div className="pointer-events-auto">
          <a
            href="/"
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-barolo tracking-tight hover:opacity-80 transition-opacity uppercase"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            VALEUR
          </a>
        </div>
      </header>

      {/* Hero Section with Frame Sequence - Full Screen Pinned */}
      <HeroSplit />

      {/* SECTION 01: Value Proposition / Object Logic */}
      <ValueProp />

      {/* SECTION 02: Mechanism / Engineering Reveal */}
      <MechanismReveal />

      {/* SECTION 03: Material Honesty / Tactile Proof */}
      <MaterialDetail />

      {/* SECTION 04: Use-Case Transition (Day ↔ Night) */}
      <DayNightTransition />

      {/* SECTION 05: Atelier / Philosophy */}
      <Philosophy />

      {/* Footer */}
      <footer id="contact" className="w-full bg-butter text-barolo pt-24 pb-12 border-t border-barolo/10">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">

          {/* Top Row: Brand & Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-md">
              <h3
                className="font-serif text-5xl md:text-8xl tracking-tight mb-6 leading-none"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                VALEUR
              </h3>
              <p className="font-mono text-sm tracking-wide leading-relaxed text-barolo/70 max-w-xs">
                Value is not declared. It is recognized.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col items-start mt-8 md:mt-0">
              <span className="font-mono text-xs uppercase tracking-[0.2em] mb-6 block text-barolo/60">Join the Waitlist</span>
              <div className="flex w-full md:w-[400px] border-b border-barolo/20 pb-4 group hover:border-barolo transition-colors">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent w-full font-mono text-sm placeholder:text-barolo/30 focus:outline-none text-barolo"
                />
                <button className="font-mono text-xs uppercase tracking-widest hover:opacity-60 transition-opacity ml-4">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Middle Row: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24 border-t border-barolo/10 pt-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barolo/40 mb-2">Explore</span>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Collection 01</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Philosophy</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Atelier</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barolo/40 mb-2">Support</span>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Care Guide</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Shipping</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Returns</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barolo/40 mb-2">Legal</span>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Privacy Policy</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Terms of Service</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Accessibility</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barolo/40 mb-2">Connect</span>
              <a href="mailto:jeetjrathod@gmail.com" className="font-mono text-sm hover:opacity-60 transition-opacity">jeetjrathod@gmail.com</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">Instagram</a>
              <a href="#" className="font-mono text-sm hover:opacity-60 transition-opacity">SSENSE</a>
            </div>
          </div>

          {/* Bottom: Copyright & Love */}
          <div className="flex flex-col items-center justify-center border-t border-barolo/10 pt-12">
            <span className="font-mono text-[10px] uppercase tracking-widest font-medium text-barolo text-center">
              © 2024 VALEUR. Made with love by Jeet.
            </span>
          </div>

        </div>
      </footer>
    </main>
  );
}
