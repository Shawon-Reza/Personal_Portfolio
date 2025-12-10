import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../features/HeroSection'
import ClickSpark from '../components/ui/ClickSpark'
import AboutSection from '../features/AboutSection'
import Footer from '../components/layout/Footer'


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
                <section className='mt-18'>
                    <HeroSection />
                </section>
                <section>
                    <AboutSection />
                </section>
                <section className=''>
                    <Footer></Footer>
                </section>
            </ClickSpark>
        </div>
    )
}

export default LandingPage