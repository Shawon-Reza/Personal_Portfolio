import React from 'react'
import { useDarkMode } from '../../Contexts/ThemeContext'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const { darkMode } = useDarkMode()
  const year = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', badge: <FaLinkedin /> },
    { label: 'GitHub', href: 'https://github.com', badge: <FaGithub /> },
    { label: 'Email', href: 'mailto:shawon.reza.dev@gmail.com', badge: <MdOutlineMail /> },
  ]

  return (
    <footer
      className={`relative  transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
        }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

      <div className="relative mx-auto px-6  md:px-10 lg:px-16 py-16 sm:py-20 flex flex-col gap-8">
        <div className={`relative overflow-hidden rounded-3xl border px-6 py-8 sm:px-10 sm:py-10 shadow-lg ${darkMode ? 'border-slate-800/80 bg-slate-900/60 backdrop-blur' : 'border-slate-200/80 bg-white/80 backdrop-blur'
          }`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_30%)]" />
          {/* Top card */}
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-slate-200/70 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for new work
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-violet-500 dark:text-violet-300">Portfolio</p>
                <h3 className="text-3xl sm:text-4xl font-semibold bg-linear-to-r from-blue-600 to-violet-500 dark:from-violet-300 dark:to-blue-300 bg-clip-text text-transparent">
                  Shawon Reza
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                Building fast, clean, and user-friendly experiences—front to back.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">Full-stack</span>
                <span className="rounded-full bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">React • Node</span>
                <span className="rounded-full bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">Express</span>
                <span className="rounded-full bg-slate-200/70 dark:bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">PostgreSQL</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 ${darkMode
                      ? 'bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Stay in touch</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">shawon.reza.dev@gmail.com</p>
            <a
              href="mailto:shawon.reza.dev@gmail.com"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-violet-300 dark:hover:text-violet-200"
            >
              Email me
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Social</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:-translate-y-0.5 ${darkMode
                      ? 'bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-semibold transition-colors duration-200 ${darkMode ? 'bg-slate-800 group-hover:bg-slate-700' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>{item.badge}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Availability</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Open for freelance projects and full-time opportunities.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:-translate-y-0.5 ${darkMode
                  ? 'bg-violet-600 text-white hover:bg-violet-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              Back to top
              <span aria-hidden>↑</span>
            </button>
          </div>
        </div>

        <div className={`flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}>
          <p>© {year} Shawon Reza. All rights reserved.</p>
          <p className="text-xs">Crafted with React, Tailwind, and motion.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer