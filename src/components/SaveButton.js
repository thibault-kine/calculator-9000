import '../styles/SaveButton.css';

function SaveButton(props) {
    return (
        <button onClick={props.saveFunction} className='c9k-save-btn'>
            Save
        </button>
    )
}

export default SaveButton;