import React, { useContext } from 'react'
import { PokemonList, FilterBar } from '../components'
import { PokemonContext } from '../context/PokemonContext'

export const HomePage = () => {
  const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

  return (
    <>
      <div className='container-filter container'>
        <div className='icon-filter' onClick={() => setActive(!active)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <span>Filtrar</span>
        </div>

        <button className='btn-load-more' onClick={onClickLoadMore}>
          Cargar más
        </button>

      </div>

      <PokemonList />
      <FilterBar />

      
    </>
  )
}
