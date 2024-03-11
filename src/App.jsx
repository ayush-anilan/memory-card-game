import { useState, useEffect } from 'react';
import './App.css'
import Game from './components/Game';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0)
  const [hiScore, setHiScore] = useState(0)
  const [usedCards, setUsedCards] = useState([])
  const [allPokemon, setAllPokemon] = useState([])


  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setAllPokemon(data.results);
        setPokemon(shuffleArray(data.results.slice(0, 8)));// Update with all pokemon data
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetch
      }
    };
    fetchPokemon();
  }, []);


  console.log(pokemon);

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle (modern, efficient)
    let currentIndex = array.length,
      randomValue;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomValue = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [array[currentIndex], array[randomValue]] = [
        array[randomValue],
        array[currentIndex],
      ];
    }

    return array;
  };



  const reset = () => {
    setScore(0)
    setUsedCards([])
    setPokemon(shuffleArray(allPokemon.slice(0, 8)));
  }


  const clickCard = (pokemonImg) => {
    if (usedCards.indexOf(pokemonImg) === -1) {
      setUsedCards((prevUsedCards) => [...prevUsedCards, pokemonImg]);
      setScore((prevScore) => prevScore + 1);
      setPokemon(shuffleArray(pokemon)); // Shuffle current cards
    } else {
      if (hiScore < score) {
        setHiScore(score);
      }
      reset();
    }
  };

  return (
    <div className='App font-Caveat'>
      {isLoading ? (
        <p>Loading Pokemon...</p>
      ) : (
        <>
          <Game pokemon={pokemon} score={score} hiScore={hiScore} clickCard={clickCard} />
        </>
      )}
    </div>
  )
}

export default App
