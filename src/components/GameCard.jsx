import React, { useState, useEffect } from 'react'
import Img from '../assets/react.svg'

const GameCard = ({ pokeData, clickCard }) => {
    const [pokemonImg, setPokemonImg] = useState(''); // State for Pokemon image URL

    useEffect(() => {
        const fetchPokemonImg = async () => {
            try {
                const pokeUrl = pokeData.url;
                const response = await fetch(pokeUrl);
                const pokeDetails = await response.json();
                setPokemonImg(pokeDetails.sprites.front_default); // Update image URL
            } catch (error) {
                console.error('Error fetching Pokemon image:', error);
            }
        };

        fetchPokemonImg();
    }, [pokeData]); // Dependency on pokeData
    return (
        <div className='card bg-white rounded-lg w-80 p-5 ' onClick={() => clickCard(pokemonImg)}>
            <div className='image bg-blue-300 rounded-md'>
                <img src={pokemonImg} alt={pokeData.name} className='ml-auto mr-auto w-4/5 h-64' />
            </div>
            <div className='name '>
                <p className='text-center text-4xl text-black'>{pokeData.name}</p>
            </div>
        </div>
    )
}

export default GameCard