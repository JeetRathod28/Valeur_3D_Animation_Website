"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ValueProp() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="w-full bg-butter py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* LEFT: Headline & Narrative */}
                <div className="md:col-span-5 relative z-10 mix-blend-multiply">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-barolo/60 block mb-8">
                            01 — Object Logic
                        </span>
                        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-barolo mb-12">
                            Two Objects.<br />
                            <span className="ml-[1.5em] block">One Decision.</span>
                        </h2>
                        <p className="font-mono text-sm md:text-base text-barolo/80 max-w-sm ml-auto leading-relaxed">
                            Designed to adapt without asking for attention. A silent partner for the loud moments.
                        </p>
                    </motion.div>
                </div>

                {/* CENTER: Floating Parallax Image */}
                <div className="md:col-span-4 relative h-[60vh] md:h-[80vh]">
                    <motion.div style={{ y }} className="relative w-full h-full">
                        <Image
                            src="/images/bag_still_barolo.png"
                            alt="Barolo Bag Still Life"
                            fill

                            className="object-contain"
                        />
                    </motion.div>
                </div>

                {/* RIGHT: Specs (Staggered) */}
                <div className="md:col-span-3 flex flex-col gap-16 md:pl-12">
                    {[
                        { title: "Form Factor", val: "Dual-State Architecture" },
                        { title: "Materiality", val: "Full-Grain Pebbled Calfskin" },
                        { title: "Function", val: "Zero-Hardware Transition" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                            className="border-l border-barolo/20 pl-6"
                        >
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-barolo/50 mb-2">
                                {item.title}
                            </h4>
                            <p className="font-serif text-xl md:text-2xl text-barolo">
                                {item.val}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
