"use client"

import React from "react"
import { useDarkMode } from "../../Contexts/ThemeContext"

export function ShineBorder({
  borderWidth = 2,
  duration = 10,
  shineColor,
  className = "",
  ...props
}) {
  const { darkMode } = useDarkMode()
  const id = React.useId()
  const finalShineColor = shineColor || (darkMode ? "#7c3aed" : "#3b82f6")

  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        [data-shine-border="${id}"] {
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: ${borderWidth}px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${finalShineColor} 20%,
            ${finalShineColor} 80%,
            transparent 100%
          );
          background-size: 1000px 100%;
          background-position: -1000px 0;
          animation: shine ${duration}s linear infinite;
          pointer-events: none;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
      `}</style>
      <div
        data-shine-border={id}
        className={className}
        {...props}
      />
    </>
  )
}
