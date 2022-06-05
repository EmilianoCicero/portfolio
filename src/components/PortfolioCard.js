import './PortfolioCard.css';

function PortfolioCard(props) {
    return (
        <div class="PortfolioCard">
            <img src={props.image} class="CardImage" />
            <h3>{props.projectName}</h3>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default PortfolioCard;