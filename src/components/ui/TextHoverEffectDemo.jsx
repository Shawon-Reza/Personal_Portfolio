"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration
}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const isInView = useInView(svgRef, { 
    once: false,
    amount: 0.5
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    } else {
      // Reset animation when out of view
      setHasAnimated(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none">
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="30%"
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}>
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      
      {/* Background base text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-gray-800 stroke-gray-400 font-[helvetica] text-5xl font-bold dark:fill-gray-200 dark:stroke-gray-600 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasAnimated ? (hovered ? 0.3 : 1) : 0 }}
        transition={{ duration: 0.5, delay: hasAnimated ? 3 : 0 }}
        style={{ 
          filter: hovered ? 'blur(2px)' : 'blur(0px)'
        }}>
        {text}
      </motion.text>
      
      {/* Animated stroke text */}
      <motion.text
        key={hasAnimated ? 'animated' : 'reset'}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.8"
        className="fill-transparent stroke-blue-500 font-[helvetica] text-5xl font-bold dark:stroke-violet-500"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: hasAnimated ? 0 : 1000,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}>
        {text}
      </motion.text>
      
      {/* Gradient hover effect text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-5xl font-bold transition-all duration-300"
        style={{ 
          opacity: hovered ? 1 : 0,
          filter: hovered ? 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' : 'none'
        }}>
        {text}
      </text>
    </svg>
  );
};
