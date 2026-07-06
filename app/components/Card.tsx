import { ExternalLink } from "lucide-react";

export type CardProps = {
    id: number;
    img: string;
    title: string;
    desc: string;
    tags: string[];
    codeLink: string;
    demoLink: string;
}

export default function Card({ project }: { project: CardProps }) {
    return (
        <div className="max-w-100 bg-white shadow-md rounded-3xl overflow-hidden flex flex-col gap-3 group">
            <div className="h-50 border-b border-zinc-200 overflow-hidden">
                <img src={project.img} alt="" className="w-full h-full object-cover group-hover:scale-102" />
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h1 className="font-bold text-xl font-grotesk">{project.title}</h1>
                <p className="text-zinc-500">{project.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 px-5">
                {
                    project.tags.map((tag) => (
                        <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">{tag}</p>
                    ))
                }
            </div>

            <div className="flex items-center gap-3 px-5 pb-5 mt-2">
                <a href={project.codeLink} target="_blank" className="px-5 py-2.5 flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 font-bold text-white rounded-full text-sm transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span>Code</span>
                </a>
                <a href={project.demoLink} target="_blank" className="px-5 py-2.5 flex items-center justify-center gap-2 border border-zinc-200 hover:bg-zinc-50 rounded-full text-sm font-bold text-zinc-700 transition-colors cursor-pointer">
                    <span>Live Demo</span>
                    <ExternalLink size={15} strokeWidth={2.5} className="text-zinc-500" />
                </a>
            </div>
        </div>
    );
}