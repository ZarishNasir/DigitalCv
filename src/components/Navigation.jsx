import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4 border-b border-gray-200/80">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Mobile Menu Button */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-black hover:text-black hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'rotate-45 top-2' : 'top-0'
                        }`}></span>
                        <span className={`absolute left-0 block w-full h-0.5 bg-current top-2 transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                        <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                            isMenuOpen ? '-rotate-45 top-2' : 'top-4'
                        }`}></span>
                    </div>
                </button>

                <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                    Zarish Nasir
                </a>
                

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-gray-600">
                    <a href="#home" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Home</a>
                    <a href="#education" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Education</a>
                    <a href="#skills" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Skills</a>
                    <a href="#projects" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Projects</a>
                    <a href="#ai-matcher" className="hover:text-indigo-600 transition-colors duration-300 font-medium">AI Matcher</a>
                </div>
                <a href="mailto:zarishnashir12345@gmail.com" className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105 shadow-md">
                    Contact Me
                </a>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} onClick={() => setIsMenuOpen(false)}>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden fixed left-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <span className="text-lg font-semibold text-black">Menu</span>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-gray-500 hover:text-black focus:outline-none"
                            aria-label="Close menu"
                        >
                            <i className="fa-solid fa-xmark text-xl"></i>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col py-4">
                        <a href="#home" 
                           onClick={() => setIsMenuOpen(false)} 
                           className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                            <i className="fa-solid fa-home mr-3"></i>Home
                        </a>
                        <a href="#education" 
                           onClick={() => setIsMenuOpen(false)} 
                           className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                            <i className="fa-solid fa-graduation-cap mr-3"></i>Education
                        </a>
                        <a href="#skills" 
                           onClick={() => setIsMenuOpen(false)} 
                           className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                            <i className="fa-solid fa-cogs mr-3"></i>Skills
                        </a>
                        <a href="#projects" 
                           onClick={() => setIsMenuOpen(false)} 
                           className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                            <i className="fa-solid fa-lightbulb mr-3"></i>Projects
                        </a>
                        <a href="#ai-matcher" 
                           onClick={() => setIsMenuOpen(false)} 
                           className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                            <i className="fa-solid fa-robot mr-3"></i>AI Matcher
                        </a>
                    </div>

                    {/* Contact Button */}
                    <div className="mt-auto p-4 border-t border-gray-200">
                        <a href="mailto:zarishnashir12345@gmail.com" 
                           className="flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-md">
                            <i className="fa-solid fa-envelope mr-2"></i>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
