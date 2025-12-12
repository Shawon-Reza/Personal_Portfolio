import React from 'react'
import { useDarkMode } from '../Contexts/ThemeContext'
import { ShineBorder } from '../components/ui/ShineBorder'
import { PinContainer } from '../components/ui/PinContainer'
import { TypewriterEffectSmooth } from '../components/ui/TypewriterEffectSmooth'
import { Meteors } from '../components/ui/Meteors'
import { TextHoverEffect } from '../components/ui/TextHoverEffectDemo'
import profile_img from '../assets/images/profile_img.jpg'



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
        { label: 'View Resume', href: '#', variant: 'ghost' },
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Performance'],
    stats: [
        { label: 'Production launches', value: '12+' },
        { label: 'Years building UI', value: '4+' },
        { label: 'Avg. Lighthouse UI', value: '95+' },
    ],
}

const AboutSection = ({ content = defaultContent }) => {
    const { darkMode } = useDarkMode()
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

    const words = [
        { text: "As" },
        { text: "a" },
        { text: "Full" },
        { text: "Stack" },
        { text: "Web" },
        { text: "developer," },
        { text: "I" },
        { text: "design" },
        { text: "and" },
        { text: "build" },
        { text: "scalable," },
        { text: "high-performance" },
        { text: "web" },
        { text: "applications" },
        { text: "that" },
        { text: "combine" },
        { text: "intuitive" },
        { text: "user" },
        { text: "experiences" },
        { text: "with" },
        { text: "robust," },
        { text: "maintainable" },
        { text: "backend" },
        { text: "systems." },
        { text: "Leveraging" },
        { text: "expertise" },
        { text: "across" },
        { text: "frontend" },
        { text: "and" },
        { text: "backend" },
        { text: "technologies," },
        { text: "I" },
        { text: "deliver" },
        { text: "solutions" },
        { text: "that" },
        { text: "drive" },
        { text: "efficiency," },
        { text: "reliability," },
        { text: "and" },
        { text: "business" },
        { text: "impact." }
    ];


    const renderVariant = (variant) => {
        if (variant === 'primary') {
            return darkMode
                ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/25'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
        }
        return darkMode
            ? 'border border-gray-700 text-gray-100 hover:border-violet-400 hover:text-violet-300'
            : 'border border-gray-300 text-gray-800 hover:border-blue-400 hover:text-blue-600'
    }

    return (
        <section className={`relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>
            {/* Below Div is for bg vive */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />


            <div className="relative mx-auto flex  flex-col gap-12 px-6 pb-16 pt-20 md:flex-row md:items-center md:pb-24 md:pt-24">
                <div className="flex-1 space-y-6">
                    <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-medium shadow-sm backdrop-blur transition-colors duration-300 ${darkMode ? 'border-gray-800 bg-gray-900/70 text-gray-200' : 'border-gray-200 bg-white/70 text-gray-700'
                        }`}>
                        <span className="h-2 w-2 rounded-full bg-green-500" /> {availability}
                    </div>

                    <div className="space-y-3">
                        <p className={`text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${darkMode ? 'text-violet-400' : 'text-blue-600'
                            }`}>{greeting}</p>
                        <h1 className={`text-4xl font-extrabold leading-tight sm:text-5xl transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                            }`}>
                            {name}
                            <span className={`block text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>{role}</span>
                        </h1>
                        <p className={`text-lg transition-colors duration-300 ] ${darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{headline}</p>

                        <TypewriterEffectSmooth words={words} className="font-normal opacity-60 " />

                        <p className={`text-base transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>{subheadline}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition-colors duration-300 ${darkMode ? 'bg-violet-900/40 text-violet-200' : 'bg-blue-50 text-blue-700'
                            }`}>
                            <span className={`h-2 w-2 rounded-full ${darkMode ? 'bg-violet-400' : 'bg-blue-500'
                                }`} /> {location}
                        </span>
                        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition-colors duration-300 ${darkMode ? 'bg-emerald-900/40 text-emerald-200' : 'bg-emerald-50 text-emerald-700'
                            }`}>
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
                                className={`rounded-full border px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur transition-colors duration-300 ${darkMode ? 'border-gray-800 bg-gray-900/60 text-gray-200' : 'border-gray-200 bg-white/80 text-gray-700'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right side Content */}
                <div className="flex relative">

                    <div className={`relative mx-auto max-w-md rounded-3xl pt-3 sm:pt-0 sm:p-6 shadow-xl backdrop-blur transition-colors duration-300 ${darkMode ? 'border-gray-800 bg-gray-900/70' : 'border-gray-200 bg-white/80'
                        }`}>
                        <div className="rounded-3xl pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />
                        <ShineBorder
                            borderWidth={2}
                            duration={10}
                            className="absolute inset-0"
                        />
                        {/* Middle Contents */}
                        <PinContainer>
                            <div className={`relative overflow-hidden rounded-2xl  sm:p-[3px] min-w-[350px] `}>
                                <ShineBorder
                                    borderWidth={2}
                                    duration={10}
                                    className="absolute inset-0"
                                />
                                <div className={`rounded-[14px] px-8 py-10 text-center  transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-white'
                                    }`}>
                                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

                                    <div className="relative mx-auto mb-6 w-fit group">
                                        {/* Outer rotating gradient glow */}
                                        <div className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 animate-spin ${darkMode ? 'bg-linear-to-r from-violet-600 via-indigo-600 to-violet-600' : 'bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500'}`} style={{ animationDuration: '4s' }} />

                                        {/* Double gradient ring with shimmer effect */}
                                        <div className={`absolute -inset-1.5 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-all duration-500 ${darkMode ? 'bg-linear-to-b from-violet-500/60 via-purple-500/40 to-transparent' : 'bg-linear-to-b from-blue-400/60 via-purple-400/40 to-transparent'}`} />

                                        {/* Primary gradient border with depth */}
                                        <div className={`relative h-24 w-24 rounded-full p-1 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-violet-500/50 shadow-xl ${darkMode ? 'bg-linear-to-br from-violet-500 via-purple-600 to-indigo-500' : 'bg-linear-to-br from-blue-500 via-purple-500 to-cyan-500'}`}>
                                            {/* Inner ring accent */}
                                            <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-linear-to-tr from-violet-400/20 to-transparent' : 'bg-linear-to-tr from-white/30 to-transparent'}`} />

                                            <img
                                                className='relative h-full w-full rounded-full object-cover shadow-inner'
                                                src={profile_img}
                                                alt="Profile" />
                                        </div>

                                        {/* Inner subtle accent circle */}
                                        <div className={`absolute -inset-0.5 rounded-full ${darkMode ? 'border border-violet-400/30' : 'border border-blue-300/40'}`} />
                                    </div>

                                    <div className='scale-80 w-fit -my-5'>
                                        <TextHoverEffect text={name} />
                                    </div>
                                    <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>{role}</p>
                                    <p className={`mt-3 text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>{subheadline}</p>
                                </div>
                                <Meteors number={9} className={""} />
                            </div>
                        </PinContainer>
                        <div className={`mt-10 grid grid-cols-1 gap-3 rounded-2xl p-4 sm:grid-cols-3 transition-colors duration-300 ${darkMode ? 'bg-gray-800/60' : 'bg-gray-50'
                            }`}>

                            {stats?.map((stat) => (
                                <div key={stat.label} className={`hover:scale-105 transform transition-all duration-700 rounded-3xl p-3 relative text-center shadow-xl  ${darkMode ? 'bg-gray-900' : 'bg-white'
                                    }`}>
                                    <div className="rounded-3xl pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />
                                    <ShineBorder
                                        borderWidth={2}
                                        duration={10}
                                        className="absolute inset-0"
                                    />
                                    <p className={`text-lg font-bold transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                                        }`}>{stat.value}</p>
                                    <p className={`text-xs uppercase tracking-wide transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}>{stat.label}</p>
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