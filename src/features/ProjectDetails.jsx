import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useDarkMode } from "../Contexts/ThemeContext";

const projects = [
    {
        title: "Orbit CRM",
        slug: "orbit-crm",
        description: "Collaborative CRM with real-time activity feed and role-based access.",
        longDescription:
            "Orbit CRM centralizes customer data, automates workflows, and enables real-time collaboration. Teams can track deals, leave comments with presence indicators, and enforce granular permissions with audit trails.",
        role: "Full-stack",
        timeline: "2024 · Team of 5",
        stack: ["React", "Node", "PostgreSQL", "Tailwind"],
        highlights: [
            "Live presence and comments on deals",
            "Role-based access with audit trails",
            "Pipeline dashboards with export",
        ],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80",
        ],
        links: { live: "#", repo: "#" },
        metrics: [
            { label: "Active Users", value: "2.4k" },
            { label: "Avg. Response", value: "180ms" },
            { label: "Deploys/Month", value: "28" },
        ],
        reviews: [
            {
                author: "Ava Martinez",
                role: "Product Manager",
                rating: 5,
                comment:
                    "Orbit CRM streamlined our pipeline. Presence and audit trails made collaboration effortless.",
                avatar:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=60",
            },
            {
                author: "Noah Williams",
                role: "Sales Lead",
                rating: 4,
                comment:
                    "Dashboards are insightful and exports save time. Looking forward to more integrations.",
                avatar:
                    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=60",
            },
        ],
    },
];

const stars = (n) => new Array(5).fill(0).map((_, i) => (
    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={i < n ? "#f59e0b" : "#334155"} className="h-5 w-5">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.801 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.538 1.118l-2.8-2.035a1 1 0 00-1.176 0l-2.8 2.035c-.783.57-1.838-.196-1.539-1.118l1.071-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
));

const ProjectDetails = () => {
    const { slug } = useParams();
    const { darkMode } = useDarkMode();

    const project = useMemo(() => {
        if (!slug) return projects[0];
        const key = slug.toLowerCase();
        return projects.find((p) => p.slug === key) || projects[0];
    }, [slug]);

    if (!project) return null;

    const bgGrad = darkMode
        ? "bg-linear-to-br from-slate-950 via-purple-950 to-slate-950"
        : "bg-linear-to-br from-white via-blue-50 to-purple-50";

    const glowOverlay =
        "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]";

    const avgRating = project.reviews?.length
        ? Math.round((project.reviews.reduce((a, r) => a + (r.rating || 0), 0) / project.reviews.length) * 10) / 10
        : 0;

    return (
        <div className={`min-h-screen ${bgGrad}`}>
            <Navbar />

            {/* Hero */}
            <section className="relative">
                <div className={glowOverlay} />

                <div className="mx-auto  px-6 py-8 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-64 sm:h-80 md:h-[28rem] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Featured Project</p>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                                    {project.title}
                                </h1>
                                <p className="mt-2 text-white/90 max-w-2xl hidden sm:block">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-violet-300">Stack</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="inline-block rounded-full bg-slate-900/70 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white/90 shadow">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-violet-300">Role & Timeline</p>
                                <p className="mt-2 text-slate-700 dark:text-slate-300">{project.role} · {project.timeline}</p>
                                <div className="mt-4 flex gap-3">
                                    <a href={project.links.live} className="px-4 py-2 rounded-full font-semibold text-white bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-all">Live</a>
                                    <a href={project.links.repo} className="px-4 py-2 rounded-full font-semibold text-blue-600 dark:text-violet-300 bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">Repo</a>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-violet-300">Metrics</p>
                                <div className="mt-3 grid grid-cols-3 gap-3">
                                    {project.metrics.map((m) => (
                                        <div key={m.label} className="rounded-lg bg-slate-100/70 dark:bg-slate-800/60 p-3 text-center">
                                            <p className="text-xl font-bold text-slate-900 dark:text-white">{m.value}</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="relative">
                <div className={glowOverlay} />
                <div className="mx-auto  px-6 py-8 sm:py-12">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Overview</h2>
                        <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
                            {project.longDescription}
                        </p>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Key Features</h3>
                                <ul className="mt-2 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                                    {project.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Deliverables</h3>
                                <ul className="mt-2 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                                    <li>Documentation & walkthroughs</li>
                                    <li>Deployment & monitoring</li>
                                    <li>QA test plan</li>
                                    <li>Handoff checklist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {project.gallery?.length ? (
                <section className="relative">
                    <div className={glowOverlay} />
                    <div className="mx-auto  px-6 py-8 sm:py-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Screenshots</h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {project.gallery.map((src, i) => (
                                <div key={src + i} className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
                                    <img src={src} alt={`Screenshot ${i + 1}`} className="h-56 sm:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* Client Reviews */}
            <section className="relative">
                <div className={glowOverlay} />
                <div className="mx-auto  px-6 py-8 sm:py-12">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Client Reviews</h2>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">{stars(Math.round(avgRating))}</div>
                            <span className="text-sm text-slate-700 dark:text-slate-300">{avgRating} / 5</span>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {(project.reviews || []).map((r, idx) => (
                            <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5">
                                <div className="flex items-center gap-4">
                                    <img src={r.avatar} alt={r.author} className="h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">{r.author}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{r.role}</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center">{stars(r.rating)}</div>
                                <p className="mt-3 text-slate-700 dark:text-slate-300">{r.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectDetails;