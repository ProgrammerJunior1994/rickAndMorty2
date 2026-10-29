import { useState } from 'react'
import RickMorty from './img/RickMorty.png'
import './App.css'
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters] = useState([null])

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const charactersApi = await api.json()
    console.log(charactersApi)
    setCharacters(charactersApi.results);
  }

  return (
    <>
    <div>
      <h1 className="title">Rick and Morty</h1>
      <br />
      <img src={RickMorty} alt="Rick and Morty" className='img-home'/>
      <br />
      <button onClick={reqApi} className="btn-search">
        Buscar Personajes
      </button>
    </div>
    </>
  )
}

export default App
