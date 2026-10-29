export default function Characters ({
    characters,
    currentPage,
    totalPages,
    loading,
    error,
    onPageChange,
    onReset,
}) {
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <button onClick={onReset} className="btn-search">
                Volver a la busqueda
            </button>
            <div className="container-characters">
                {characters.map((character) => (
                    <div className="character-container" key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>{character.status === "Alive" ? "Vivo" : character.status === "Dead" ? "Muerto" : "Desconocido"}</h6>
                                <p className="text-field">{character.episode.length} episodios</p>
                            </div>
                    </div>
                ))}
            </div>
            {loading && <p>Cargando personajes...</p>}
            {error && <p className="error-message">{error}</p>}
            <div className="pagination" aria-label="Paginación de personajes">
                <button
                    className="btn-pagination"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={loading || currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    className="btn-pagination"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={loading || currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}