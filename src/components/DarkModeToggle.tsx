import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function DarkMode() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
      <Text whiteSpace='nowrap' >Dark Mode</Text>
    </HStack>
  );
}

export default DarkMode;
