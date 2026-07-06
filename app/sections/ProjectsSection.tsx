import Card from "../components/Card";

export default function ProjectsSection() {
    return <div
        id="projects"
        className="min-h-[calc(100vh-80px)] w-full gap-y-8 gap-x-10 p-4 md:p-12 text-zinc-900"
    >
        <div className="space-y-3 max-w-4xl">
            <span className="text-sm font-bold tracking-widest text-[#406BE0] uppercase">
                My Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight font-grotesk">
                Selected builds with product and engineering depth.
            </h2>
            <p className="text-base md:text-lg text-zinc-600 font-medium max-w-3xl leading-relaxed">
                A snapshot of projects where I focused on clean architecture, practical UI, and scalable implementation choices.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-3">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
}