import { useEffect, useRef, useState } from 'react';

const Skill = ({ name, level, percentage }) => {
    const [inView, setInView] = useState(false);
    const skillRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setInView(true), 100);
                    if(skillRef.current) {
                        observer.unobserve(skillRef.current);
                    }
                }
            },
            { threshold: 0.5 }
        );

        const currentSkillRef = skillRef.current;
        if (currentSkillRef) {
            observer.observe(currentSkillRef);
        }

        return () => {
            if (currentSkillRef) {
                observer.unobserve(currentSkillRef);
            }
        };
    }, []);

    return (
        <div ref={skillRef} className="p-4 bg-gray-50/50 rounded-xl border border-gray-200/80 hover:border-teal-400/50 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700 group-hover:text-teal-600 transition-colors duration-300">{name}</span>
                <span className="text-sm text-teal-600 bg-teal-100/70 px-2.5 py-1 rounded-full font-semibold">{level}</span>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? percentage : '0%' }}
                ></div>
            </div>
        </div>
    );
};

export default Skill;
