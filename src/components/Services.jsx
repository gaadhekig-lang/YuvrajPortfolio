import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Music, MonitorPlay, Type, Smartphone, BookOpen, Sparkles, Activity } from 'lucide-react';

const services = [
    {
        icon: <Scissors size={32} />,
        title: "Commercial Editing",
        description: "High-impact promotional videos and advertisements that drive engagement and conversions for brands"
    },
    {
        icon: <MonitorPlay size={32} />,
        title: "Motion Graphics",
        description: "It is a form of animated graphic design that combines text, shapes, and images with motion and audio to create dynamic visuals"
    },
    {
        icon: <Type size={32} />,
        title: "Typography",
        description: "It is the art and technique of arranging type to make written language legible, readable, and visually appealing"
    },
    {
        icon: <Palette size={32} />,
        title: "Color Grading",
        description: "Cinematic color correction and custom LUTs to achieve the perfect visual mood"
    },
    {
        icon: <Music size={32} />,
        title: "Sound Design",
        description: "It involves a wide range of techniques like recording, editing, mixing, sampling, and creating sound"
    },
    {
        icon: <Smartphone size={32} />,
        title: "Social Media Content",
        description: "Short-form content optimized for Instagram, TikTok, YouTube, and other platforms"
    },
    {
        icon: <BookOpen size={32} />,
        title: "Storytelling",
        description: "It is the process of using visuals, sound, and pacing to guide a viewer through a narrative, evoking emotion and creating a connection"
    },
    {
        icon: <Sparkles size={32} />,
        title: "Gen AI",
        description: "It is a type of artificial intelligence that creates new content, such as text, images, audio, video, and code, by learning patterns from existing data"
    },
    {
        icon: <Activity size={32} />,
        title: "Video pacing & rhythm",
        description: "It is the speed at which the narrative or information unfolds, while rhythm refers to the pattern of cuts"
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
