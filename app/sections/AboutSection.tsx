import { BrainCircuit, Database, Cpu, MonitorPlay } from "lucide-react";

export default function AboutSection() {
  return (
    <div 
      id="about" 
      className="w-full p-4 md:px-10 pt-30 text-zinc-900"
    >
      <div className="space-y-3 max-w-4xl">
        <span className="text-sm font-bold tracking-widest text-[#406BE0] dark:text-blue-300 uppercase">
          About Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-zinc-900 dark:text-white leading-tight font-grotesk">
          I build real-time systems that hold up in production.
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
          Full Stack Developer specializing in low-latency, real-time web applications.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-10 pt-3">
        
        <div className="flex-1 bg-white/50 backdrop-blur-md border border-white/60 dark:bg-[#0C182A] dark:border-blue-950 p-8 rounded-4xl shadow-xl shadow-blue-900/5 flex flex-col justify-center gap-6">
          <p className="text-zinc-700 dark:text-zinc-400 text-lg md:text-md font-medium leading-relaxed">
            My core strength sits at the intersection of backend depth and frontend clarity: I design WebSocket and Redis pub/sub pipelines, build secure REST APIs with JWT and role-based access, and ship to AWS with Docker and CI/CD.
          </p>
          <p className="text-zinc-700 dark:text-zinc-400 text-lg md:text-md font-medium leading-relaxed">
            I've shipped a Multi Tenant SaaS Ticket Booking platform and a collaborative whiteboard — and I keep sharpening DSA, system design, and real-world architecture along the way.
          </p>
        </div>
        <div className="w-full lg:max-w-xl flex flex-col gap-4">
          
          <div className="bg-white/70 backdrop-blur-md border border-white/60 dark:bg-[#0C182A] dark:border-blue-950 p-5 rounded-2xl shadow-xs flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#406BE0] dark:text-blue-300">
              <BrainCircuit size={20} />
              <h3 className="font-bold text-zinc-900 dark:text-white text-base">Problem Solving</h3>
            </div>
            <p className="text-sm text-zinc-500 font-medium pl-7">
              Strong focus on DSA patterns and interview-level problem solving.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/60 dark:bg-[#0C182A] dark:border-blue-950 p-5 rounded-2xl shadow-xs flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#406BE0] dark:text-blue-300">
              <Database size={20} />
              <h3 className="font-bold text-zinc-900 dark:text-white text-base">System Design</h3>
            </div>
            <p className="text-sm text-zinc-500 font-medium pl-7">
              Learning scalable architecture tradeoffs and resilient service design.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/60 dark:bg-[#0C182A] dark:border-blue-950 p-5 rounded-2xl shadow-xs flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#406BE0] dark:text-blue-300">
              <Cpu size={20} />
              <h3 className="font-bold text-zinc-900 dark:text-white text-base">Backend Engineering</h3>
            </div>
            <p className="text-sm text-zinc-500 font-medium pl-7">
              Building reliable APIs, data flows, and event-driven services.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/60 dark:bg-[#0C182A] dark:border-blue-950 p-5 rounded-2xl shadow-xs flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#406BE0] dark:text-blue-300">
              <MonitorPlay size={20} />
              <h3 className="font-bold text-zinc-900 dark:text-white text-base">Frontend Craft</h3>
            </div>
            <p className="text-sm text-zinc-500 font-medium pl-7">
              Designing premium layouts with focus on performance and micro-interactions.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}