import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from 'recharts'

const GithubHeatChart = ({ data = [], loading = false, darkMode = false, title = 'Daily Contributions (last 12 months)' }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border px-4 sm:px-6 py-6 sm:py-8 shadow-lg transition-colors duration-300 ${darkMode ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-200/80 bg-white/80'
                } backdrop-blur`}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_35%)]" />
            <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Hover to see counts</p>
                </div>

                {loading ? (
                    <div className="h-64 w-full rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
                ) : (
                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={darkMode ? '#a855f7' : '#6366f1'} stopOpacity={0.7} />
                                    <stop offset="95%" stopColor={darkMode ? '#a855f7' : '#6366f1'} stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid stroke={darkMode ? '#1f2937' : '#e5e7eb'} strokeDasharray="3 3" vertical={false} />
                            <XAxis
                                dataKey="label"
                                tick={{ fontSize: 10, fill: darkMode ? '#cbd5f5' : '#475569' }}
                                tickLine={false}
                                axisLine={false}
                                minTickGap={20}
                            />
                            <Tooltip
                                contentStyle={{ background: darkMode ? '#0f172a' : '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px' }}
                                labelStyle={{ color: darkMode ? '#e2e8f0' : '#0f172a' }}
                                formatter={(value) => [value, 'Contributions']}
                                labelFormatter={(label, payload) => {
                                    const item = payload && payload[0]?.payload
                                    return item?.date || label
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke={darkMode ? '#a855f7' : '#6366f1'}
                                strokeWidth={2}
                                fill="url(#colorContrib)"
                                activeDot={{ r: 5 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    )
}

export default GithubHeatChart
