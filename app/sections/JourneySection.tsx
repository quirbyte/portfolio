import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function JourneySection() {
    return (
        <div
            id="journey"
            className="w-full p-4 md:px-10 pt-30 text-zinc-900 dark:text-white"
        >
            <div className="space-y-3 max-w-4xl">
                <span className="text-sm font-bold tracking-widest text-[#406BE0] dark:text-blue-300 uppercase">
                    Experience and Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-zinc-900 dark:text-white leading-tight font-grotesk">
                    Always shipping, always leveling up.
                </h2>
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
                    Hands-on product work backed by a depth-first approach to learning and system design.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-3">

                <div className="lg:col-span-7 border border-zinc-200/80 dark:border-zinc-800 rounded-[2.5rem] p-6 flex flex-col gap-5 bg-white/40 dark:bg-[#0A0F1C]/60">


                    <div className="w-full bg-white border dark:bg-[#0A0F1C] dark:border-zinc-800 border-zinc-100 rounded-2xl p-2 md:p-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-5 h-5 md:h-10 md:w-10 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:border-zinc-800 dark:bg-[#0A0F1C] flex items-center justify-center text-zinc-700 dark:text-white shrink-0">
                                <GraduationCap size={20} strokeWidth={2.2} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-base text-zinc-900 dark:text-white tracking-tight truncate">
                                    B.Tech, Computer Science ( AI & ML )
                                </h3>
                                <p className="text-[10px] md:text-xs font-medium text-zinc-400 mt-0.5 truncate">
                                    Kalinga Institute of Industrial Technology
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 whitespace-nowrap hidden sm:inline">
                            2024 — 2028 ( CGPA : 8.63/10.00)
                        </span>
                    </div>

                    <div className="w-full bg-white border dark:bg-[#0A0F1C] dark:border-zinc-800 border-zinc-100 rounded-2xl p-2 md:p-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-5 h-5 md:h-10 md:w-10 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:border-zinc-800 dark:bg-[#0A0F1C] flex items-center justify-center text-zinc-700 dark:text-white shrink-0">
                                <GraduationCap size={20} strokeWidth={2.2} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-base text-zinc-900 dark:text-white tracking-tight truncate">
                                    12th CBSE, PCM
                                </h3>
                                <p className="text-[10px] md:text-xs font-medium text-zinc-400 mt-0.5 truncate">
                                    Delhi Public School, Joka (South Kolkata)
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 whitespace-nowrap hidden sm:inline">
                            2022 — 2024
                        </span>
                    </div>

                    <div className="w-full bg-white border dark:bg-[#0A0F1C] dark:border-zinc-800 border-zinc-100 rounded-2xl p-2 md:p-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-5 h-5 md:h-10 md:w-10 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:border-zinc-800 dark:bg-[#0A0F1C] flex items-center justify-center text-zinc-700 dark:text-white shrink-0">
                                <GraduationCap size={20} strokeWidth={2.2} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-base text-zinc-900 dark:text-white tracking-tight truncate">
                                    10th ICSE
                                </h3>
                                <p className="text-[10px] md:text-xs font-medium text-zinc-400 mt-0.5 truncate">
                                    K.E. Carmel School, Sarisha
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 whitespace-nowrap hidden sm:inline">
                            2010 — 2022
                        </span>
                    </div>

                </div>

                <div className="lg:col-span-5 border border-zinc-200/80 dark:bg-[#0A0F1C] dark:border-zinc-800 rounded-[2.5rem] p-6 flex flex-col gap-4 bg-white/40">

                    <div className="flex">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200/60 dark:bg-black dark:border-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                            <Sparkles size={11} className="text-blue-500 dark:text-blue-300 fill-blue-500/10" />
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
                                className="w-full px-5 py-3.5 bg-[#f8fafc]/50 border border-zinc-200/50 dark:bg-[#0A0F1C] dark:border-zinc-800 rounded-full text-sm font-bold text-zinc-700 dark:text-zinc-200 transition-colors shadow-2xs cursor-default"
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