import React from 'react'
import NavSection from './NavSection'
import GameCard from './GameCard'
import Footer from './Footer'

const Game = ({ pokemon, score, hiScore, clickCard }) => {
    return (
        <div className='container mx-auto mt-3 flex flex-col gap-10  items-center font-mono'>
            <NavSection score={score} hiScore={hiScore} />
            {pokemon.length > 0 ? (
                <div className="flex flex-wrap gap-10 pl-10">
                    {pokemon.slice(0, 8).map((pokeData, index) => (
                        <GameCard key={index} pokeData={pokeData} clickCard={clickCard} />
                    ))}
                </div>
            ) : (
                <p>No Pokemon data available</p>
            )}
            <Footer />
        </div>
    )
}

export default Game