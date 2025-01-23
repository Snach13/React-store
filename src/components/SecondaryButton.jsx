import '../styles/SecondaryButton.scss'
function SecondaryButton(props){
    return (
        <button type="button" className="secondary-button"> {props.text} </button>
    );
}

export {SecondaryButton};