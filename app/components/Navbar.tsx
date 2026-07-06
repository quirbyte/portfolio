import { FileTextIcon, Menu, Moon } from "lucide-react";

export default function Navbar(){
    return <div className="sticky top-4 z-50 w-full bg-white/60 backdrop-blur-md border border-blue-300/50 rounded-2xl p-3 text-black">
        <div className="flex justify-between px-3 items-center">
            <div className="flex gap-1 items-baseline font-grotesk">
                <h1 className="font-bold text-lg">SM</h1>
                <p className="font-semibold text-zinc-600 text-sm">Portfolio</p>
            </div>
            <div className="hidden md:flex gap-1 font-semibold text-sm">
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Home</a>
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">About</a>
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Tech</a>
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Projects</a>
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Journey</a>
                <a className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">About</a>
            </div>
            <div className="flex gap-5">
                <button className="hidden bg-[#406BE0] py-2 px-4 md:flex items-center  text-white font-semibold text-sm rounded-full gap-2">
                    <FileTextIcon size={16} />
                    <p>Resume</p>
                </button>
                <button><Moon size={16} /></button>
                <button className="block md:hidden"><Menu size={16} /></button>
            </div>
        </div>
    </div>
}