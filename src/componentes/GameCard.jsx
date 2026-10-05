function GameCard({ imagen, titulo, estudio, accion }) {
  return (
    <div className="game-card">
      <img src={imagen} alt={`Portada del juego ${titulo}`} className="game-image" />
      
      <div className="game-info">
        <h3 className="game-title">{titulo}</h3>
        <p className="game-developer">Estudio: {estudio}</p>
        <button className="btn-action">{accion}</button>
      </div>
    </div>
  );
}

export default GameCard;