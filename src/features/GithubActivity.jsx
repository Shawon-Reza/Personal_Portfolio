import React from 'react'
import { useDarkMode } from '../Contexts/ThemeContext'
import { motion } from 'motion/react'
import { useQuery } from '@tanstack/react-query'
import GithubHeatChart from '../components/ui/GithubHeatChart'

const GithubActivity = () => {
    const { darkMode } = useDarkMode()

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const { data: stats, isLoading: loading } = useQuery({
        queryKey: ['githubStats'],
        queryFn: async () => {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://streak-stats.demolab.com/?user=shawon-reza&type=json')
            if (!response.ok) throw new Error('Failed to fetch GitHub stats')
            const data = await response.json()

            return {
                totalContributions: data.totalContributions?.toString() || '0',
                currentStreak: {
                    value: data.currentStreak?.length?.toString() || '0',
                    start: formatDate(data.currentStreak?.start || ''),
                    end: formatDate(data.currentStreak?.end || '')
                },
                longestStreak: {
                    value: data.longestStreak?.length?.toString() || '0',
                    start: formatDate(data.longestStreak?.start || ''),
                    end: formatDate(data.longestStreak?.end || '')
                }
            }
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false
    })

    const { data: heatData, isLoading: loadingHeat } = useQuery({
        queryKey: ['githubHeat'],
        queryFn: async () => {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://gh-heat.anishroy.com/api/shawon-reza')
            if (!response.ok) throw new Error('Failed to fetch GitHub heat data')
            const payload = await response.json()

            const contributionsRaw = payload?.contributions || payload?.data || []
            const contributions = contributionsRaw
                .map((entry, index) => {
                    const dateValue = entry?.date ? new Date(entry.date) : null
                    const label = dateValue
                        ? dateValue.toLocaleDateString('en-US', { month: 'short' })
                        : `Day ${index + 1}`

                    return {
                        date: dateValue
                            ? dateValue.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                            : label,
                        label,
                        count: entry?.count ?? entry?.contributionCount ?? 0,
                    }
                })
                .sort((a, b) => {
                    const dateA = a.date ? new Date(a.date) : null
                    const dateB = b.date ? new Date(b.date) : null
                    if (!dateA || !dateB) return 0
                    return dateA - dateB
                })

            return { contributions }
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false
    })

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className={`relative py-16 sm:py-20 transition-colors duration-500 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.14),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.12),transparent_30%)]" />

            <div className="relative mx-auto  px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-600 to-violet-500 dark:from-violet-300 dark:to-blue-300 bg-clip-text text-transparent">
                            GitHub Activity
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Track my contributions and development journey.
                        </p>
                    </div>

                    {/* Contribution Chart */}
                    <motion.div
                        variants={itemVariants}
                        className={`relative overflow-hidden rounded-2xl border px-4 sm:px-6 py-6 sm:py-8 shadow-lg transition-colors duration-300 ${darkMode ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-200/80 bg-white/80'
                            } backdrop-blur`}
                    >
                        <div className={`pointer-events-none absolute inset-0 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'}`} />
                        <div className="relative space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Contribution Graph
                            </h3>
                            <div className="flex justify-center">
                                <img
                                    src="https://ghchart.rshah.org/7c3aed/shawon-reza"
                                    alt="GitHub Contribution Graph"
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                                Your GitHub contributions over the last year
                            </p>
                        </div>
                    </motion.div>


                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Total Contributions */}
                        <motion.div
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-2xl border px-6 py-8 shadow-lg transition-all duration-300 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 border-gray-500' : 'bg-linear-to-br from-white via-blue-50 to-purple-50 border-gray-200'} backdrop-blur hover:shadow-xl hover:-translate-y-1`}
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_35%)]" />

                            <div className="relative space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                        Total Contributions
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-2">
                                    {loading ? (
                                        <div className="h-12 w-24 bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
                                    ) : (
                                        <span className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-violet-300">
                                            {stats?.totalContributions || '0'}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    All time contributions
                                </p>
                            </div>
                        </motion.div>

                        {/* Current Streak */}
                        <motion.div
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-2xl border px-6 py-8 shadow-lg transition-all duration-300 ${darkMode ? 'bg-linear-to-bl from-slate-950 via-purple-950 to-slate-950 border-gray-500' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'} backdrop-blur hover:shadow-xl hover:-translate-y-1 border-gray-200`}
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,119,6,0.12),transparent_35%)]" />

                            <div className="relative space-y-4">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-amber-200/70 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200">
                                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                        Active
                                    </div>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                        Current Streak
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-2">
                                    {loading ? (
                                        <div className="h-12 w-16 bg-amber-200 dark:bg-amber-800 animate-pulse rounded"></div>
                                    ) : (
                                        <>
                                            <span className="text-4xl sm:text-5xl font-bold text-amber-600 dark:text-amber-300">
                                                {stats?.currentStreak.value || '0'}
                                            </span>
                                            <span className="text-lg text-amber-500 dark:text-amber-400">🔥</span>
                                        </>
                                    )}
                                </div>

                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    {loading ? 'Loading...' : `${stats?.currentStreak.start || ''} - ${stats?.currentStreak.end || ''}`}
                                </p>
                            </div>
                        </motion.div>

                        {/* Longest Streak */}
                        <motion.div
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-2xl border  px-6 py-8 shadow-lg transition-all duration-300 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 border-gray-500' : 'bg-linear-to-br from-white via-blue-50 to-purple-50 border-gray-200'} backdrop-blur hover:shadow-xl hover:-translate-y-1`}
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_35%)]" />

                            <div className="relative space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                        Longest Streak
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-2">
                                    {loading ? (
                                        <div className="h-12 w-16 bg-slate-200 dark:bg-slate-700 animate-pulse rounded"></div>
                                    ) : (
                                        <span className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-violet-300">
                                            {stats?.longestStreak.value || '0'}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    {loading ? 'Loading...' : `${stats?.longestStreak.start || ''} - ${stats?.longestStreak.end || ''}`}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interactive Contributions */}
                    <motion.div variants={itemVariants}>
                        <GithubHeatChart
                            data={heatData?.contributions || []}
                            loading={loadingHeat}
                            darkMode={darkMode}
                        />
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <a
                            href="https://github.com/shawon-reza"
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${darkMode
                                ? 'bg-violet-600 text-white hover:bg-violet-700'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            View Profile
                            <span aria-hidden>→</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default GithubActivity
