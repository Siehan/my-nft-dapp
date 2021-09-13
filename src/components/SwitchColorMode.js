import * as React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      ml={"3"}
      bg={"whiteAlpha"}
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      rounded={"md"}
    />
  );
};

export default SwitchColorMode;
