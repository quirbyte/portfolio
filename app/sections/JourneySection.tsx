import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function JourneySection() {
    return (
        <div
            id="journey"
            className="w-full p-4 md:px-10 pt-30 text-zinc-900"
        >
            <div className="space-y-3 max-w-4xl">
                <span className="text-sm font-bold tracking-widest text-[#406BE0] uppercase">
                    Experience and Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-zinc-900 leading-tight font-grotesk">
                    Always shipping, always leveling up.
                </h2>
                <p className="text-base md:text-lg text-zinc-600 font-medium max-w-3xl leading-relaxed">
                    Hands-on product work backed by a depth-first approach to learning and system design.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <div className="lg:col-span-7 border border-zinc-200/80 rounded-[2.5rem] p-6 flex flex-col gap-5 bg-white/40">
                    
                    <div className="w-full bg-[#f8faff] border border-blue-100/70 rounded-2xl p-6 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                            <Briefcase size={18} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-3 flex-1 min-w-0">
                            <div>
                                <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                                    Full Stack Developer Intern <span className="text-blue-600 font-extrabold">@Open-Source</span>
                                </h3>
                                <p className="text-xs font-semibold text-zinc-400 mt-0.5">
                                    Jan 2026 — Present <span className="mx-1.5">•</span> Remote
                                </p>
                            </div>
                            <ul className="space-y-2.5 text-sm text-zinc-600 font-medium list-disc pl-4 marker:text-blue-500">
                                <li>Ship production features across a React + Node.js stack through pull requests, code reviews, and CI on every merge.</li>
                                <li>Build and integrate REST APIs and backend logic spanning MongoDB and PostgreSQL data layers.</li>
                                <li>Optimize component rendering and client–server communication to improve end-to-end performance.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full bg-white border border-zinc-100 rounded-2xl p-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 shrink-0">
                                <GraduationCap size={20} strokeWidth={2.2} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-base text-zinc-900 tracking-tight truncate">
                                    B.Tech, Computer Science ( AI & ML )
                                </h3>
                                <p className="text-xs font-medium text-zinc-400 mt-0.5 truncate">
                                    Kalinga Institute of Industrial Technology
                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 whitespace-nowrap hidden sm:inline">
                            2024 — 2028 ( CGPA : 8.63/10.00)
                        </span>
                    </div>

                </div>

                <div className="lg:col-span-5 border border-zinc-200/80 rounded-[2.5rem] p-6 flex flex-col gap-4 bg-white/40">
                    
                    <div className="flex">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200/60 rounded-md text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                            <Sparkles size={11} className="text-blue-500 fill-blue-500/10" />
                            Currently exploring
                        </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        {[
                            "Distributed systems & system design",
                            "Real-time architectures with WebSockets & Redis",
                            "GenAI — RAG, embeddings, and agentic workflows",
                            "Data Structures & Algorithms in Java"
                        ].map((text) => (
                            <div 
                                key={text} 
                                className="w-full px-5 py-3.5 bg-[#f8fafc]/50 hover:bg-[#f8fafc] border border-zinc-200/50 rounded-xl text-sm font-bold text-zinc-700 transition-colors shadow-2xs cursor-default"
                            >
                                {text}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}