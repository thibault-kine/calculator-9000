import '../styles/AmazingNumberButton.css';

function AmazingNumberButton(props) {

    const specialStyle = {
        backgroundColor: 'rgb(200, 200, 200)'
    }

    const hiddenStyle = {
        visibility: 'hidden'
    }

    function choseStyle() {
        if (props.value === '%') {
            return hiddenStyle;
        } else if (props.value === '.') {
            return specialStyle;
        }
    }

    return (
        <button 
            className={props.value == '0' ? "c9k-zero-btn" : "c9k-button"}
            style={choseStyle()}
            onClick={(e) => props.onClick(e)}
        >
            {props.value}
        </button>
    )
}

export default AmazingNumberButton;