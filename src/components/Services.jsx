import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Music, MonitorPlay, Film, Layers } from 'lucide-react';

const services = [
    {
        icon: <Scissors size={32} />,
        title: "Video Editing",
        description: "Professional cutting, pacing, and storytelling to keep your audience engaged from start to finish."
    },
    {
        icon: <Palette size={32} />,
        title: "Color Grading",
        description: "Enhancing the mood and look of your footage with cinematic color correction and grading."
    },
    {
        icon: <Music size={32} />,
        title: "Sound Design",
        description: "Immersive audio mixing, sound effects, and music selection to elevate the emotional impact."
    },
    {
        icon: <MonitorPlay size={32} />,
        title: "Motion Graphics",
        description: "Dynamic text animations, titles, and visual effects to add a professional polish."
    },
    {
        icon: <Film size={32} />,
        title: "Cinematography",
        description: "Guidance on shot composition and lighting to ensure the best possible raw footage."
    },
    {
        icon: <Layers size={32} />,
        title: "VFX Compositing",
        description: "Seamless integration of visual effects, green screen removal, and object tracking."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-medium tracking-widest uppercase mb-4">What I Do</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive post-production solutions tailored to your creative vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:bg-dark/80 group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
