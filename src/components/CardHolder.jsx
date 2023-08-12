import Card from './Card';
import '../styles/CardHolder.css'
import { useEffect, useState } from 'react';
import getPokeData from '../scripts/getPokeData';
import randomPokeArray from '../scripts/randomPokeArray'

function CardHolder(props) {
    const [pokeData, setPokeData] = useState([]);
    const [clickInfo, setClickInfo] = useState({id: 0, count: 0});
    const [prevClicked, setPrevClicked] = useState([]);
    useEffect(() => {
        getPokeData(props.pokeNames).then(data => {
            setPokeData(data.map(item => { return {name: item['name'], id: item['id'], url: item['sprites']['front_default']}}
            ));
        });
    }, [props.pokeNames]);
    useEffect(() => {
        if(clickInfo.id == 0) {
            return;
        }
        else if(prevClicked.includes(clickInfo.id)){
            props.setStreak(0);
            setPrevClicked([]);
            props.setPokeNames(randomPokeArray(props.pokeNames).newPokeArray);
        }
        else {
            console.log(prevClicked + " " + clickInfo.id);
            props.setStreak(props.streak + 1);
            props.setPokeNames(randomPokeArray(props.pokeNames).newPokeArray);
            prevClicked.push(clickInfo.id);
        }
    }, [clickInfo]);
    useEffect(() => {
        if(props.streak >= props.highScore) {
            props.setHighScore(props.streak);
        }
        if(props.streak >= props.pokeNames.length) {
            alert("Congrats! You clicked 'em all!");
            props.setStreak(0);
        }
    }, [props.streak]);
    return (
        <div id='cardArea'>
            {pokeData.map(item => <Card key={item.id} id={item.id} name={item.name} url={item.url} clickInfo={clickInfo} setClickInfo={setClickInfo} />)}
        </div>
    );
}

export default CardHolder;