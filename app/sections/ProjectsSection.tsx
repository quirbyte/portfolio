import Card, { CardProps } from "../components/Card";

export default function ProjectsSection() {

    const projects: CardProps[] = [{
        id: 1,
        title: "DevLinks — A Link Management Platform",
        desc: "A high-performance, full-stack link management platform built with Next.js 16, Prisma, and Tailwind CSS. It features a multi-tenant architecture, secure OAuth authentication (Google, GitHub, LinkedIn), and a custom onboarding flow, all optimized for high-speed delivery via Turbopack.",
        img: "img1.JPG",
        codeLink: "https://github.com/quirbyte/Dev-Links",
        demoLink: "https://devlinks-tau-seven.vercel.app/",
        tags: ["oauth", " typescript", "nextjs", "postgresql", "prisma", "tailwindcss", "nextauth"]
    }, {
        id: 2,
        title: "Cortex — Multi Tenant SaaS",
        desc: "A multi-tenant event management platform that enables organizations to create and manage events, handle ticket bookings, and verify attendees at entry.",
        img: "img2.png",
        codeLink: "https://github.com/quirbyte/Cortex-v2",
        demoLink: "https://cortex-sage-seven.vercel.app/",
        tags: ["oauth", " typescript", "nextjs", "postgresql", "prisma", "tailwindcss", "nextauth"]
    }];

    return <div
        id="projects"
        className="w-full p-4 md:px-10 pt-30 text-zinc-900 dark:text-white"
    >
        <div className="space-y-3 max-w-4xl">
            <span className="text-sm font-bold tracking-widest text-[#406BE0] dark:text-blue-300 uppercase">
                My Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-zinc-900 dark:text-white leading-tight font-grotesk">
                Selected builds with product and engineering depth.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
                A snapshot of projects where I focused on clean architecture, practical UI, and scalable implementation choices.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-3">
            {
                projects.map((project) => (
                    <Card key={project.id} project={project} />
                ))
            }
        </div>
    </div>
}