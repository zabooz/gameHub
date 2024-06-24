import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imgUrl";


function GenreList() {
  const { data,isLoading,error } = useGenres();
  


  if(error) return null


  return (

    <>
    {isLoading && <Spinner/>}

    <List>
      {data.map((genre) => (
          <ListItem  key={genre.id} paddingY={2}>
            <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
            <Text fontSize='lg' >{genre.name}</Text>
            </HStack>
          </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList;
