import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });

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
