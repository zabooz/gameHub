import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import Ratings from "./Ratings";
import getCroppedImageUrl from "../services/imgUrl";

interface Props {
  game: Game;
}

function GameCards({ game }: Props) {


  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatFormIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
          <Ratings metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCards;
