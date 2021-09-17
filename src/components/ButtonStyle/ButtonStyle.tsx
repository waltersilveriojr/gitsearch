import './styles.css';

type Props ={
    text: string;
}

const ButtonStyle = ( {text} : Props) => {
    return (
        <div className="button-style">
           <button className="btn btn-primary">{text}</button>
        </div>
    )
}

export default ButtonStyle;