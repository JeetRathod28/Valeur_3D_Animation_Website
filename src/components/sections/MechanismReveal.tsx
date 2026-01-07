"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MechanismReveal() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={ref} className="w-full h-[120vh] relative overflow-hidden flex items-center justify-center bg-barolo">
            {/* PARALLAX BACKGROUND */}
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-60 mix-blend-multiply">
                <Image
                    src="/images/strap_mechanism_macro.png"
                    alt="Brass Mechanism Macro"
                    fill

                    className="object-cover"
                />
            </motion.div>

            {/* FLOATING CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-[#EBEBEB]">

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-6 block">
                        02 — Mechanism
                    </span>
                    <h3 className="font-serif text-5xl md:text-7xl leading-none">
                        Silent Lock.<br />
                        <span className="text-[#D4AF37] italic">Pure Friction.</span>
                    </h3>
                </motion.div>

                {/* TECHNICAL CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-end"
                >
                    <div className="backdrop-blur-md bg-barolo/30 border border-[#D4AF37]/30 p-8 md:p-12">
                        <p className="font-serif text-2xl leading-relaxed mb-12">
                            "The strap moves on a calibrated channel. Tension releases, volume changes. Nothing added."
                        </p>

                        <div className="grid grid-cols-3 gap-8 border-t border-[#D4AF37]/30 pt-8">
                            <div>
                                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Tolerance</span>
                                <span className="font-mono text-lg">0.05mm</span>
                            </div>
                            <div>
                                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Material</span>
                                <span className="font-mono text-lg">Eco-Brass</span>
                            </div>
                            <div>
                                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Finish</span>
                                <span className="font-mono text-lg">Brushed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
