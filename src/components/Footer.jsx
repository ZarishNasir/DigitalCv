const Footer = () => (
    <footer className="text-center py-10 bg-white my-16 rounded-2xl shadow-lg border border-gray-200/50">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Zarish Nasir</p>
        <p className="text-gray-500 text-sm mt-1">Designed with passion and coded with React & Tailwind CSS.</p>
        <div className="mt-6 flex justify-center space-x-6">
            <a href="mailto:zarishnashir12345@gmail.com" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a href="https://github.com/zarishnasir" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/zarish-nasir-531232378/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
        </div>
    </footer>
);

export default Footer;
