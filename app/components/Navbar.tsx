"use client";
import { FileTextIcon, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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

    const menuVariants = {
        hidden: { 
            opacity: 0, 
            y: -15,
            scale: 0.97
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.2, 
                ease: "easeOut" 
            } 
        },
        exit: { 
            opacity: 0, 
            y: -10,
            scale: 0.97,
            transition: { 
                duration: 0.15, 
                ease: "easeIn" 
            } 
        }
    } as const;

    const buttonHoverProps = {
        whileHover: {
            y: -1,
            transition: { duration: 0.01, ease: "easeOut" },
            boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
    } as const;

    return (
        <div className={`sticky top-4 z-50 w-full ${isScrolled ? `bg-white/60 dark:bg-black/60` : `bg-[#C3E1FB] dark:bg-[#0B364D]`} backdrop-blur-md border border-blue-300/50 dark:border-[#0B364D] rounded-2xl p-3 text-black dark:text-white`}>
            <div className="flex justify-between px-3 items-center">
                <div className="flex gap-1 items-baseline font-grotesk">
                    <h1 className="font-bold text-lg">SM</h1>
                    <p className="font-semibold text-zinc-600 dark:text-zinc-400 text-sm">Portfolio</p>
                </div>
                
                <div className="hidden md:flex gap-1 font-semibold text-sm">
                    <a href="#home" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">Home</a>
                    <a href="#about" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">About</a>
                    <a href="#tech" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">Tech</a>
                    <a href="#projects" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">Projects</a>
                    <a href="#journey" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">Journey</a>
                    <a href="#contact" className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 p-2 px-4 rounded-full hover:cursor-pointer">Contact Me</a>
                </div>
                
                <div className="flex gap-2 sm:gap-5">
                    <motion.a 
                        {...buttonHoverProps} 
                        href="/resume.pdf" 
                        className="hidden bg-[#406BE0] dark:bg-blue-300 dark:text-black py-2 px-4 md:flex items-center text-white font-semibold text-sm rounded-full gap-2"
                    >
                        <FileTextIcon size={16} />
                        <p>Resume</p>
                    </motion.a>
                    
                    <button 
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
                        className="h-10 w-10 hover:bg-white rounded-full flex justify-center items-center dark:hover:bg-black/30 cursor-pointer transition-colors"
                    >
                        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                    </button>
                    
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden h-10 w-10 hover:bg-white/40 dark:hover:bg-black/30 rounded-full flex justify-center items-center cursor-pointer transition-colors"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white dark:bg-[#0A0F1C] border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-4 shadow-xl flex flex-col gap-1 font-semibold text-sm text-zinc-800 dark:text-zinc-200"
                    >
                        <a onClick={() => setIsOpen(false)} href="#home" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors">Home</a>
                        <a onClick={() => setIsOpen(false)} href="#about" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors">About</a>
                        <a onClick={() => setIsOpen(false)} href="#tech" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors">Tech</a>
                        <a onClick={() => setIsOpen(false)} href="#projects" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors">Projects</a>
                        <a onClick={() => setIsOpen(false)} href="#journey" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors">Journey</a>
                        <a onClick={() => setIsOpen(false)} href="#contact" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 p-3 px-4 rounded-xl transition-colors mb-2">Contact Me</a>
                        
                        <motion.a 
                            {...buttonHoverProps}
                            onClick={() => setIsOpen(false)}
                            href="/resume.pdf" 
                            className="w-full bg-[#406BE0] dark:bg-blue-300 dark:text-black py-3 px-4 flex justify-center items-center text-white font-semibold text-sm rounded-full gap-2 transition-colors dark:hover:bg-blue-200"
                        >
                            <FileTextIcon size={16} />
                            <span>Resume</span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}