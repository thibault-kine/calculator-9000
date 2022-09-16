import '../styles/MagnificientEqualButton.css';

function MagnificientEqualButton(props) {

    return (
        <button 
            className="c9k-eq-btn"
            onClick={() => props.onClick()}
        >
            =
        </button>
    )   
}

export default MagnificientEqualButton;