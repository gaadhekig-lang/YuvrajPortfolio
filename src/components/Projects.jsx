import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const projects = [
    {
        id: 1,
        title: "Podcast Hook",
        category: "Podcast Intro",
        image: "https://img.youtube.com/vi/oIahW8yBIUo/maxresdefault.jpg",
        link: "https://youtu.be/oIahW8yBIUo",
        description: "Podcast hook created to give best introduction of the podcast to the audience of 'Ranveer Allahbadia'"
    },
    {
        id: 2,
        title: "Growth of Esports in India",
        category: "Vox Styled Explainer",
        image: "https://img.youtube.com/vi/dyHzYdNhBdg/maxresdefault.jpg",
        link: "https://youtu.be/dyHzYdNhBdg",
        description: "An explainer video showing growth of esports in india using 2D assets and animations"
    },
    {
        id: 3,
        title: "US - China Trade War",
        category: "Documentary Style",
        image: "https://img.youtube.com/vi/_5GS1eBI1os/maxresdefault.jpg",
        link: "https://youtu.be/_5GS1eBI1os",
        description: "In-depth analysis of the trade war dynamics."
    },
    {
        id: 4,
        title: "0x100x Custom 3D Assets",
        category: "3D Animation",
        image: "https://img.youtube.com/vi/8X7Q9bgf9rQ/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/8X7Q9bgf9rQ",
        description: "Showcasing custom 3D assets and animations done in After Effects"
    },
    {
        id: 5,
        title: "Bymaximize Styled Captions",
        category: "Social Media Reel",
        image: "https://img.youtube.com/vi/CQpAR17JN9k/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/CQpAR17JN9k",
        description: "Highlighting special styled captions inspired from Bymaximize"
    },
    {
        id: 6,
        title: "Diary of a CEO Hook",
        category: "Podcast Intro",
        image: "https://img.youtube.com/vi/-cOUvyCFar0/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/-cOUvyCFar0",
        description: "Podcast hook created to give best introduction of the podcast to the audience of 'The Diary of a CEO'"
    },
    {
        id: 7,
        title: "Neuro Marketing",
        category: "Educational Reel",
        image: "https://img.youtube.com/vi/0h_cXWiTU74/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/0h_cXWiTU74",
        description: "A reel that shows how the neuro marketing works"
    },
    {
        id: 8,
        title: "Talking Head Versatility",
        category: "Talking Head",
        image: "https://img.youtube.com/vi/RwJvD0qifRw/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/RwJvD0qifRw",
        description: "A reel that shows how the talking head video can be used in multiple types"
    },
    {
        id: 9,
        title: "Artistic Typography Style",
        category: "Typography",
        image: "https://img.youtube.com/vi/LN-vS3HlsJ8/hqdefault.jpg",
        link: "https://youtube.com/shorts/LN-vS3HlsJ8",
        description: "This reel showcases artistic style of captions"
    }
];

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="projects" className="py-20 bg-black relative overflow-hidden">
            {/* Particle Background with Blur Effect */}
            <div className={`absolute inset-0 z-0 transition-all duration-500 ${hoveredId ? 'blur-[6px]' : 'blur-[2px]'}`}>
                <ParticleBackground />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h3 className="text-primary font-medium tracking-widest uppercase mb-4">Portfolio</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Works</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors mt-4 md:mt-0">
                        View All Projects <ArrowUpRight size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer block"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-end">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Play Button (Centered) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className={`w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black transform transition-all duration-300 ${hoveredId === project.id ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                                    <Play size={24} fill="currentColor" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors">
                        View All Projects <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
