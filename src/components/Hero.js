import './Hero.css';
import imageEmi from '../images/cicero-emiliano.jpeg';
import SocialGrid from './SocialGrid';

function Hero () {
    return (
        <div class="hero">
            <div>
                <h1>Building Design Systems since 2016</h1>
                <p>Sr. Product Designer based in Madrid and Specialized in <b>Visual Design</b>, <b>Design Systems</b>, and <b>Design Libraries</b></p>
                <SocialGrid />
            </div>
            <img src={imageEmi} class="image" />
            
        </div>
    )
}

export default Hero;