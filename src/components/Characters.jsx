export default function Characters () {
    const { characters, setCharacters} = props
    const resertCharacters = () => {
        setCharacters([null])
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <button onClick={resertCharacters} className="btn-search">
                Volver a la busqueda
            </button>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <diiv className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status == "Alive" ? "Vivo" : "Dead" ? "Muerto" :'' "Desconocido"}</h6>
                            <p className="text-field">{character.episode.length} episodios</p>
                        </div>
                    </diiv>
                ))}
            </div>
        </div>
    )
}