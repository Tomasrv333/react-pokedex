import React, { useState, useEffect } from 'react';
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {
    const [offset, setOffset] = useState(0)

    // 
    const getAllPokemons = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data;
        })
        const results = await Promise.all(promises)
        console.log(results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])
  
    return (    
    <PokemonContext.Provider value={{
        numero: 0
    }}>
        {children}
    </PokemonContext.Provider> 
  )
}
