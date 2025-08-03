"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Circle, ArrowRight, Zap, Code, Cpu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { BackgroundBeams } from "./beams-background";

// Apple tarzı minimal floating element
function AppleFloatingElement({
    className,
    delay = 0,
    size = 80,
}: {
    className?: string;
    delay?: number;
    size?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
                opacity: [0, 0.15, 0.08, 0.15],
                scale: [0.5, 1, 0.8, 1],
                y: [0, -8, 4, -6, 0],
            }}
            transition={{
                duration: 25,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
            className={cn("absolute", className)}
        >
            <div
                style={{ width: size, height: size }}
                className="rounded-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/5"
            />
        </motion.div>
    );
}

// Gelişmiş gradient orb
function AdvancedGradientOrb({
    className,
    color = "blue",
    size = 600,
    intensity = 0.35,
}: {
    className?: string;
    color?: "blue" | "purple" | "cyan" | "pink" | "amber" | "orange" | "white";
    size?: number;
    intensity?: number;
}) {
    const colorMap = {
        blue: `rgba(59, 130, 246, ${intensity})`,
        purple: `rgba(147, 51, 234, ${intensity})`,
        cyan: `rgba(6, 182, 212, ${intensity})`,
        pink: `rgba(236, 72, 153, ${intensity})`,
        amber: `rgba(245, 158, 11, ${intensity})`,
        orange: `rgba(249, 115, 22, ${intensity})`,
        white: `rgba(255, 255, 255, ${intensity})`,
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: [0, 1, 0.4, 1, 0.6, 1],
                scale: [0.6, 1.4, 0.8, 1.3, 1, 1.2],
                rotate: [0, 180, 360],
                x: [0, 50, -30, 0],
                y: [0, -30, 20, 0],
            }}
            transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
            className={cn("absolute blur-3xl", className)}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
            }}
        />
    );
}

// Minimal parçacık sistemi
function MinimalParticleSystem() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.3, 0.6, 0],
                        x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 60 - 30, Math.random() * 40 - 20, 0],
                        scale: [0.3, 1, 0.6, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        delay: i * 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="absolute w-0.5 h-0.5 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full"
                    style={{
                        left: `${25 + (i * 10)}%`,
                        top: `${35 + (i * 8)}%`,
                    }}
                />
            ))}
        </div>
    );
}

// Kelime kelime 3D dönme efekti
function WordByWordFadeDown() {
    const words = ["PARTNER", "INNOVATION", "TECHNOLOGIES"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden" style={{ perspective: "2000px", perspectiveOrigin: "center bottom" }}>
      <AnimatePresence>
        <motion.div
          key={currentWordIndex}
          className="relative absolute inset-0 flex items-center justify-center"
          initial={{ 
            opacity: 0,
            rotateX: -75,
            scaleY: 0.3,
            transformOrigin: "center bottom"
          }}
          animate={{ 
            opacity: 1,
            rotateX: 0,
            scaleY: 1,
            transformOrigin: "center bottom"
          }}
          exit={{ 
            opacity: 0,
            rotateX: 75,
            scaleY: 0.3,
            transformOrigin: "center bottom"
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.3 }
          }}
          style={{
            transformStyle: "preserve-3d"
          }}
        >
                    <motion.span
                        className={`text-7xl md:text-9xl font-black tracking-tighter block ${
                            words[currentWordIndex] === "INNOVATION" 
                                ? "bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" 
                                : words[currentWordIndex] === "TECHNOLOGIES"
                                ? "bg-gradient-to-b from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
                                : "bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                        }`}
                        style={{
                            textShadow: words[currentWordIndex] === "PARTNER" ? "0 10px 40px rgba(255,255,255,0.4)" : 
                                       words[currentWordIndex] === "INNOVATION" ? "0 10px 40px rgba(147,51,234,0.4)" :
                                       "0 10px 40px rgba(6,182,212,0.4)",
                            filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))"
                        }}
                        animate={{
                            textShadow: [
                                words[currentWordIndex] === "PARTNER" ? "0 10px 40px rgba(255,255,255,0.4)" : 
                                words[currentWordIndex] === "INNOVATION" ? "0 10px 40px rgba(147,51,234,0.4)" :
                                "0 10px 40px rgba(6,182,212,0.4)",
                                words[currentWordIndex] === "PARTNER" ? "0 15px 60px rgba(255,255,255,0.6)" : 
                                words[currentWordIndex] === "INNOVATION" ? "0 15px 60px rgba(147,51,234,0.6)" :
                                "0 15px 60px rgba(6,182,212,0.6)",
                                words[currentWordIndex] === "PARTNER" ? "0 10px 40px rgba(255,255,255,0.4)" : 
                                words[currentWordIndex] === "INNOVATION" ? "0 10px 40px rgba(147,51,234,0.4)" :
                                "0 10px 40px rgba(6,182,212,0.4)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }}
                    >
                        {words[currentWordIndex]}
                    </motion.span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function HeroGeometric({
    badge = "Teknoloji ve İnovasyon Lideri",
    title1 = "Sektörünüzdeki",
    title2 = "Rekabetçi Partneriniz",
    subtitle = "Modern yazılım çözümleri ile işletmenizi geleceğe taşıyoruz. Uzman ekibimiz, en son teknoloji tasarım ve geliştirme ile vizyonunuzu hayata geçiriyor.",
    primaryCta = "Projenizi Başlatın",
    secondaryCta = "Çalışmalarımızı İnceleyin",
    primaryHref = "/contact",
    secondaryHref = "/portfolio",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
    primaryCta?: string;
    secondaryCta?: string;
    primaryHref?: string;
    secondaryHref?: string;
}) {
    const words = [
        {
            text: title1,
            className: "text-white",
        },
        {
            text: title2,
            className: "text-amber-400",
        },
    ];
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Beams Effect */}
            <BackgroundBeams className="absolute inset-0" intensity="medium" />
            
            {/* Apple tarzı minimal gradient orbs */}
            <AdvancedGradientOrb 
                className="top-20 left-20" 
                color="amber" 
                size={300} 
                intensity={0.06} 
            />
            <AdvancedGradientOrb 
                className="bottom-32 right-32" 
                color="orange" 
                size={250} 
                intensity={0.04} 
            />
            <AdvancedGradientOrb 
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                color="white" 
                size={200} 
                intensity={0.03} 
            />

            {/* Apple tarzı minimal floating elementler */}
            <AppleFloatingElement 
                className="top-1/4 left-1/5" 
                delay={0} 
                size={60} 
            />
            <AppleFloatingElement 
                className="top-3/4 right-1/4" 
                delay={5} 
                size={80} 
            />
            <AppleFloatingElement 
                className="top-1/2 right-1/6" 
                delay={10} 
                size={50} 
            />
            <AppleFloatingElement 
                className="bottom-1/4 left-1/3" 
                delay={15} 
                size={70} 
            />

            {/* Minimal parçacık sistemi */}
            <MinimalParticleSystem />

            {/* Ana grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Main content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-7xl mx-auto w-full">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                        <span className="hidden sm:inline">{badge}</span>
                        <span className="sm:hidden">PARTNER Innovation</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"
                        />
                    </motion.div>

                    {/* Typewriter Effect Ana Başlık */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="mb-6 sm:mb-8 w-full flex justify-center"
                    >
                        <TypewriterEffectSmooth 
                            words={words} 
                            className="w-full max-w-6xl mx-auto px-2 sm:px-4"
                            cursorClassName="bg-amber-400"
                            repeat={true}
                            repeatDelay={6000}
                        />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 4, ease: "easeOut" }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-6 text-center"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-4 sm:px-6"
                    >
                        <Link
                            to={primaryHref}
                            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25 overflow-hidden text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none text-center"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">{primaryCta}</span>
                            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                        
                        <Link
                            to={secondaryHref}
                            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-500 hover:border-amber-400/50 hover:bg-amber-400/10 hover:scale-105 overflow-hidden text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none text-center"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">{secondaryCta}</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Alt köşe efekti */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white/30 text-xs sm:text-sm font-mono z-20"
            >
                <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                    <span className="hidden sm:inline">v2.0.24 • INNOVATION MODE</span>
                    <span className="sm:hidden">v2.0.24</span>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Minimal floating element (Apple tarzı)
function MinimalFloatingElement({
    className,
    delay = 0,
    size = 100,
    opacity = 0.05,
}: {
    className?: string;
    delay?: number;
    size?: number;
    opacity?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
                opacity: [0, opacity, opacity * 0.7, opacity],
                scale: [0.8, 1.1, 0.9, 1],
                rotate: [0, 180, 360],
                y: [0, -10, 5, -8, 0],
            }}
            transition={{
                duration: 20,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
            className={cn("absolute", className)}
        >
            <div
                style={{ width: size, height: size, opacity }}
                className="rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/5"
            />
        </motion.div>
    );
}

// Minimal gradient orb (Apple tarzı)
function GradientOrb({
    className,
    color = "white",
    size = 200,
    intensity = 0.05,
}: {
    className?: string;
    color?: "amber" | "orange" | "white" | "blue" | "purple";
    size?: number;
    intensity?: number;
}) {
    const colorMap = {
        amber: `rgba(245, 158, 11, ${intensity})`,
        orange: `rgba(249, 115, 22, ${intensity})`,
        white: `rgba(255, 255, 255, ${intensity})`,
        blue: `rgba(59, 130, 246, ${intensity})`,
        purple: `rgba(147, 51, 234, ${intensity})`,
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: [0, 1, 0.8, 1],
                scale: [0.9, 1.1, 1, 1.05],
            }}
            transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
            className={cn("absolute blur-3xl", className)}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
            }}
        />
    );
}

export { AppleFloatingElement, AdvancedGradientOrb, MinimalFloatingElement, GradientOrb, HeroGeometric };
export default HeroGeometric;