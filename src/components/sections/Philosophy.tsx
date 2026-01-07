"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
    return (
        <section className="w-full bg-butter py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* LEFT: Manifesto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-barolo/60 mb-12 block">
                        05 — Philosophy
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-barolo leading-[0.9] mb-12 md:mb-24">
                        Value is not declared.
                        <span className="italic block mt-12 md:mt-20">It is recognized.</span>
                    </h2>
                    <div className="max-w-md">
                        <p className="font-mono text-sm md:text-base text-barolo/80 leading-relaxed mb-8">
                            VALEUR is a luxury leather goods house built on intrinsic value.
                            No logos. No spectacle. No trend language.
                        </p>
                        <p className="font-mono text-xs text-barolo/60 leading-relaxed uppercase tracking-widest">
                            We assume intelligence and patience in our audience.
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT: Atelier Image */}
                <motion.div
                    className="relative w-full h-[60vh] md:h-[80vh]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <Image
                        src="/images/atelier_workspace.png"
                        alt="Atelier Workspace"
                        fill

                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>

            </div>
        </section>
    );
}
