import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import Ratings from "./Ratings";
import getCroppedImageUrl from "../services/imgUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCards({ game }: Props) {


  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' mb={3}>
          <PlatFormIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
          <Ratings metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
}

export default GameCards;
