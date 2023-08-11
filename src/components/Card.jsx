import '../styles/Card.css'

function Card(props) {
    return (
        <div id="card" onClick={() => {props.setClickInfo({id: props.id, count: props.clickInfo.count+1})}}>
            <img src={props.url} alt="" id="sprite" />
            <div id="name">{props.name}</div>
        </div>
    );
}

export default Card;