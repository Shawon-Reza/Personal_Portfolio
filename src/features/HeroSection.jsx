
import Orb from '../components/ui/Orb'
import { useState, useEffect, useRef } from 'react'
import { useDarkMode } from '../Contexts/ThemeContext'
import PixelBlast from '../components/ui/PixelBlast'
import FloatingLines from '../components/ui/FloatingLines'
import { Highlighter } from '../components/ui/Highlighter'
import { TypingAnimation } from '../components/ui/TypingAnimation'
import { TextHoverEffect } from '../components/ui/TextHoverEffectDemo'
import { Vortex } from '../components/ui/Vortex'

const HeroSection = () => {
    const { darkMode } = useDarkMode()
    const [copied, setCopied] = useState(false)
    const [hue, setHue] = useState(0)
    const [bgVariant, setBgVariant] = useState(() => {
        const variants = ['pixel', 'floatingLines', 'vortex']
        return variants[Math.floor(Math.random() * variants.length)]
    })
    const sectionRef = useRef(null)
    const hasAnimatedRef = useRef(false)
    const email = 'shawon.reza.dev@gmail.com'

    useEffect(() => {
        const interval = setInterval(() => {
            setHue(Math.random() * 360)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && hasAnimatedRef.current) {
                        // Change background when returning to view after leaving
                        const variants = ['pixel', 'floatingLines', 'vortex']
                        const newVariant = variants[Math.floor(Math.random() * variants.length)]
                        setBgVariant(newVariant)
                    } else if (!entry.isIntersecting) {
                        // Mark that we've left the section
                        hasAnimatedRef.current = true
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }

    return (
        <div ref={sectionRef} className={`relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden text-center px-6 transition-colors duration-300 ${darkMode ? 'bg-linear-to-br from-slate-950 via-purple-950 to-slate-950' : 'bg-linear-to-br from-white via-blue-50 to-purple-50'
            }`}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.14),transparent_30%),linear-gradient(120deg,rgba(124,58,237,0.08),rgba(37,99,235,0.06))]" />

            {/* Random background: only one will be displayed */}
            {bgVariant === 'vortex' && (
                <div
                    className='min-h-[calc(100vh-80px)]'
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}>
                    <Vortex
                        backgroundColor={darkMode ? '#transparent' : 'transparent'}
                        rangeY={800}
                        particleCount={500}
                        baseHue={darkMode ? 220 : 210}
                        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                    />
                </div>
            )}

            {bgVariant === 'pixel' && (
                <div
                    className='min-h-[calc(100vh-80px)]'
                    style={{ width: '200%', height: '100%', position: 'absolute', zIndex: 10 }}>
                    <PixelBlast
                        variant="circle"
                        pixelSize={6}
                        color={darkMode ? '#8B5CF6' : '#B19EEF'}
                        patternScale={3}
                        patternDensity={1}
                        pixelSizeJitter={0.5}
                        enableRipples
                        rippleSpeed={0.4}
                        rippleThickness={0.12}
                        rippleIntensityScale={1.5}
                        liquid
                        liquidStrength={0.12}
                        liquidRadius={1.2}
                        liquidWobbleSpeed={5}
                        speed={0.6}
                        edgeFade={0.23}
                        transparent
                    />
                </div>
            )}

            {bgVariant === 'floatingLines' && (
                <div
                    className='min-h-[calc(100vh-80px)] bg-white/80 dark:bg-black/0'
                    style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}>
                    <FloatingLines
                        linesGradient={darkMode ? ['#7c3aed', '#6366f1', '#a855f7', '#9333ea', '#6d28d9'] : ['#B19EEF', '#7B68EE', '#9370DB', '#8A2BE2', '#6A0DAD']}
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={[5]}
                        lineDistance={[8, 6, 4]}
                        bendRadius={5.0}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                    />
                </div>
            )}

            {/* Orb is always visible */}
            <div
                className='sm:scale-110 md:scale-120 lg:scale-125 xl:scale-130 overflow-hidden'
                style={{ width: '100%', height: '600px', position: 'absolute', zIndex: 20 }}>
                <Orb
                    hoverIntensity={.7}
                    rotateOnHover={true}
                    hue={hue}
                    forceHoverState={false}
                />
            </div>


            <div className="relative z-30 max-w-4xl mx-auto space-y-2">
                <div className="space-y-1">


                    <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300  ${darkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>

                        <div className='-mb-12'>
                            <TypingAnimation>
                                HI, I'M
                            </TypingAnimation>
                        </div>

                        <span className={`block text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 -my-6 ${darkMode ? 'text-violet-400' : 'text-blue-600'
                            }`}>
                            {/* <TypingAnimation>
                                Shawon Reza
                            </TypingAnimation> */}
                            <div className='scale-70 sm:scale-100'>
                                <TextHoverEffect text="Shawon Reza" />
                            </div>
                        </span>
                    </h1>

                    <h2 className={`md:my-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-700'
                        }`}>

                        {/* action	"highlight" | "circle" | "box" | "bracket" | "crossed-off" | "strike-through" | "underline" */}

                        <Highlighter action="highlight" color="#FF9800">
                            FUll-Stack DEVELOPER
                        </Highlighter>

                        <br /> BUILDING COMPLETE WEB APPLICATIONS <br />FROM {" "}
                        <Highlighter action="underline" color="#FF9800">
                            FRONTEND
                        </Highlighter>  TO

                        {" "} <Highlighter action="underline" color="#FF9800">
                            BACKEND
                        </Highlighter> <br />
                        MADE TO BE FAST, CLEAN, AND USER-FRIENDLY
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-4 md:pt-2">
                    <a
                        href="mailto:shawon.reza.dev@gmail.com"
                        className={`sm:px-6 sm:py-3 px-3 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${darkMode ? 'bg-violet-600 text-white hover:bg-violet-700 focus-visible:outline-violet-500' : 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-500'
                            }`}
                    >
                        LET'S CONNECT
                    </a>
                    <a
                        href="#"
                        className={`sm:px-6 sm:py-3 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${darkMode ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 focus-visible:outline-violet-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:outline-blue-500'
                            }`}
                    >
                        VIEW RESUME
                    </a>
                </div>

                <div className="sm:pt-4 hidden sm:block">
                    <button
                        onClick={handleCopyEmail}
                        className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer ${darkMode ? 'text-gray-400 hover:text-violet-400' : 'text-gray-600 hover:text-blue-600'
                            }`}
                    >
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        {email}
                        {copied && <span className={`text-xs font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'
                            }`}>✓ Copied!</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection