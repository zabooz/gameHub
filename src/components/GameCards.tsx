import { Card, CardBody, Heading, Image} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";


interface Props {
  game: Game;
}

function GameCards({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">
          {game.name}
        </Heading>
          <PlatFormIconList
          platforms={game.parent_platforms.map(p => p.platform )}
          
          />
       
      </CardBody>

    </Card>
  );
}

export default GameCards;
