import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkModeToggle";
import SearchGames from "./SearchGames";

function NavBar() {
  return (
    <HStack padding={2}>
      <Image src={logo} boxSize="60px"></Image>
      <SearchGames></SearchGames>
      <DarkMode />
    </HStack>
  );
}

export default NavBar;
