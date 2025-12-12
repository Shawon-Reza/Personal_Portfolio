import React, { useState, useRef } from 'react'
import { motion, useAnimation } from 'motion/react'
import { FiMail, FiSend, FiGithub, FiLinkedin, FiPhone, FiMapPin } from 'react-icons/fi'
import { useDarkMode } from '../Contexts/ThemeContext'

const ContactSection = () => {
    const { darkMode } = useDarkMode()
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const controls = useAnimation()
    const containerRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = form
        const mailto = `mailto:shawon.reza.dev@gmail.com?subject=${encodeURIComponent(subject || 'New message from portfolio')}&body=${encodeURIComponent(`From: ${name || 'Anonymous'} (${email || 'no email provided'})\n\n${message}`)}`
        window.location.href = mailto
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, duration: 0.6 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const cardBg = darkMode
        ? 'bg-slate-900/70 border border-slate-800/80 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.9)]'
        : 'bg-white/80 border border-slate-200/70 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]'

    return (
        <section className={`relative py-16 sm:py-20 transition-colors duration-500 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.12),transparent_30%)]" />
            {/* Floating ambient orbs */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -left-10 top-24 h-48 w-48 rounded-full blur-3xl"
                style={{ background: darkMode ? 'radial-gradient(circle, rgba(167,139,250,0.35), transparent 60%)' : 'radial-gradient(circle, rgba(96,165,250,0.35), transparent 60%)' }}
                animate={{ x: [0, 18, -12, 0], y: [0, -10, 12, 0] }}
                transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden
                className="pointer-events-none absolute right-0 bottom-16 h-56 w-56 rounded-full blur-3xl"
                style={{ background: darkMode ? 'radial-gradient(circle, rgba(56,189,248,0.28), transparent 60%)' : 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 60%)' }}
                animate={{ x: [0, -14, 10, 0], y: [0, 14, -10, 0] }}
                transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    ref={containerRef}
                    initial="hidden"
                    animate={controls}
                    onViewportEnter={() => controls.start('visible')}
                    onViewportLeave={() => controls.start('hidden')}
                    viewport={{ amount: 0.3 }}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="space-y-3 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500 dark:text-violet-300">Get in touch</p>
                        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white/80 ">Let's build something great</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Drop a line about projects, collaborations, or just say hi. I typically reply within one business day.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
                        {/* Form */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                            className={`relative overflow-hidden rounded-2xl ${cardBg} backdrop-blur-xl p-6 sm:p-8`}>
                                 <div className={`pointer-events-none absolute inset-0 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'}`} />
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_35%)]" />
                            <div className="relative space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/5 text-violet-200' : 'bg-blue-50 text-blue-600'} border border-white/10`}>
                                        <FiMail size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-white/80">Send a message</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">I'll get your note instantly.</p>
                                    </div>
                                </div>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className="space-y-2">
                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Name</span>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Jane Doe"
                                                className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${darkMode ? 'bg-slate-800/60 border border-slate-700/60 text-white focus:ring-violet-500/60' : 'bg-white/50 border border-slate-200/60 text-slate-900 focus:ring-blue-500/40'}`}
                                            />
                                        </label>
                                        <label className="space-y-2">
                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Email</span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                                className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${darkMode ? 'bg-slate-800/60 border border-slate-700/60 text-white focus:ring-violet-500/60' : 'bg-white/50 border border-slate-200/60 text-slate-900 focus:ring-blue-500/40'}`}
                                            />
                                        </label>
                                    </div>

                                    <label className="space-y-2 block">
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Subject</span>
                                        <input
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder="Let's talk about a project"
                                            className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${darkMode ? 'bg-slate-800/60 border border-slate-700/60 text-white focus:ring-violet-500/60' : 'bg-white/50 border border-slate-200/60 text-slate-900 focus:ring-blue-500/40'}`}
                                        />
                                    </label>

                                    <label className="space-y-2 block">
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Message</span>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Share details, timelines, or goals..."
                                            rows={5}
                                            required
                                            className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${darkMode ? 'bg-slate-800/60 border border-slate-700/60 text-white focus:ring-violet-500/60' : 'bg-white/50 border border-slate-200/60 text-slate-900 focus:ring-blue-500/40'}`}
                                        />
                                    </label>

                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="text-sm text-slate-500 dark:text-slate-400">No spam. Your details stay private.</div>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ y: -1, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-offset-2 ${darkMode ? 'bg-violet-600 text-white/80 hover:bg-violet-700 focus-visible:outline-violet-500 shadow-lg shadow-violet-600/25' : 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-500 shadow-lg shadow-blue-600/20'}`}
                                        >
                                            Send message
                                            <FiSend size={16} />
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact cards */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -3, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                                className={`relative overflow-hidden rounded-2xl ${cardBg} backdrop-blur-xl p-6`}>
                                    
                                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

                                <div className="relative space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/5 text-cyan-200' : 'bg-cyan-50 text-cyan-600'} border border-white/10`}>
                                            <FiMapPin size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold dark:text-white/80">Location & Contact</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Dhaka, Bangladesh · Open to remote</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <FiPhone className="text-blue-500 dark:text-violet-300" />
                                            <a href="tel:+8801712345678" className="hover:underline">+880 17XX-XXXXXX</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiMail className="text-blue-500 dark:text-violet-300" />
                                            <a href="mailto:shawon.reza.dev@gmail.com" className="hover:underline">shawon.reza.dev@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href="https://github.com/shawon-reza"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${darkMode ? 'bg-slate-800/60 border border-slate-700 text-white focus:ring-violet-500/60' : 'bg-slate-100 border border-slate-200 hover:bg-white'} `}
                                        >
                                            <FiGithub />
                                            GitHub
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/shawon-reza/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${darkMode ? 'bg-slate-800/60 border border-slate-700 text-white focus:ring-violet-500/60' : 'bg-slate-100 border border-slate-200 hover:bg-white'}`}
                                        >
                                            <FiLinkedin />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -3, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                                className={`relative overflow-hidden rounded-2xl ${cardBg} backdrop-blur-xl p-6`}>
                                    
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

                                <div className="relative space-y-3">
                                    <h3 className="text-lg font-semibold flex items-center gap-2 dark:text-white/80">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse " />
                                        Availability
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        Currently open for remote frontend roles and freelance collaborations. Share timelines and scope to get a fast reply.
                                    </p>
                                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${darkMode ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-800/60' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                        Reply window: ~24h
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
