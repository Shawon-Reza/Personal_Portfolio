import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../features/HeroSection'
import ClickSpark from '../components/ui/ClickSpark'


const LandingPage = () => {
    return (
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
            <HeroSection />
        </ClickSpark>
    )
}

export default LandingPage