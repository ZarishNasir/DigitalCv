import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import image from './assets/html-css-collage-concept-with-person.jpg';

// Helper function to combine classes
const classNames = (...classes) => classes.filter(Boolean).join(' ');

// Animation Variants for sections
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


//==================================================================
// 1. HEADER COMPONENT
//==================================================================
const Header = ({ name, role }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const strongItemVariants = {
        hidden: { opacity: 0, x: 100, skewX: "-15deg" },
        visible: { 
            opacity: 1, 
            x: 0, 
            skewX: "0deg",
            transition: { 
                type: "spring",
                damping: 15, 
                stiffness: 100 
            } 
        }
    };

    return (
        <header className="relative text-center my-8 md:my-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ 
                    opacity: { duration: 1.5, ease: "easeIn" },
                    scale: { duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
                }}
                src={image}
                alt="Digital CV background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x400/1e293b/FFFFFF?text=Image+Error'; }}
            />
            <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 py-12 md:py-24 px-4"
            >
                <motion.h1 variants={strongItemVariants} className="text-4xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">{name}</motion.h1>
                <motion.p variants={strongItemVariants} className="text-lg md:text-2xl text-slate-300 mt-4">{role} @ GIFT University</motion.p>
                <motion.p variants={strongItemVariants} className="text-base md:text-lg text-slate-400 mt-2">Crafting elegant solutions with code and creativity.</motion.p>
                
                <motion.div variants={strongItemVariants} className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-4">
                    <motion.a whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9', color: '#1e293b' }} whileTap={{ scale: 0.95 }} href="mailto:zarishnashir12345@gmail.com" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-slate-100/10 border-2 border-slate-100/20 rounded-full text-white transition-all duration-300 group shadow-md hover:shadow-lg transform">
                        <i className="fa-solid fa-envelope text-xl text-amber-400 group-hover:text-amber-500 transition-colors duration-300"></i>
                        <span className="ml-3 font-semibold transition-colors duration-300">Email</span>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9', color: '#1e293b' }} whileTap={{ scale: 0.95 }} href="https://github.com/zarishnasir" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-slate-100/10 border-2 border-slate-100/20 rounded-full text-white transition-all duration-300 group shadow-md hover:shadow-lg transform">
                        <i className="fa-brands fa-github text-xl text-amber-400 group-hover:text-amber-500 transition-colors duration-300"></i>
                        <span className="ml-3 font-semibold transition-colors duration-300">GitHub</span>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9', color: '#1e293b' }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/zarishnasir" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-4 py-2.5 bg-slate-100/10 border-2 border-slate-100/20 rounded-full text-white transition-all duration-300 group shadow-md hover:shadow-lg transform">
                        <i className="fa-brands fa-linkedin text-xl text-amber-400 group-hover:text-amber-500 transition-colors duration-300"></i>
                        <span className="ml-3 font-semibold transition-colors duration-300">LinkedIn</span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </header>
    );
};

//==================================================================
// 2. NAVIGATION COMPONENT
//==================================================================
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    const mobileMenuVariants = {
        hidden: { x: "-100%" },
        visible: { x: "0%", transition: { type: "tween", ease: "circOut" } },
        exit: { x: "-100%", transition: { type: "tween", ease: "circIn" } }
    };
    
    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg p-4 border-b border-slate-700/80"
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#home" className="text-2xl font-bold text-white">
                    Zarish <span className="text-amber-400">Nasir</span>
                </a>

                <div className="hidden md:flex items-center space-x-6 text-slate-300">
                    <a href="#home" className="hover:text-amber-400 transition-colors duration-300 font-medium">Home</a>
                    <a href="#education" className="hover:text-amber-400 transition-colors duration-300 font-medium">Education</a>
                    <a href="#skills" className="hover:text-amber-400 transition-colors duration-300 font-medium">Skills</a>
                    <a href="#projects" className="hover:text-amber-400 transition-colors duration-300 font-medium">Projects</a>
                    <a href="#ai-matcher" className="hover:text-amber-400 transition-colors duration-300 font-medium">AI Matcher</a>
                </div>
                <a href="mailto:zarishnashir12345@gmail.com" className="hidden md:inline-block px-4 py-2 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-md font-semibold">
                    Contact Me
                </a>
                
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-200 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5">
                        <span className={classNames('absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 top-2' : 'top-0')}></span>
                        <span className={classNames('absolute left-0 block w-full h-0.5 bg-current top-2 transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')}></span>
                        <span className={classNames('absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 top-2' : 'top-4')}></span>
                    </div>
                </button>
            </div>
            
            <AnimatePresence>
            {isMenuOpen && (
                <>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={classNames('md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm')} onClick={closeMenu}></motion.div>
                <motion.div 
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={classNames('md:hidden fixed left-0 top-0 h-full w-64 bg-slate-800 shadow-2xl')}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-4 border-b border-slate-700">
                            <span className="text-lg font-semibold text-white">Menu</span>
                            <button onClick={closeMenu} className="p-2 text-slate-400 hover:text-white focus:outline-none" aria-label="Close menu">
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>
                        </div>
                        <div className="flex flex-col py-4">
                            <a href="#home" onClick={closeMenu} className="px-6 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors duration-200"><i className="fa-solid fa-home mr-3 w-5 text-center"></i>Home</a>
                            <a href="#education" onClick={closeMenu} className="px-6 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors duration-200"><i className="fa-solid fa-graduation-cap mr-3 w-5 text-center"></i>Education</a>
                            <a href="#skills" onClick={closeMenu} className="px-6 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors duration-200"><i className="fa-solid fa-cogs mr-3 w-5 text-center"></i>Skills</a>
                            <a href="#projects" onClick={closeMenu} className="px-6 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors duration-200"><i className="fa-solid fa-lightbulb mr-3 w-5 text-center"></i>Projects</a>
                            <a href="#ai-matcher" onClick={closeMenu} className="px-6 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-colors duration-200"><i className="fa-solid fa-robot mr-3 w-5 text-center"></i>AI Matcher</a>
                        </div>
                        <div className="mt-auto p-4 border-t border-slate-700">
                            <a href="mailto:zarishnashir12345@gmail.com" className="flex items-center justify-center px-4 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-md">
                                <i className="fa-solid fa-envelope mr-2"></i>Contact Me
                            </a>
                        </div>
                    </div>
                </motion.div>
                </>
            )}
            </AnimatePresence>
        </motion.nav>
    );
};


//==================================================================
// 3. SKILL COMPONENT
//==================================================================
const Skill = ({ name, level, percentage }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#334155" }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 group"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors duration-300">{name}</span>
                <span className="text-sm text-amber-400 bg-amber-900/50 px-2.5 py-1 rounded-full font-semibold">{level}</span>
            </div>
            <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: percentage }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                />
            </div>
        </motion.div>
    );
};


//==================================================================
// 4. PROJECTS COMPONENT
//==================================================================
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const projectItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        },
    };

    return (
        <motion.section 
            ref={ref}
            id="projects" 
            className="mb-12 md:mb-24"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white flex items-center justify-center">
                <i className="fa-solid fa-lightbulb mr-3 md:mr-4 text-amber-400"></i>Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <motion.div variants={projectItemVariants} whileHover={{ y: -8, boxShadow: "0px 0px 30px -5px rgba(245, 158, 11, 0.3)" }} className="bg-slate-800 rounded-xl p-4 md:p-6 group transition-all duration-300 border border-slate-700/60 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-100">Pokemon Catch</h3>
                    <p className="text-sm md:text-base text-slate-400 mb-4">An interactive Pokemon game where users can catch, collect, and view Pokemon using the PokeAPI.</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">React.js</span>
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">PokeAPI</span>
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">Tailwind CSS</span>
                    </div>
                    <a href="https://catch-pokemon12.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold group-hover:underline text-sm md:text-base">
                        View Live Demo <motion.i initial={{x:0}} whileHover={{x:5}} className="fa-solid fa-arrow-right-long ml-1"></motion.i>
                    </a>
                </motion.div>
                <motion.div variants={projectItemVariants} whileHover={{ y: -8, boxShadow: "0px 0px 30px -5px rgba(245, 158, 11, 0.3)" }} className="bg-slate-800 rounded-xl p-4 md:p-6 group transition-all duration-300 border border-slate-700/60 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-100">Currency Converter</h3>
                    <p className="text-sm md:text-base text-slate-400 mb-4">A real-time currency conversion tool with support for multiple currencies and live exchange rates.</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">React.js</span>
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">Exchange Rate API</span>
                        <span className="inline-block bg-slate-700 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-400">Tailwind CSS</span>
                    </div>
                    <a href="https://exchange-rateconverter.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold group-hover:underline text-sm md:text-base">
                        View Live Demo <motion.i initial={{x:0}} whileHover={{x:5}} className="fa-solid fa-arrow-right-long ml-1"></motion.i>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};


//==================================================================
// 5. AI PROJECT MATCHER COMPONENT
//==================================================================
const AIProjectMatcher = ({ portfolioData }) => {
    const [projectDescription, setProjectDescription] = useState('');
    const [matchAnalysis, setMatchAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const handleMatchAnalysis = async () => {
        if (!projectDescription.trim()) {
            setError("Please describe your project or role first.");
            return;
        }
        setIsLoading(true);
        setError('');
        setMatchAnalysis('');

        const prompt = `
            Analyze how well ${portfolioData.name}'s profile matches the following project description.
            Act as a helpful recruitment assistant and provide a concise, professional analysis in 2-3 short paragraphs.
            Start by stating how good of a match she is. Then, highlight specific skills and projects from her profile that are most relevant to the project needs.
            Conclude with a confident summary of her suitability. Speak about her in the third person (e.g., "${portfolioData.name}'s skills...", "Her project...").

            **${portfolioData.name}'s Profile:**
            - Role: ${portfolioData.role}
            - Skills: Frontend (${portfolioData.skills.frontend.join(', ')}), Backend (${portfolioData.skills.backend.join(', ')})
            - Projects:
              1. ${portfolioData.projects[0].name}: Built ${portfolioData.projects[0].description} using ${portfolioData.projects[0].tech.join(' and ')}.
              2. ${portfolioData.projects[1].name}: Created ${portfolioData.projects[1].description} using ${portfolioData.projects[1].tech.join(' and ')}.

            **Client's Project Description:**
            "${projectDescription}"
        `;

        try {
            const apiKey = ""; // Left blank for security
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const payload = {
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();

            if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                setMatchAnalysis(result.candidates[0].content.parts[0].text);
            } else {
                setError("Sorry, the AI returned an empty response. Please try again.");
            }
        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError(`An error occurred. Please provide a valid API key and try again. (Error: ${err.message})`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section 
            ref={ref}
            id="ai-matcher" 
            className="mb-20 md:mb-24 bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-700/50"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-4xl font-bold mb-4 text-white flex items-center justify-center">
                    <i className="fa-solid fa-handshake-simple mr-4 text-amber-400"></i>AI Project Matchmaker
                </h2>
                <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
                    Is my profile a good fit for your project? Describe your needs below, and my AI assistant will analyze the match.
                </p>
            </motion.div>
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                <div className="bg-slate-900/50 p-6 rounded-xl shadow-lg border border-slate-700/60">
                    <textarea
                        className="w-full h-32 p-4 border-2 bg-slate-800 border-slate-600 text-slate-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                        placeholder="Describe your project, required skills, or the role you're hiring for..."
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                    ></textarea>
                    <div className="flex justify-center mt-4">
                        <motion.button
                            onClick={handleMatchAnalysis}
                            disabled={isLoading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-transform shadow-lg disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing...
                                </>
                            ) : 'Analyze Match'}
                        </motion.button>
                    </div>
                </div>
                {error && <p className="text-red-500 mt-6 text-center font-semibold">{error}</p>}
                
                <AnimatePresence>
                {(isLoading || matchAnalysis) && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-8"
                    >
                        <h3 className="text-2xl font-bold text-white text-center mb-4">Analysis Result</h3>
                        <div className="bg-slate-900/50 p-6 rounded-lg shadow-md border border-slate-700/80 min-h-[100px]">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full text-slate-400">
                                    <svg className="animate-spin mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Generating analysis...</span>
                                </div>
                            ) : (
                                <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{matchAnalysis}</p>
                            )}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
        </motion.section>
    );
};


//==================================================================
// 6. FOOTER COMPONENT
//==================================================================
const Footer = () => (
    <motion.footer 
        className="bg-slate-800 py-8 md:py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
    >
        <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400 text-sm md:text-base">&copy; {new Date().getFullYear()} Zarish Nasir</p>
            <p className="text-slate-500 text-xs md:text-sm mt-1">Designed with passion and coded with React & Tailwind CSS.</p>
            <div className="mt-4 md:mt-6 flex justify-center space-x-4 md:space-x-6">
                <a href="mailto:zarishnashir12345@gmail.com" className="text-slate-400 hover:text-amber-400 transition-colors duration-300 p-2"><i className="fa-solid fa-envelope text-xl md:text-2xl"></i></a>
                <a href="https://github.com/zarishnasir" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors duration-300 p-2"><i className="fa-brands fa-github text-xl md:text-2xl"></i></a>
                <a href="https://www.linkedin.com/in/zarish-nasir-531232378/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors duration-300 p-2"><i className="fa-brands fa-linkedin text-xl md:text-2xl"></i></a>
            </div>
        </div>
    </motion.footer>
);


//==================================================================
// 7. MAIN APP COMPONENT
//==================================================================
function App() {
    const portfolioData = {
        name: "Zarish Nasir",
        role: "Software Engineering Student",
        skills: {
            frontend: ["React.js (Advanced)", "Tailwind CSS (Expert)", "JavaScript (ES6+) (Advanced)"],
            backend: ["PHP (Proficient)", "MySQL (Advanced)", "Node.js (Intermediate)"]
        },
        projects: [
            { name: "Pokemon Catch", description: "an interactive Pokemon game where users can catch, collect, and view Pokemon.", tech: ["React.js", "PokeAPI", "Tailwind CSS"] },
            { name: "Currency Converter", description: "a real-time currency conversion tool with live exchange rates.", tech: ["React.js", "Exchange Rate API", "Tailwind CSS"] }
        ]
    };

    useEffect(() => {
        const googleFont = document.createElement('link');
        googleFont.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap";
        googleFont.rel = "stylesheet";
        document.head.appendChild(googleFont);
        
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fontAwesome);

        const framerMotion = document.createElement('script');
        framerMotion.src = "https://cdn.jsdelivr.net/npm/framer-motion@10/dist/framer-motion.umd.min.js";
        document.body.appendChild(framerMotion);

        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => anchor.addEventListener('click', smoothScroll));

        return () => {
            if (document.head.contains(googleFont)) document.head.removeChild(googleFont);
            if (document.head.contains(fontAwesome)) document.head.removeChild(fontAwesome);
            if (document.body.contains(framerMotion)) document.body.removeChild(framerMotion);
            anchors.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
        };
    }, []);

    const timelineRef = useRef(null);
    const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 font-poppins" id="home">
            <Navigation />
            <main className="container mx-auto px-4">
                <Header name={portfolioData.name} role={portfolioData.role} />

                <motion.section 
                    ref={timelineRef}
                    id="education" 
                    className="mb-20 md:mb-24 bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-700/50"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isTimelineInView ? "visible" : "hidden"}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white flex items-center"><i className="fa-solid fa-graduation-cap mr-4 text-amber-400"></i>Education</motion.h2>
                    <div className="border-l-4 border-amber-400 pl-6 relative">
                        <motion.div 
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: isTimelineInView ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute left-0 top-0 h-full w-1 bg-amber-400 origin-top"
                            style={{left: "-2px"}}
                        />
                        <motion.div variants={itemVariants} className="relative">
                            <div className="absolute -left-2.5 top-0 h-5 w-5 bg-amber-400 rounded-full border-4 border-slate-800"></div>
                            <h3 className="text-2xl font-semibold text-slate-100">BS Software Engineering</h3>
                            <p className="text-slate-400 flex items-center my-2"><span className="bg-slate-700 text-amber-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">2021–2025</span>GIFT University</p>
                            <div className="mt-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-lg mb-2">Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-slate-400"><span className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Dean's List Honoree - All Semesters</li>
                                        <li className="flex items-start text-slate-400"><span className="h-2 w-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Technical Lead at University Computing Society</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-lg mb-3">Core Focus Areas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-700 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">Data Structures & Algorithms</span>
                                        <span className="bg-slate-700 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">Web Development</span>
                                        <span className="bg-slate-700 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">Database Systems</span>
                                        <span className="bg-slate-700 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">Software Architecture</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section 
                    id="skills" 
                    className="mb-20 md:mb-24 bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-700/50"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-white flex items-center"><i className="fa-solid fa-cogs mr-4 text-amber-400"></i>Technical Skills</motion.h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold mb-4 text-slate-200">Frontend Development</h3>
                            <div className="space-y-5">
                                <Skill name="React.js" level="Advanced" percentage="90%" />
                                <Skill name="Tailwind CSS" level="Expert" percentage="95%" />
                                <Skill name="JavaScript (ES6+)" level="Advanced" percentage="85%" />
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold mb-4 text-slate-200">Backend Development</h3>
                            <div className="space-y-5">
                                <Skill name="PHP" level="Proficient" percentage="80%" />
                                <Skill name="MySQL" level="Advanced" percentage="85%" />
                                <Skill name="Node.js" level="Intermediate" percentage="75%" />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
                
                <Projects />

                <AIProjectMatcher portfolioData={portfolioData} />

            </main>
            <Footer />
        </div>
    );
}

export default App;
