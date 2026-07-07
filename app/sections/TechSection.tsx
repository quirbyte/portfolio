"use client";
import { Code2, Atom, Rocket, Server, Database, Zap, Radio, Wind, Layers3 } from "lucide-react";
import { motion } from "motion/react";

export default function TechSection() {
  const techs = [
    {
      icon: <Code2 size={22} />,
      title: "TypeScript",
      desc: "Type-safe architectures for large codebases",
    },
    {
      icon: <Atom size={22} />,
      title: "React",
      desc: "Composable UI systems with strong DX",
    },
    {
      icon: <Rocket size={22} />,
      title: "Next.js",
      desc: "High-performance SSR and routing at scale",
    },
    {
      icon: <Server size={22} />,
      title: "Node.js",
      desc: "REST APIs and backend service implementation",
    },
    {
      icon: <Database size={22} />,
      title: "PostgreSQL",
      desc: "Relational data modeling and optimization",
    },
    {
      icon: <Zap size={22} />,
      title: "Redis",
      desc: "Pub/sub, caching, queues, and low-latency state",
    },
    {
      icon: <Radio size={22} />,
      title: "WebSockets",
      desc: "Real-time, event-driven features at low latency",
    },
    {
      icon: <Wind size={22} />,
      title: "Tailwind CSS",
      desc: "Fast, maintainable design systems",
    },
    {
      icon: <Layers3 size={22} />,
      title: "Turborepo",
      desc: "Scalable monorepo developer workflows",
    },
  ];

  return (
    <div
      id="tech"
      className="w-full p-4 md:px-10 pt-30 text-zinc-900"
    >
      <div className="space-y-3 max-w-4xl">
        <span className="text-sm font-bold tracking-widest text-[#406BE0] dark:text-blue-300 uppercase">
          Tech Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-zinc-900 dark:text-white leading-tight font-grotesk">
          Tools I trust for high-quality product engineering.
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
          I combine modern frontend tooling with robust backend technologies to ship fast, scalable, and maintainable systems.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              transition: { duration: 0.01, ease: "easeOut" }
            }}
            className="bg-white/60 backdrop-blur-md border border-zinc-100 hover:border-blue-200/80 dark:bg-[#0C182A]/60 dark:border-blue-950 dark:hover:bg-[#0C182A]/60 dark:hover:border-blue-950 p-6 rounded-2xl shadow-xs flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-md hover:shadow-blue-900/2 group"
          >
            <div className="text-[#406BE0] dark:text-blue-300 bg-blue-50/10 dark:bg-black/10 p-1 rounded-md group-hover:scale-105 transition-transform duration-300">
              {tech.icon}
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg tracking-tight font-grotesk">
                {tech.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-normal">
                {tech.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}