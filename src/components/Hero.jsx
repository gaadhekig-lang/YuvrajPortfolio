import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Effect */}
            <ParticleBackground />

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-primary font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
                        Video Editor & Storyteller
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
                        CRAFTING VISUAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                            NARRATIVES
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
                        Turning raw footage into compelling stories. Specialized in cinematic edits, color grading, and sound design.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a href="#projects" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary transition-colors">
                                <Play size={20} className="fill-current" />
                            </div>
                            <span className="font-medium tracking-wide">Watch Showreel</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
