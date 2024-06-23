import useGames from "../hooks/useGames";


function GameGrid() {

    const {games,error}=  useGames()



  return (
    <>
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
}

export default GameGrid;
