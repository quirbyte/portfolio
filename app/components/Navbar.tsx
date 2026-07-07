"use client";
import { FileTextIcon, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div className={`sticky top-4 z-50 w-full ${isScrolled ? `bg-white/60 dark:bg-black/60` : `bg-[#C3E1FB] dark:bg-[#0B364D]`} backdrop-blur-md border border-blue-300/50 dark:border-[#0B364D] rounded-2xl p-3 text-black dark:text-white`}>
        <div className="flex justify-between px-3 items-center">
            <div className="flex gap-1 items-baseline font-grotesk">
                <h1 className="font-bold text-lg">SM</h1>
                <p className="font-semibold text-zinc-600 dark:text-zinc-400 text-sm">Portfolio</p>
            </div>
            <div className="hidden md:flex gap-1 font-semibold text-sm">
                <a href="#home" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Home</a>
                <a href="#about" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">About</a>
                <a href="#tech" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Tech</a>
                <a href="#projects" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Projects</a>
                <a href="#journey" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Journey</a>
                <a href="#contact" className="hover:bg-zinc-50/60 p-2 px-4 rounded-full hover:cursor-pointer">Contact Me</a>
            </div>
            <div className="flex gap-5">
                <motion.a whileHover={{
                    y: -1,
                    transition: { duration: 0.01, ease: "easeOut" },
                    boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }} href="/resume.pdf" className="hidden bg-[#406BE0] py-2 px-4 md:flex items-center text-white font-semibold text-sm rounded-full gap-2">
                    <FileTextIcon size={16} />
                    <p>Resume</p>
                </motion.a>
                <button onClick={theme === "light" ? () => setTheme("dark") : () => setTheme("light")} className="h-10 w-10 hover:bg-white rounded-full flex justify-center items-center dark:hover:bg-black/30">
                    {
                        theme==="light" ? <Moon size={16} /> : <Sun size={16} />
                    }
                </button>
                <button className="block md:hidden"><Menu size={16} /></button>
            </div>
        </div>
    </div>
}