import { Mail, Phone, FileText, Trophy, Layers } from "lucide-react";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full flex flex-col items-center justify-center text-center px-4 py-16 text-zinc-900 bg-slate-50/10"
        >
            <div className="space-y-3 max-w-3xl mx-auto mb-12">
                <span className="text-sm font-bold tracking-[0.25em] text-[#406BE0] uppercase block">
                    Contact
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 font-grotesk">
                    Let’s build something meaningful together.
                </h2>
                <p className="text-sm md:text-base text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    I am always open to discussing full-time roles, internships, collaborations, and
                    product ideas that solve real problems.
                </p>
            </div>

            <div className="w-full max-w-4xl bg-white/40 border border-zinc-200/60 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center gap-8 shadow-xs">

                <p className="text-zinc-600 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                    If you’re looking for a developer who blends problem-solving depth with clean product
                    execution, let’s connect.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 w-full">

                    <a
                        href="mailto:soumyadipar12@gmail.com"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B66DE] hover:bg-[#2F55C7] text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer"
                    >
                        <Mail size={16} strokeWidth={2.5} />
                        <span>soumyadipar12@gmail.com</span>
                    </a>

                    <a
                        href="tel:7439580957"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#f8fafc]/60 hover:bg-[#f8fafc] border border-zinc-200/60 text-zinc-800 font-semibold text-sm transition-colors shadow-2xs cursor-pointer"
                    >
                        <Phone size={15} strokeWidth={2.5} className="text-zinc-500" />
                        <span>7439580957</span>
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#f8fafc]/60 hover:bg-[#f8fafc] border border-zinc-200/60 text-zinc-800 font-semibold text-sm transition-colors shadow-2xs cursor-pointer"
                    >
                        <FileText size={15} strokeWidth={2.5} className="text-zinc-500" />
                        <span>Resume</span>
                    </a>

                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 w-full border-t border-zinc-100 pt-6">

                    <a
                        href="https://github.com/quirbyte"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/quirbyte/"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://x.com/quirbyte"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                        <span>X</span>
                    </a>

                    <a
                        href="https://leetcode.com/u/soumyadip03112005/"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
                    >
                        <Trophy size={15} strokeWidth={2.2} className="text-zinc-500" />
                        <span>LeetCode</span>
                    </a>

                    <a
                        href="https://peerlist.io/soumyadipmondal"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs sm:text-sm transition-colors shadow-3xs cursor-pointer"
                    >
                        <Layers size={14} strokeWidth={2.2} className="text-zinc-500" />
                        <span>Peerlist</span>
                    </a>
                </div>
            </div>
        </section>
    );
}