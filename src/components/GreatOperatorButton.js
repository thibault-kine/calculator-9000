import '../styles/GreatOperatorButton.css';

function GreatOperatorButton(props) {

    return (
        <button
            className="c9k-op-btn"
            onClick={props.click}
        >
            {props.value}
        </button>
    )
}

export default GreatOperatorButton;