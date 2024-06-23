import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function Ratings({ metacritic }: Props) {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";

  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4}  colorScheme={color}>
      {metacritic}
    </Badge>
  );
}

export default Ratings;
