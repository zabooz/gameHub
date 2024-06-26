import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"


interface Props{
    gameQuery:GameQuery
}

 function GameHeading({gameQuery} : Props) {

  const {genre,platform} = gameQuery

  return (
    <Heading as='h1'  mb={5} fontSize='5xl'>
        {`${platform?.name || ''} ${genre?.name || ''} Games`}
    </Heading>
  )
}

export default GameHeading