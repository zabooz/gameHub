import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props{
  genre:Genre | null
  selectedPlatform:Platform | null
}



function GameGrid({genre,selectedPlatform}:Props) {
  const { data, error, isLoading } = useGames(genre,selectedPlatform);
  
  const skeleton = new Array(20).fill(null);
  
  let count = 0

 

  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
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
