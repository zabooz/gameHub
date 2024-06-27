import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props{
    onSearch: (searchText:string) => void
}


function SearchGames( {onSearch}:Props) {


   const ref =  useRef<HTMLInputElement>(null)

  return (
    <form   onSubmit={(e) => {
        e.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon></SearchIcon>
          </InputLeftElement>
          <Input
            placeholder="Search games..."
            borderRadius={20}
            variant='filled'
            ref={ref}
          ></Input>
        </InputGroup>
    </form>
  );
}

export default SearchGames;
