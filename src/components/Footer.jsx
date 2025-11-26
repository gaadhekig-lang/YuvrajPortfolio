import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Yuvraj. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Made with</span>
                    <Heart size={16} className="text-primary fill-current" />
                    <span>for Creators</span>
                </div>

                <div className="flex gap-6 text-sm font-medium">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
