import './App.css'
import InfoHeader from './components/InfoHeader';
import CardHolder from './components/CardHolder';
import { useEffect, useState } from 'react';

function App() {
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokeNames, setPokeNames] = useState(['growlithe', 'pikachu', 'bulbasaur', 'squirtle', 'wurmple', 'snorlax', 'treecko', 'meowth', 'onix', 'abra', 'arceus', 'pidgey', 'charmander', 'cyndaquil', 'torchic', 'mudkip', 'piplup', 'totodile']);
  return (
    <div id='appArea'>
      <InfoHeader streak={streak} highScore={highScore} />
      <CardHolder pokeNames={pokeNames} setPokeNames={setPokeNames} setStreak={setStreak} setHighScore={setHighScore} streak={streak} highScore={highScore}/>
    </div>
  );
}

export default App
