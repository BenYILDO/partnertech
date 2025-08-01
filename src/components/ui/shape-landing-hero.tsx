"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    mouseX = 50,
    mouseY = 50,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    mouseX?: number;
    mouseY?: number;
}) {
    const parallaxX = (mouseX - 50) * 0.02;
    const parallaxY = (mouseY - 50) * 0.02;
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
                scale: 0.8,
            }}
            animate={{
                opacity: [0, 1, 0.8, 1],
                y: [0, -20, 20, 0],
                x: [0, parallaxX * 10, parallaxX * 20, parallaxX * 10],
                rotate: [rotate - 15, rotate, rotate + 5, rotate],
                scale: [0.8, 1, 1.05, 1],
            }}
            transition={{
                duration: 8,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
            style={{
                transform: `translate(${parallaxX}px, ${parallaxY}px)`,
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 25, -15, 0],
                    x: [0, 10, -10, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <motion.div
                    animate={{
                        background: [
                            `linear-gradient(45deg, ${gradient.replace('from-', '')}, transparent)`,
                            `linear-gradient(135deg, ${gradient.replace('from-', '')}, transparent)`,
                            `linear-gradient(225deg, ${gradient.replace('from-', '')}, transparent)`,
                            `linear-gradient(315deg, ${gradient.replace('from-', '')}, transparent)`,
                            `linear-gradient(45deg, ${gradient.replace('from-', '')}, transparent)`,
                        ],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "backdrop-blur-[3px] border-2 border-white/[0.2]",
                        "shadow-[0_12px_40px_0_rgba(255,255,255,0.15)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"
                    )}
                />
                
                {/* İç parıltı efekti */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-sm"
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <motion.div 
                animate={{
                    background: `
                        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(245, 158, 11, 0.12) 0%, transparent 40%),
                        radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(249, 115, 22, 0.08) 0%, transparent 45%),
                        radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at ${50 + mousePosition.x * 0.3}% ${50 + mousePosition.y * 0.3}%, rgba(249, 115, 22, 0.04) 0%, transparent 60%)
                    `,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                className="absolute inset-0 blur-3xl" 
            />

            <div className="absolute inset-0 overflow-hidden">
                {/* Ana büyük şekiller */}
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-amber-500/[0.15]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[-15%] sm:left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-orange-500/[0.15]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="right-[-10%] sm:right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-amber-600/[0.15]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[0%] sm:left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-orange-400/[0.15]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="right-[10%] sm:right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-amber-400/[0.15]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[15%] sm:left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />

                {/* Ek küçük parçacıklar */}
                <ElegantShape
                    delay={1.0}
                    width={100}
                    height={30}
                    rotate={45}
                    gradient="from-orange-300/[0.12]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="right-[25%] sm:right-[30%] top-[30%]"
                />

                <ElegantShape
                    delay={1.2}
                    width={80}
                    height={25}
                    rotate={-60}
                    gradient="from-amber-300/[0.12]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[55%] sm:left-[60%] top-[60%]"
                />

                <ElegantShape
                    delay={0.8}
                    width={120}
                    height={35}
                    rotate={30}
                    gradient="from-orange-600/[0.12]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[65%] sm:left-[70%] bottom-[20%]"
                />

                <ElegantShape
                    delay={1.5}
                    width={60}
                    height={20}
                    rotate={-45}
                    gradient="from-amber-200/[0.10]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="right-[35%] sm:right-[40%] bottom-[40%]"
                />

                <ElegantShape
                    delay={1.8}
                    width={90}
                    height={28}
                    rotate={75}
                    gradient="from-orange-200/[0.10]"
                    mouseX={mousePosition.x}
                    mouseY={mousePosition.y}
                    className="left-[35%] sm:left-[40%] top-[25%]"
                />

                {/* Sürekli dönen parçacıklar */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    style={{
                        transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
                    }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-sm"
                            style={{
                                left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* İkinci katman dönen parçacıklar */}
                <motion.div
                    animate={{
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    style={{
                        transform: `translate(${(mousePosition.x - 50) * -0.05}px, ${(mousePosition.y - 50) * -0.05}px)`,
                    }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 0.5, 1],
                                opacity: [0.2, 0.6, 0.2],
                            }}
                            transition={{
                                duration: 6,
                                delay: i * 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full blur-sm"
                            style={{
                                left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                                top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 sm:mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-amber-500/80" />
                        <span className="text-xs sm:text-sm text-white/60 tracking-wide">
                            Sektörünüzdeki Rekabetçi Partneriniz
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-6 sm:mb-8"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                            <motion.span 
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(255,255,255,0.5)",
                                        "0 0 40px rgba(255,255,255,0.8)",
                                        "0 0 20px rgba(255,255,255,0.5)",
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block sm:inline"
                            >
                                PARTNER 
                            </motion.span>
                            <br className="block sm:hidden" />
                            <motion.span
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    textShadow: [
                                        "0 0 30px rgba(245, 158, 11, 0.6)",
                                        "0 0 50px rgba(249, 115, 22, 0.8)",
                                        "0 0 30px rgba(245, 158, 11, 0.6)",
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-[length:200%_100%] block sm:inline mt-2 sm:mt-0"
                                )}
                            >
                                 InnovationTech
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/40 mb-6 sm:mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4 text-center">
                            Modern yazılım çözümleri ile işletmenizi dijital dönüşümde öne çıkarıyoruz. 
                            İnovatif teknolojiler ve uzman ekibimizle yanınızdayız.
                        </p>
                        
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md sm:max-w-none mx-auto px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.05
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto"
                            >
                                <Link 
                                    to="/contact"
                                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden w-full sm:w-auto shadow-2xl hover:shadow-amber-500/50"
                                >
                                    <motion.div
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    />
                                    <span className="relative z-10">Hemen Başlayın</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                        className="relative z-10"
                                    >
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ 
                                    scale: 1.05,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative w-full sm:w-auto"
                            >
                                <motion.div
                                    animate={{
                                        borderColor: [
                                            "rgba(245, 158, 11, 0.5)",
                                            "rgba(249, 115, 22, 0.7)",
                                            "rgba(245, 158, 11, 0.5)",
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 border-2 rounded-full"
                                />
                                <Link 
                                    to="/services"
                                    className="relative text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-amber-500/10 w-full sm:w-auto"
                                >
                                    Hizmetlerimizi Keşfedin
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { ElegantShape, HeroGeometric };
export default HeroGeometric;