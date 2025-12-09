import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../features/HeroSection'
import ClickSpark from '../components/ui/ClickSpark'
import AboutSection from '../features/AboutSection'
import { div } from 'motion/react-client'


const LandingPage = () => {
    return (
        <div className=''>
            <ClickSpark
                sparkColor='#B19EEF'
                sparkSize={8}
                sparkRadius={25}
                sparkCount={12}
                duration={600}
            >
                <section>
                    <Navbar />
                </section>
                <section>
                    <HeroSection />
                </section>
                <section>
                    <AboutSection />
                </section>
            </ClickSpark>
        </div>
    )
}

export default LandingPage