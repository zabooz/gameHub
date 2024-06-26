import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function SearchGames() {
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon></SearchIcon>
      </InputLeftElement>
      <Input
        placeholder="Search games..."
        borderRadius={20}
        variant='filled'
      ></Input>
    </InputGroup>
  );
}

export default SearchGames;
