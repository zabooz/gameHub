import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

function SortGames({ onSelectSortOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metactritc", label: "Popularity" },
    { value: "-rating", label: "Avergage rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu  >
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${currentSortOrder?.label || 'Relevance'}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item.value}
              onClick={() => onSelectSortOrder(item.value)}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SortGames;
