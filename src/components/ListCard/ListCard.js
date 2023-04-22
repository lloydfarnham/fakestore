import './ListCard.css';

function ListCard (props) {
    const capitalize = (string) => {return string.charAt(0).toUpperCase() + string.slice(1)}
    
    return (
        <div className="ListCard">
            <div className="listcard-image-container">
                <img className="listcard-image" src={props.image}></img>
            </div>
            <h1 className="listcard-title">{props.title}</h1>
            <h2 className="listcard-category">{capitalize(props.category)}</h2>
            <h1 className="listcard-price">€{props.price}</h1>
        </div>
    );
}

export default ListCard;