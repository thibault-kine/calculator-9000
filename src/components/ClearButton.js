import '../styles/ClearButton.css';

function ClearButton(props) {

    return (
        <button 
            className="c9k-clear-btn" 
            onClick={props.clearFunction}
        >
            C
        </button>
    )
    
}

export default ClearButton;