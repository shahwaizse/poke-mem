import './App.css'
import InfoHeader from './components/InfoHeader';
import CardHolder from './components/CardHolder';
import { useEffect, useState } from 'react';

function App() {
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokeNames, setPokeNames] = useState(['growlithe', 'pikachu', 'bulbasaur', 'squirtle', 'wurmple', 'snorlax', 'treecko', 'meowth', 'onix', 'abra', 'arceus', 'pidgey', 'charmander', 'cyndaquil', 'torchic', 'mudkip', 'piplup', 'totodile']);
  useEffect(() => {
    if(level == 1) {
      setPokeNames(['growlithe', 'pikachu', 'bulbasaur', 'squirtle', 'wurmple', 'snorlax']);
    }
    if(level == 2) {
      setPokeNames(['growlithe', 'pikachu', 'bulbasaur', 'squirtle', 'wurmple', 'snorlax', 'treecko', 'meowth', 'onix', 'abra', 'arceus', 'pidgey']);
    }
    if(level == 3) {
      setPokeNames(['growlithe', 'pikachu', 'bulbasaur', 'squirtle', 'wurmple', 'snorlax', 'treecko', 'meowth', 'onix', 'abra', 'arceus', 'pidgey', 'charmander', 'cyndaquil', 'torchic', 'mudkip', 'piplup', 'totodile']);
    }
    if(level == 4) {
      setLevel(1);
    }
  }, [level])
  return (
    <div id='appArea'>
      <InfoHeader level={level} streak={streak} highScore={highScore} />
      <CardHolder level={level} setLevel={setLevel} pokeNames={pokeNames} setPokeNames={setPokeNames} setStreak={setStreak} setHighScore={setHighScore} streak={streak} highScore={highScore}/>
    </div>
  );
}

export default App
