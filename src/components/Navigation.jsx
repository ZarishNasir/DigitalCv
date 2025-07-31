const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4 border-b border-gray-200/80">
        <div className="container mx-auto flex justify-between items-center px-4">
            <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
                Zarish Nasir
            </a>
            <div className="hidden md:flex items-center space-x-6 text-gray-600">
                <a href="#home" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Home</a>
                <a href="#education" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Education</a>
                <a href="#skills" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Skills</a>
                <a href="#projects" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Projects</a>
                <a href="#contact" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
            <a href="mailto:zarishnashir12345@gmail.com" className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105 shadow-md">
                Contact Me
            </a>
        </div>
    </nav>
);

export default Navigation;
