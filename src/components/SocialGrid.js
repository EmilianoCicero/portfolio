import './SocialGrid.css';
import Social from './Social';
import Dribbble from '../images/cicero-emiliano.jpeg';

function SocialGrid () {
    return (
        <div class="SocialGrid">
        <Social image={Dribbble} />
        <Social image={Dribbble} />
        <Social image={Dribbble} />
        <Social image={Dribbble} />
        </div>
    )
}

export default SocialGrid