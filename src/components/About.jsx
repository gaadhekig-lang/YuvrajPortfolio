import React from 'react';
import { motion } from 'framer-motion';
import { Film, Camera, Edit3, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src="/profile-new.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-105"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl z-20">
                                <p className="text-primary font-bold text-2xl">Pro</p>
                                <p className="text-white text-xs uppercase tracking-wider">Editor</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-primary font-medium tracking-widest uppercase mb-4">About Me</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Video Editor & <br />
                            <span className="text-gray-500">Visual Storyteller</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I'm Yuvraj Agarwal and I'm from Jaipur. I'm not just an editor, I'm a storyteller. My mission is to transform scattered clips into cinematic experiences. My approach combines artistic vision with cutting-edge editing techniques, ensuring each frame serves the narrative and engages the audience.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
