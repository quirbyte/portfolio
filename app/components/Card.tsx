import { ExternalLink, Globe } from "lucide-react";

export default function Card() {
    return (
        <div className="max-w-100 bg-white shadow-md rounded-3xl overflow-hidden flex flex-col gap-3">
            <div className="h-50 border-b border-zinc-200 overflow-hidden">
                <img src="/img1.JPG" alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="p-5 flex flex-col gap-3">
                <h1 className="font-bold text-xl font-grotesk">LeetLab — Coding Practice Platform</h1>
                <p className="text-zinc-500">LeetCode-style platform with an in-browser Monaco editor and a Judge0 execution engine for 50+ problems, real-time results, submission tracking, and JWT auth with role-based access.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 px-5">
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">React</p>
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">Node.js</p>
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">PostgreSQL</p>
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">TypeScript</p>
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">Express.js</p>
                <p className="px-3 py-1 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">Judge0</p>
            </div>
            
            {/* Fixed Button Row Alignment & Spacing */}
            <div className="flex items-center gap-3 px-5 pb-5 mt-2">
                <button className="px-5 py-2.5 flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 font-bold text-white rounded-full text-sm transition-colors cursor-pointer">
                    <Globe size={16} strokeWidth={2.5} />
                    <span>Code</span>
                </button>
                <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-zinc-200 hover:bg-zinc-50 rounded-full text-sm font-bold text-zinc-700 transition-colors cursor-pointer">
                    <span>Live Demo</span>
                    <ExternalLink size={15} strokeWidth={2.5} className="text-zinc-500" />
                </button>
            </div>
        </div>
    );
}