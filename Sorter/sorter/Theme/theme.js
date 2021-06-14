import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  font: {
    heading: "Merienda",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

export default theme;
