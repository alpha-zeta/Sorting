import { Box, Button, useColorMode, Heading } from "@chakra-ui/react";
function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Box
        d="flex"
        alignItems="center"
        width="full"
        height="16"
        bgColor="tomato"
        pos="relative"
        textAlign="center"
        justifyContent="center"
      >
        <Heading className="Brand" fontFamily="heading" as="h1">
          Sorter
        </Heading>
        <Button pos="absolute" right="4" onClick={() => toggleColorMode()}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
