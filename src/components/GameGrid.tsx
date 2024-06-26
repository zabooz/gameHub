import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props{
  gameQuery: GameQuery
}



function GameGrid({gameQuery}:Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  
  const skeleton = new Array(20).fill(null);
  
  let count = 0

 

  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
      >
        {isLoading &&
          skeleton.map(skeleton => {
            count++
            return <GameCardContainer key={skeleton + count}>
              <CardSkeleton  />
            </GameCardContainer>
})}
        {data.map((game) => {
  
          return (
            <GameCardContainer key={game.id}>
              <GameCards key={game.id} game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
