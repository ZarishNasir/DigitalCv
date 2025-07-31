const Projects = () => (
    <section id="projects" className="mb-12 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-indigo-600 flex items-center justify-center">
            <i className="fa-solid fa-lightbulb mr-3 md:mr-4 text-teal-500"></i>Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-4 md:p-6 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/60">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Pokemon Catch</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">An interactive Pokemon game where users can catch, collect, and view Pokemon using the PokeAPI.</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">React.js</span>
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">PokeAPI</span>
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">Tailwind CSS</span>
                </div>
                <a href="https://catch-pokemon12.netlify.app/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:underline text-sm md:text-base">
                    View Live Demo <i className="fa-solid fa-arrow-right-long ml-1 transition-transform group-hover:translate-x-1"></i>
                </a>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/60">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Currency Converter</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">A real-time currency conversion tool with support for multiple currencies and live exchange rates.</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">React.js</span>
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">Exchange Rate API</span>
                    <span className="inline-block bg-gray-100 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700">Tailwind CSS</span>
                </div>
                <a href="https://exchange-rateconverter.netlify.app/" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:underline text-sm md:text-base">
                    View Live Demo <i className="fa-solid fa-arrow-right-long ml-1 transition-transform group-hover:translate-x-1"></i>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;
