import { Terminal, BriefcaseBusinessIcon, Globe, Trophy, Layers, ArrowRight, Download } from "lucide-react";

export default function HomeSection() {
    return (
        <div
            id="home"
            className="w-full flex flex-col lg:flex-row items-start justify-start p-4 pt-5 md:p-10 lg:pt-20 lg:justify-between text-zinc-900"
        >
            <div className="flex flex-col items-start gap-6 max-w-2xl mb-7 lg:mb-0">
                <div className="flex items-center gap-2 bg-white/80 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-semibold text-[#406BE0] shadow-xs tracking-wide uppercase">
                    <span className="w-1.5 h-1.5 bg-[#406BE0] rounded-full animate-pulse" />
                    Open to impactful opportunities
                </div>
                <div className="space-y-2 font-grotesk">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
                        Soumyadip Mondal
                    </h1>
                    <p className="text-2xl lg:text-3xl font-semibold text-[#406BE0]">
                        Full Stack Developer
                    </p>
                </div>

                <p className="text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed max-w-xl">
                    Building production-grade, real-time web applications. Open to Full Stack, Backend, and SDE roles.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <a href="#projects" className="bg-[#3B66DE] hover:bg-[#2F55C7] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-md shadow-blue-500/10 hover:cursor-pointer">
                        View Projects <ArrowRight size={18} />
                    </a>

                    <button className="border border-blue-300/50 hover:border-zinc-300 text-zinc-700 font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:cursor-pointer">
                        <Download size={18} /> Download Resume
                    </button>

                    <a href="#contact" className="text-zinc-600 hover:text-zinc-900 font-medium px-4 py-3 rounded-full transition-all hover:cursor-pointer">
                        Contact Me
                    </a>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/quirbyte"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-blue-300/50 bg-#C3E1FB flex items-center justify-center text-black hover:border-zinc-300 hover:bg-white transition-all shadow-3xs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/quirbyte/"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-blue-300/50 bg-#C3E1FB flex items-center justify-center text-black hover:border-zinc-300 hover:bg-white transition-all shadow-3xs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href="https://x.com/quirbyte"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-blue-300/50 bg-#C3E1FB flex items-center justify-center text-black hover:border-zinc-300 hover:bg-white transition-all shadow-3xs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                    </a>

                    {/* LeetCode (Trophy) */}
                    <a
                        href="https://leetcode.com/u/soumyadip03112005/"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-blue-300/50 bg-#C3E1FB flex items-center justify-center text-black hover:border-zinc-300 hover:bg-white transition-all shadow-3xs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            <path d="M4 22h16"></path>
                            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
                            <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"></path>
                        </svg>
                    </a>

                    {/* Peerlist (Layers) */}
                    <a
                        href="https://peerlist.io/soumyadipmondal"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-blue-300/50 bg-#C3E1FB flex items-center justify-center text-black hover:border-zinc-300 hover:bg-white transition-all shadow-3xs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 3-10 5 10 5 10-5-10-5Z"></path>
                            <path d="m2 17 10 5 10-5"></path>
                            <path d="m2 12 10 5 10-5"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="w-full lg:max-w-md bg-white/70 backdrop-blur-md border border-white/60 p-8 rounded-4xl shadow-xl shadow-blue-900/5 flex flex-col gap-6">

                <div className="self-start flex items-center gap-2 bg-zinc-50 border border-zinc-200/80 px-3 py-1 rounded-md text-xs font-medium text-zinc-600">
                    <BriefcaseBusinessIcon size={14} className="text-blue-500" />
                    Professional Focus
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 leading-snug">
                        Scalable backend + clean frontend, built for real product growth.
                    </h2>
                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                        I care about architecture, developer experience, and interfaces that feel polished from the first interaction.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="border border-zinc-200/60 bg-white/50 p-4 rounded-2xl">
                        <p className="text-2xl font-bold text-zinc-900">7+</p>
                        <p className="text-xs text-zinc-500 font-medium mt-0.5">Production-focused builds</p>
                    </div>

                    <div className="border border-zinc-200/60 bg-white/50 p-4 rounded-2xl">
                        <p className="text-2xl font-bold text-zinc-900">24 x 7</p>
                        <p className="text-xs text-zinc-500 font-medium mt-0.5">Learning mindset</p>
                    </div>
                </div>

            </div>

        </div>
    );
}