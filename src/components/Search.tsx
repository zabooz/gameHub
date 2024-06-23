import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"


function Search() {
  return (
    <>  
        <InputGroup>
        <InputLeftElement pointerEvents="none">
        <SearchIcon/>
        </InputLeftElement>
        <Input id="search" placeholder="Search games...">
        </Input>
        </InputGroup>


    </>
  )
}

export default Search