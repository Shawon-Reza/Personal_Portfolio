import StickyScroll from "../components/ui/StickyScroll";
import { useDarkMode } from "../Contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        title: "Orbit CRM",
        stack: ["React", "Node", "PostgreSQL", "Tailwind"],
        description: "Collaborative CRM with real-time activity feed and role-based access.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        role: "Full-stack",
        timeline: "2024 · Team of 5",
        highlights: [
            "Live presence and comments on deals",
            "Role-based access with audit trails",
            "Pipeline dashboards with export",
        ],
    },
    {
        title: "Pulse Analytics",
        stack: ["Next.js", "tRPC", "Prisma", "Postgres"],
        description: "Product analytics dashboard with cohort charts and feature flags.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        role: "Frontend lead",
        timeline: "2025 · Growth squad",
        highlights: [
            "Cohort, retention, and funnel views",
            "Feature flags with gradual rollout",
            "Segmented email export to ESP",
        ],
    },
    {
        title: "Nimbus Docs",
        stack: ["React", "WebSockets", "Quill"],
        description: "Real-time collaborative docs with comments and presence indicators.",
        image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80",
        role: "Frontend + Realtime",
        timeline: "2024 · Solo build",
        highlights: [
            "Cursor presence and inline comments",
            "Version history with restore",
            "Share links with granular permissions",
        ],
    },
    {
        title: "Strata Commerce",
        stack: ["Next.js", "Stripe", "Sanity"],
        description: "Headless ecommerce starter with checkout, search, and CMS-driven pages.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        role: "Full-stack",
        timeline: "2023 · Starter kit",
        highlights: [
            "Stripe checkout + webhooks",
            "Sanity-driven product pages",
            "Algolia-style search with filters",
        ],
    },
];

const content = projects.map((project, i) => ({
    title: project.title,
    description: project.description,
    stack: project.stack,
    role: project.role,
    timeline: project.timeline,
    highlights: project.highlights,
    content: (
        <div className="h-full w-full relative">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>
    ),
}));

export function StickyScrollRevealDemo() {

    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate("/projects");
    };

    return (
        <section className={`relative w-full pt-10 sm:pt-12 overflow-hidden ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

            <div className="mx-auto relative p-6 text-center space-y-3">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500 dark:text-violet-300">Projects</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">Work I've built recently</h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mx-auto">
                    One featured project per scroll. Explore dashboards, collaboration tools, and commerce builds crafted with modern stacks.
                </p>
            </div>

            <div className="">
                <StickyScroll content={content} />
            </div>

            <div className="relative flex justify-center pb-12 pt-6">
                <button
                    onClick={()=>{
                        handleViewAll();
                        navigate("/projects/4");
                    }}
                    className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    View All Projects
                </button>
            </div>
        </section>
    );
}
