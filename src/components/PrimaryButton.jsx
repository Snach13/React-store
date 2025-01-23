import '../styles/PrimaryButton.scss';

function PrimaryButton(props){
    return (
        <button className="primary-button" type="button"> {props.text} </button>
    );
}

export {PrimaryButton};