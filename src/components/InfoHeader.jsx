import '../styles/InfoHeader.css'

function InfoHeader(props) {
    return (
        <div id="appHeader">
            <div id="title">Pokémon Memory Game</div>
            <div id="gameInfo">
                <div id="streak">Streak: {props.streak}</div>
                <div id="highScore">High Score: {props.highScore}</div>
            </div>
        </div>
    );
}

export default InfoHeader;