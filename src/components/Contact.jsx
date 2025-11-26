import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark relative">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-medium tracking-widest uppercase mb-4">Get In Touch</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Together</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind? I'm always open to discussing new ideas and opportunities.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Email Me</h4>
                                <a href="mailto:ra645218@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    ra645218@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Call Me</h4>
                                <a href="tel:+919602329462" className="text-gray-400 hover:text-white transition-colors">
                                    +91 96023 29462
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                                <p className="text-gray-400">
                                    Jaipur, Rajasthan<br />
                                    Available Worldwide
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-bold text-lg mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/redinsaenity/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://x.com/YuvrajAgar2080"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/yuvraj-agarwal-a14965270/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://wa.me/9602329462"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1"
                                >
                                    <Phone size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3 bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6" action="mailto:ra645218@gmail.com" method="post" encType="text/plain">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors transform hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
