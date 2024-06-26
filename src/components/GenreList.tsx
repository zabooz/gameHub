import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imgUrl";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, SelectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <Heading mb={3} fontSize='3xl'>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                variant="link"
                fontSize="lg"
                fontWeight={SelectedGenre === genre ? 900 : 600}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
