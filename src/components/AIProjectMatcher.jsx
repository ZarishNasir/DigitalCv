import { useState } from 'react';

const AIProjectMatcher = ({ portfolioData }) => {
    const [projectDescription, setProjectDescription] = useState('');
    const [matchAnalysis, setMatchAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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
            // Note: API key should be stored in environment variables
            const apiKey = "AIzaSyCU5LQO-d0o52sXYVQymvRwHFA-xw53BxU";
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
            setError(`An error occurred. Please try again. (Error: ${err.message})`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-matcher" className="mb-20 md:mb-24 bg-gradient-to-br from-teal-50 to-indigo-100 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200/50">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4 text-indigo-600 flex items-center justify-center">
                    <i className="fa-solid fa-handshake-simple mr-4 text-teal-500"></i>AI Project Matchmaker
                </h2>
                <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                    Is my profile a good fit for your project? Describe your needs below, and my AI assistant will analyze the match.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200/60">
                    <textarea
                        className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        placeholder="Describe your project, required skills, or the role you're hiring for..."
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                    ></textarea>
                    <div className="flex justify-center mt-4">
                        <button 
                            onClick={handleMatchAnalysis} 
                            disabled={isLoading}
                            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105 shadow-lg disabled:bg-gray-400 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing...
                                </>
                            ) : (
                                'Analyze Match'
                            )}
                        </button>
                    </div>
                </div>
                {error && <p className="text-red-500 mt-6 text-center font-semibold">{error}</p>}
                
                {(isLoading || matchAnalysis) && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Analysis Result</h3>
                        <div className="bg-white/80 p-6 rounded-lg shadow-md border border-gray-200/80">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    <svg className="animate-spin mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Generating analysis...</span>
                                </div>
                            ) : (
                                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{matchAnalysis}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AIProjectMatcher;
