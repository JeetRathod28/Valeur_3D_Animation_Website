"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 40;

// Generate frame paths based on actual file naming (001 to 040)
const getFramePath = (index: number): string => {
    const frameNumber = String(index + 1).padStart(3, "0");
    return `/frames/ezgif-frame-${frameNumber}.jpg`;
};

export default function HeroSplit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index with easeOut
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1], {
        ease: (t) => 1 - Math.pow(1 - t, 2), // easeOut
    });

    // Preload all frames before rendering
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<HTMLImageElement>[] = [];

            for (let i = 0; i < TOTAL_FRAMES; i++) {
                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = getFramePath(i);
                });
                promises.push(promise);
            }

            try {
                const results = await Promise.all(promises);
                loadedImages.push(...results);
                setImages(loadedImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load frames:", error);
            }
        };

        loadImages();
    }, []);

    // Update canvas size on resize
    useEffect(() => {
        const updateCanvasSize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                const parent = canvasRef.current.parentElement;
                const rect = parent.getBoundingClientRect();
                setCanvasSize({ width: rect.width, height: rect.height });
            }
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);
        return () => window.removeEventListener("resize", updateCanvasSize);
    }, []);

    // Draw frame on canvas
    const drawFrame = useCallback(
        (index: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");

            if (!canvas || !ctx || images.length === 0) return;

            const img = images[Math.min(Math.floor(index), TOTAL_FRAMES - 1)];
            if (!img) return;

            // Clear canvas with butter yellow background
            ctx.fillStyle = "#FEF4D5";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Calculate aspect ratio to COVER the canvas (no empty space)
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);

            const drawWidth = img.width * scale;
            const drawHeight = img.height * scale;

            // Center the image
            const offsetX = (canvas.width - drawWidth) / 2;
            const offsetY = (canvas.height - drawHeight) / 2;

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        },
        [images]
    );

    // Update frame when scroll changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const index = Math.round(latest);
        if (index !== currentFrame) {
            setCurrentFrame(index);
            drawFrame(index);
        }
    });

    // Initial draw when images are loaded
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            drawFrame(0);
        }
    }, [isLoading, images, drawFrame]);

    // Redraw on canvas size change
    useEffect(() => {
        if (!isLoading && images.length > 0 && canvasSize.width > 0) {
            drawFrame(currentFrame);
        }
    }, [canvasSize, isLoading, images, currentFrame, drawFrame]);

    // Fade out logic for the Brand Name
    const logoOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const logoScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: "400vh" }} // Increased height for longer scroll/animation duration
        >
            {/* Sticky Container - Full Viewport */}
            <div className="sticky top-0 h-screen w-full border-b border-barolo/10 overflow-hidden bg-butter">

                {/* CENTER BRAND LOGO OVERLAY */}
                {!isLoading && (
                    <motion.div
                        style={{ opacity: logoOpacity, scale: logoScale }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-multiply"
                    >
                        <h1 className="font-serif text-[15vw] leading-none font-bold text-barolo tracking-tighter">
                            VALEUR
                        </h1>
                    </motion.div>
                )}

                {/* Full Screen Canvas */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center gap-4"
                        >
                            <div className="w-8 h-8 border-2 border-barolo border-t-transparent animate-spin" style={{ borderRadius: 0 }} />
                            <span className="font-mono text-xs text-barolo uppercase tracking-widest">
                                Loading Experience
                            </span>
                        </motion.div>
                    ) : (
                        <canvas
                            ref={canvasRef}
                            width={canvasSize.width || 1920}
                            height={canvasSize.height || 1080}
                            className="w-full h-full block"
                            style={{ backgroundColor: "#FEF4D5" }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
