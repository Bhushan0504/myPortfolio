
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="http://github.com/Bhushan0504/myPortfolio-frontend" target="_blank" className="hover:text-accent transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bhushan-patil-bp080900/" target="_blank" className="hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
