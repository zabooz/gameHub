import { SimpleGrid,Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import CardSkeleton from "./CardSkeleton";

function GameGrid() {
  const { games, error,isLoading } = useGames();

  const skeleton = [1,2,3,4,5,6]


  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
        >
        {isLoading && skeleton.map(skeleton => <CardSkeleton key={skeleton}/>)}
        {games.map((game) => {
          return <GameCards key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
