"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { useDarkMode } from "../../Contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const scrollbarStyles = `
  /* Webkit browsers (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-light::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-light::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 10px;
  }
  .scrollbar-light::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
  .scrollbar-dark::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-dark::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 10px;
  }
  .scrollbar-dark::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
`;

export const StickyScroll = ({
    content = [],
    contentClassName,
}) => {
    const containerRef = useRef(null);
    const safeContent = Array.isArray(content) ? content : [];
    const cardLength = safeContent.length;
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    if (!cardLength) {
        return (
            <div className="relative flex h-80 items-center justify-center rounded-md bg-slate-900 text-slate-100">
                <p className="text-sm text-slate-300">No content provided for StickyScroll.</p>
            </div>
        );
    }

    return (
        <>
            <style>{scrollbarStyles}</style>
            <div
                ref={containerRef}
                className={`relative h-[calc(100vh-300px)] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth ${
                    darkMode ? "scrollbar-dark" : "scrollbar-light"
                }`}>
            {safeContent.map((item, index) => (
                <motion.section
                    key={item.title + index}
                    className="relative h-[calc(100vh-300px)] w-full snap-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}>
                        {item?.content ?? null}
                    </motion.div>
                    <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:px-12 lg:px-20">
                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}>
                            {item.title}
                        </motion.h2>
                        {item.description ? (
                            <motion.p
                                className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-100/90 max-w-3xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                {item.description}
                            </motion.p>
                        ) : null}
                        {item?.stack?.length ? (
                            <motion.div
                                className="mt-8 flex flex-wrap gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                {item.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-block rounded-full bg-slate-900/70 backdrop-blur-sm px-4 py-2 text-sm md:text-base font-medium text-white/90 shadow">
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        ) : null}
                        {(item.role || item.timeline) && (
                            <motion.p
                                className="mt-4 text-base sm:text-lg text-slate-100/90"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                {[item.role, item.timeline].filter(Boolean).join(" · ")}
                            </motion.p>
                        )}
                        {item?.highlights?.length ? (
                            <motion.ul
                                className="mt-4 space-y-2 text-base sm:text-lg text-slate-100/95 list-disc list-inside"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                                viewport={{ once: false, amount: 0.3 }}>
                                {item.highlights.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </motion.ul>
                        ) : null}
                        <motion.button
                            onClick={() => navigate(`/project/${item.title.toLowerCase().replace(/\s+/g, "-")}`)}
                            className="mt-8 px-6 py-2 rounded-full font-semibold text-white bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-fit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}>
                            View Details
                        </motion.button>
                    </div>
                </motion.section>
            ))}
            </div>
        </>
    );
};
export default StickyScroll;