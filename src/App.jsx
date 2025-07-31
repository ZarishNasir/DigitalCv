import { useEffect } from 'react';
import heroImage from './assets/html-css-collage-concept-with-person.jpg';
import Navigation from './components/Navigation';
import Skill from './components/Skill';
import AIProjectMatcher from './components/AIProjectMatcher';
import Footer from './components/Footer';

// Main App Component
function App() {
    const portfolioData = {
        name: "Zarish Nasir",
        role: "Software Engineering Student",
        skills: {
            frontend: ["React.js (Advanced)", "Tailwind CSS (Expert)", "JavaScript (ES6+) (Advanced)"],
            backend: ["PHP (Proficient)", "MySQL (Advanced)", "Node.js (Intermediate)"]
        },
        projects: [
            { name: "KK Computers", description: "a modern e-commerce platform for computer hardware and accessories.", tech: ["React.js", "Tailwind CSS"] },
            { name: "StreamFlix", description: "a Netflix-inspired streaming platform with a modern UI, demonstrating API integration skills.", tech: ["React.js", "API Integration"] }
        ]
    };

    useEffect(() => {
        console.log("Portfolio component mounted and scripts are running.");
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(link);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
        };
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-50 text-gray-800 font-sans" id="home">
                <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm p-4 border-b border-gray-200/80">
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Zarish Nasir</a>
                        <div className="hidden md:flex items-center space-x-6 text-gray-600">
                            <a href="#home" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Home</a>
                            <a href="#education" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Education</a>
                            <a href="#skills" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Skills</a>
                            <a href="#projects" className="hover:text-indigo-600 transition-colors duration-300 font-medium">Projects</a>
                            <a href="#ai-matcher" className="hover:text-indigo-600 transition-colors duration-300 font-medium">AI Matcher</a>
                        </div>
                        <a href="mailto:zarishnashir12345@gmail.com" className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105 shadow-md">Contact Me</a>
                    </div>
                </nav>

                <div className="container mx-auto px-4">
                    <header className="relative text-center my-16 md:my-24 rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
                        <img src={heroImage} alt="A person working on code on a computer" className="absolute inset-0 w-full h-full object-cover z-0"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 z-10"></div>
                        <div className="relative z-20 py-24 md:py-32 px-4">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">Zarish Nasir</h1>
                            <p className="text-xl md:text-2xl text-gray-200 mt-4">Software Engineering Student @ GIFT University</p>
                            <p className="text-lg text-gray-300 mt-2">Crafting elegant solutions with code and creativity.</p>
                            <div className="mt-8 flex justify-center items-center space-x-4">
                                <a href="mailto:zarishnashir12345@gmail.com" className="flex items-center px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                                    <i className="fa-solid fa-envelope text-xl text-gray-600 group-hover:text-indigo-600 transition-colors duration-300"></i>
                                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Email</span>
                                </a>
                                <a href="https://github.com/zarishnasir" target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                                    <i className="fa-brands fa-github text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300"></i>
                                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-gray-800 transition-colors duration-300">GitHub</span>
                                </a>
                                <a href="https://linkedin.com/in/zarishnasir" target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-105">
                                    <i className="fa-brands fa-linkedin text-xl text-gray-600 group-hover:text-blue-600 transition-colors duration-300"></i>
                                    <span className="ml-3 font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </header>

                    <section id="education" className="mb-20 md:mb-24 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200/50">
                        <h2 className="text-4xl font-bold mb-8 text-indigo-600 flex items-center"><i className="fa-solid fa-graduation-cap mr-4 text-teal-500"></i>Education</h2>
                        <div className="border-l-4 border-teal-400 pl-6 relative">
                            <div className="absolute -left-2 top-0 h-4 w-4 bg-teal-400 rounded-full border-4 border-white"></div>
                            <h3 className="text-2xl font-semibold text-gray-800">BS Software Engineering</h3>
                            <p className="text-gray-600 flex items-center my-2"><span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">2021–2025</span>GIFT University</p>
                            <div className="mt-6 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-700 text-lg mb-2">Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-gray-600"><span className="h-2 w-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Dean's List Honoree - All Semesters</li>
                                        <li className="flex items-start text-gray-600"><span className="h-2 w-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Technical Lead at University Computing Society</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700 text-lg mb-3">Core Focus Areas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Data Structures & Algorithms</span>
                                        <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Web Development</span>
                                        <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Database Systems</span>
                                        <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Software Architecture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="skills" className="mb-20 md:mb-24 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200/50">
                        <h2 className="text-4xl font-bold mb-8 text-indigo-600 flex items-center"><i className="fa-solid fa-cogs mr-4 text-teal-500"></i>Technical Skills</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Frontend Development</h3>
                                <div className="space-y-5">
                                    <Skill name="React.js" level="Advanced" percentage="90%" />
                                    <Skill name="Tailwind CSS" level="Expert" percentage="95%" />
                                    <Skill name="JavaScript (ES6+)" level="Advanced" percentage="85%" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Backend Development</h3>
                                <div className="space-y-5">
                                    <Skill name="PHP" level="Proficient" percentage="80%" />
                                    <Skill name="MySQL" level="Advanced" percentage="85%" />
                                    <Skill name="Node.js" level="Intermediate" percentage="75%" />
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="projects" className="mb-20 md:mb-24">
                        <h2 className="text-4xl font-bold mb-8 text-indigo-600 flex items-center justify-center"><i className="fa-solid fa-lightbulb mr-4 text-teal-500"></i>Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/60">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">KK Computers</h3>
                                <p className="text-gray-600 mb-4">A modern e-commerce platform for computer hardware and accessories.</p>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">React.js</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tailwind CSS</span>
                                </div>
                                <a href="https://kk-computers.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold group-hover:underline">View Live Demo <i className="fa-solid fa-arrow-right-long ml-1 transition-transform group-hover:translate-x-1"></i></a>
                            </div>
                            <div className="bg-white rounded-xl p-6 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/60">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">StreamFlix</h3>
                                <p className="text-gray-600 mb-4">A Netflix-inspired streaming platform with modern UI and seamless user experience.</p>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">React.js</span>
                                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">API Integration</span>
                                </div>
                                <a href="https://streamflix-12.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold group-hover:underline">View Live Demo <i className="fa-solid fa-arrow-right-long ml-1 transition-transform group-hover:translate-x-1"></i></a>
                            </div>
                        </div>
                    </section>

                    <section id="ai-matcher" className="mb-20 md:mb-24">
                        <AIProjectMatcher portfolioData={portfolioData} />
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
