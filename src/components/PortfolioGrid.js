import './PortfolioGrid.css';
import PortfolioCard from './PortfolioCard';
import PortfolioImage from '../images/cicero-emiliano.jpeg';

function PortfolioGrid () {
    return (
        <div class="PortfolioContainer">
        <div class="ViewMore">
            <h2>My work</h2>
            <div>View More</div>
        </div>
        <div class="PortfolioGrid">
            <PortfolioCard image={PortfolioImage} projectName="Lexicon DS" />
            <PortfolioCard image={PortfolioImage} projectName="Error Pages" />
            <PortfolioCard image={PortfolioImage} projectName="Lima Team" />
            <PortfolioCard image={PortfolioImage} projectName="Empty States" />
        </div>
        </div>
    )
}

export default PortfolioGrid;