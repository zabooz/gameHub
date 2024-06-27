import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkModeToggle";
import SearchGames from "./SearchGames";

interface Props{
  onSearch: (searchText:string) => void
}
function NavBar({onSearch} : Props) {
  return (
    <HStack padding={2}>
      <Image src={logo} boxSize="60px"></Image>
      <SearchGames onSearch={onSearch}></SearchGames>
      <DarkMode />
    </HStack>
  );
}

export default NavBar;
