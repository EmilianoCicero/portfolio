import './About.css';
import AboutCard from './AboutCard.js';

function About() {
    return (
        <div class="About">
            <h2>My name is Emiliano but everyone calls me Emi.</h2>
            <div class="AboutCardGrid">
            <AboutCard title="Smashing Magazine Author" description="testing2" />
            <AboutCard title="Figma Enthusiast" description="testing2" />
            <AboutCard title="Unsplash Contributor" description="testing2" />
            <AboutCard title="Smashing Magazine Author" description="testing2" />
            </div>
        </div>
    )
}

export default About;