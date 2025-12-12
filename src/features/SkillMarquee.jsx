import Marquee from "../components/ui/Marquee"
import { cn } from "../lib/utils"
import { useDarkMode } from "../Contexts/ThemeContext"
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript, SiVitess } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { LuLink } from "react-icons/lu";


const skills = [
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "Next.js", icon: <RiNextjsFill />, category: "Frontend" },
    { name: "JavaScript", icon: <RiJavascriptFill />, category: "Language" },
    { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, category: "Styling" },
    { name: "Node.js", icon: <DiNodejs />, category: "Backend" },
    { name: "Express", icon: <SiExpress />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, category: "Database" },
    { name: "Firebase", icon: <IoLogoFirebase />, category: "Backend" },
    { name: "Github", icon: <FaGithub />, category: "Tools" },
    { name: "Vite", icon: <SiVitess />, category: "Tools" },
    { name: "REST API", icon: <LuLink />, category: "Backend" },
]

const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
const secondRow = skills.slice(Math.ceil(skills.length / 2))

const SkillCard = ({ name, icon, category }) => {
    const { darkMode } = useDarkMode()

    const getIconColor = (skillName) => {
        const light = {
            "React": "text-cyan-500",
            "Next.js": "text-slate-900",
            "JavaScript": "text-yellow-500",
            "TypeScript": "text-blue-600",
            "Tailwind CSS": "text-cyan-600",
            "Node.js": "text-green-600",
            "Express": "text-gray-700",
            "MongoDB": "text-green-700",
            "PostgreSQL": "text-blue-700",
            "Firebase": "text-amber-500",
            "Github": "text-gray-800",
            "Vite": "text-purple-600",
            "REST API": "text-indigo-600",
        }
        const dark = {
            "React": "text-cyan-300",
            "Next.js": "text-slate-200",
            "JavaScript": "text-yellow-300",
            "TypeScript": "text-blue-400",
            "Tailwind CSS": "text-cyan-300",
            "Node.js": "text-green-400",
            "Express": "text-gray-300",
            "MongoDB": "text-green-300",
            "PostgreSQL": "text-blue-300",
            "Firebase": "text-amber-300",
            "Github": "text-gray-300",
            "Vite": "text-purple-300",
            "REST API": "text-indigo-300",
        }
        const map = darkMode ? dark : light
        return map[skillName] || (darkMode ? "text-white" : "text-slate-900")
    }

    const coloredIcon = icon && typeof icon === 'object' ?
        {
            ...icon,
            props: { ...icon.props, className: cn("", getIconColor(name)) }
        }
        : icon
    return (
        <div
            className={cn(
                "relative h-32 w-40 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105",
                // light styles
                darkMode
                    ? "border-slate-700/60 bg-slate-800/40 hover:bg-slate-800/60 text-white"
                    : "border-slate-200/80 bg-white/60 hover:bg-white/80 text-slate-900"
            )}
        >
            <div className="text-4xl">{coloredIcon}</div>
            <h3 className="text-sm font-semibold text-center">{name}</h3>
            <span className={cn(
                "text-xs px-2 py-1 rounded-full",
                darkMode
                    ? "bg-violet-500/30 text-violet-200"
                    : "bg-blue-100 text-blue-700"
            )}>
                {category}
            </span>
        </div>
    )
}

export function MarqueeDemo() {
    const { darkMode } = useDarkMode()
    return (
        <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

            <div className="relative mx-auto  px-2">

                <div className="space-y-8">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 dark:text-violet-300">Skills & Technologies</p>
                        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">Tools I Work With</h2>
                    </div>

                    <div className="relative flex flex-col gap-6">
                        <Marquee pauseOnHover className="[--duration:30s]">
                            {firstRow.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:30s]">
                            {secondRow.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarqueeDemo
