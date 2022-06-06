import './AboutCard.css';

function AboutCard(props) {
    return (
        <div class="AboutCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default AboutCard;