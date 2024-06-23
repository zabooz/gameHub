import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import DarkMode from "./DarkModeToggle"



function NavBar() {
  return (
    <HStack justifyContent='space-between' padding={5}>
        <Image src={logo} boxSize="60px"></Image>
        <DarkMode/>
    </HStack>
  )
}

export default NavBar