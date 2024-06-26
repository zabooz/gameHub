import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";




function SortGames() {

    



    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by : Relevance
          </MenuButton>
          <MenuList>
            <MenuItem>sdg</MenuItem>
            <MenuItem>sdg</MenuItem>
            <MenuItem>sdg</MenuItem>
            <MenuItem>sdg</MenuItem>
            <MenuItem>sdg</MenuItem>
            <MenuItem>twetwet</MenuItem>
          </MenuList>
        </Menu>
      )
}

export default SortGames;
