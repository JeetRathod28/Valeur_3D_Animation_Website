"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DayNightTransition() {
    return (
        <section className="w-full bg-butter border-t border-barolo/10">
            <div className="grid grid-cols-1 md:grid-cols-2 relative">

                {/* CENTER LABEL (Floating) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mix-blend-difference hidden md:block">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FEF4D5]">
                        Transition
                    </span>
                </div>

                {/* DAY MODE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative h-[80vh] group overflow-hidden"
                >
                    <div className="absolute top-8 left-8 z-10">
                        <span className="font-mono text-xs uppercase tracking-widest text-barolo bg-butter/80 px-3 py-1 backdrop-blur-md">
                            08:30 — Structured
                        </span>
                    </div>

                    <Image
                        src="/images/bag_day_mode.png"
                        alt="Day Mode - Shoulder"
                        fill

                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                </motion.div>

                {/* NIGHT MODE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="relative h-[80vh] group overflow-hidden"
                >
                    <div className="absolute bottom-8 right-8 z-10">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FEF4D5] bg-barolo/80 px-3 py-1 backdrop-blur-md">
                            20:45 — Released
                        </span>
                    </div>

                    <Image
                        src="/images/bag_night_mode.png"
                        alt="Night Mode - Clutch"
                        fill

                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                </motion.div>

            </div>
        </section>
    );
}
