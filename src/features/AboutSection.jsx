import React from 'react'

// Data-driven hero section; pass a custom `content` prop to override defaults.
const defaultContent = {
    greeting: "Hi, I'm",
    name: 'Shawon Reza',
    role: 'Frontend Developer',
    headline:
        'Frontend developer focused on scalable architecture, clean structure, clear UX, and performance.',
    subheadline:
        'I build responsive, accessible interfaces with React, modern tooling, and a keen eye on DX.',
    location: 'Dhaka, Bangladesh',
    availability: 'Open to remote opportunities',
    email: 'shawon.reza.dev@gmail.com',
    resumeUrl: '#',
    actions: [
        { label: "Let's Connect", href: 'mailto:shawon.reza.dev@gmail.com', variant: 'primary' },
        { label: 'View Résumé', href: '#', variant: 'ghost' },
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Performance'],
    stats: [
        { label: 'Production launches', value: '12+' },
        { label: 'Years building UI', value: '4+' },
        { label: 'Avg. Lighthouse UI', value: '95+' },
    ],
}

const AboutSection = ({ content = defaultContent }) => {
    const {
        greeting,
        name,
        role,
        headline,
        subheadline,
        location,
        availability,
        email,
        resumeUrl,
        actions,
        tags,
        stats,
    } = content

    const renderVariant = (variant) => {
        if (variant === 'primary') {
            return 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
        }
        return 'border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300'
    }

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white via-white to-blue-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.08),transparent_25%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-20 md:flex-row md:items-center md:pb-24 md:pt-24">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-200">
                        <span className="h-2 w-2 rounded-full bg-green-500" /> {availability}
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.25em] text-blue-600 dark:text-blue-300">{greeting}</p>
                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl dark:text-gray-50">
                            {name}
                            <span className="block text-lg font-semibold text-gray-600 dark:text-gray-300">{role}</span>
                        </h1>
                        <p className="text-lg text-gray-700 dark:text-gray-200">{headline}</p>
                        <p className="text-base text-gray-600 dark:text-gray-300">{subheadline}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                            <span className="h-2 w-2 rounded-full bg-blue-500" /> {location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {email}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {actions?.map((action) => (
                            <a
                                key={action.label}
                                href={action.href === '#' && action.label === 'View Résumé' ? resumeUrl : action.href}
                                className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${renderVariant(action.variant)}`}
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="relative mx-auto max-w-md rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
                        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 via-blue-500 to-emerald-400 p-[3px]">
                            <div className="rounded-[14px] bg-white px-8 py-10 text-center shadow-lg dark:bg-gray-950">
                                <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-linear-to-br from-blue-500 to-emerald-400 shadow-lg" />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{name}</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{subheadline}</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/60 sm:grid-cols-3">
                            {stats?.map((stat) => (
                                <div key={stat.label} className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
                                    <p className="text-lg font-bold text-gray-900 dark:text-gray-50">{stat.value}</p>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection