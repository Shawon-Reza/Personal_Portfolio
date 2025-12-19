import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../features/HeroSection'
import ClickSpark from '../components/ui/ClickSpark'
import AboutSection from '../features/AboutSection'
import GithubActivity from '../features/GithubActivity'
import Footer from '../components/layout/Footer'
import ContactSection from '../features/ContactSection'
import SkillMarquee from '../features/SkillMarquee'
import { StickyScrollRevealDemo } from '../features/ProjectsSection'


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
                <section className=''>
                    <HeroSection />
                </section>
                <section>
                    <AboutSection />
                </section>
                {/* Project section.......... */}
                <section>
                    <StickyScrollRevealDemo />
                </section>
                <section>
                    <GithubActivity />
                </section>
                <section>
                    <SkillMarquee />
                </section>
                <section className=''>
                    <ContactSection></ContactSection>
                </section>
                <section className=''>
                    <Footer></Footer>
                </section>
            </ClickSpark>
        </div>
    )
}

export default LandingPage