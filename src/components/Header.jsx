const Header = ({ name, role }) => (
    <header className="relative text-center my-8 md:my-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
        <img 
            src="/src/assets/html-css-collage-concept-with-person.jpg" 
            alt="A person working on code on a computer" 
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-10"></div>
        <div className="relative z-20 py-12 md:py-24 px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">{name}</h1>
            <p className="text-lg md:text-2xl text-gray-200 mt-4">{role} @ GIFT University</p>
            <p className="text-base md:text-lg text-gray-300 mt-2">Crafting elegant solutions with code and creativity.</p>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-4">
                <a href="mailto:zarishnashir12345@gmail.com" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                    <i className="fa-solid fa-envelope text-xl text-gray-600 group-hover:text-indigo-600 transition-colors duration-300"></i>
                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Email</span>
                </a>
                <a href="https://github.com/zarishnasir" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                    <i className="fa-brands fa-github text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300"></i>
                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-gray-800 transition-colors duration-300">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/zarishnasir" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                    <i className="fa-brands fa-linkedin text-xl text-gray-600 group-hover:text-blue-600 transition-colors duration-300"></i>
                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
                </a>
            </div>
        </div>
    </header>
);

export default Header;
