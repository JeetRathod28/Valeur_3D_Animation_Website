"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaterialDetail() {
    return (
        <section className="w-full bg-butter py-24 md:py-32">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-32 max-w-2xl"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-barolo/60 mb-6 block">
                        03 — Material Honesty
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-barolo leading-[0.9]">
                        The structure comes from the leather itself.
                    </h2>
                </motion.div>

                {/* Masonry Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                    {/* Column 1 (Offset Top) */}
                    <div className="flex flex-col gap-12 md:gap-24 md:pt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative Aspect-[4/5] w-full h-[600px] overflow-hidden group"
                        >
                            <Image
                                src="/images/leather_grain_macro.png"
                                alt="Full Grain Detail"
                                fill

                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 bg-butter/90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="font-mono text-xs text-barolo uppercase tracking-widest">Full-Grain Calfskin</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="p-8 border-l border-barolo/20"
                        >
                            <p className="font-serif text-2xl text-barolo leading-relaxed">
                                "We do not correct the grain. We do not coat the surface. The imperfections are the proof of life."
                            </p>
                        </motion.div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative Aspect-square w-full h-[500px] overflow-hidden group"
                        >
                            <Image
                                src="/images/lining_interior.png"
                                alt="Interior Lining"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 bg-butter/90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="font-mono text-xs text-barolo uppercase tracking-widest">Taupe Suede Lining</span>
                            </div>
                        </motion.div>

                        <div className="flex justify-center py-12">
                            <span className="font-mono text-xs text-barolo/40 -rotate-90 tracking-[0.5em] uppercase">
                                Add Nothing. Remove Nothing.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
