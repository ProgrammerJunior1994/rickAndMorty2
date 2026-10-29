import { useState } from 'react'
import RickMorty from './img/RickMorty.png'
import './App.css'
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showCharacters, setShowCharacters] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const reqApi = async (page = 1) => {
    setLoading(true)
    setError('')

    try {
      const api = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)

      if (!api.ok) {
        throw new Error('No se pudieron cargar los personajes.')
      }

      const charactersApi = await api.json()
      setCharacters(charactersApi.results)
      setTotalPages(charactersApi.info.pages)
      setCurrentPage(page)
      setShowCharacters(true)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  const resetCharacters = () => {
    setShowCharacters(false)
    setCharacters([])
    setCurrentPage(1)
  }

  if (showCharacters) {
    return (
      <Characters
        characters={characters}
        currentPage={currentPage}
        totalPages={totalPages}
        loading={loading}
        error={error}
        onPageChange={reqApi}
        onReset={resetCharacters}
      />
    )
  }

  return (
    <>
    <div>
      <h1 className="title">Rick and Morty</h1>
      <br />
      <img src={RickMorty} alt="Rick and Morty" className='img-home'/>
      <br />
      <button onClick={() => reqApi()} className="btn-search" disabled={loading}>
        {loading ? 'Cargando...' : 'Buscar Personajes'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
    </>
  )
}

export default App
