import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      mx="auto"
      py={2}
      px={[4, 6, 10, 14, 20]}
      w="100%"
      position="fixed"
      bottom={0}
      left={0}
      zIndex="sticky"
      textAlign="center"
      borderRadius="md"
      bgGradient="linear(to-l, cyan.400, blue.300, purple.500)"
      _hover={{
        bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
      }}
    >
      <Text fontSize={22} p={2}>
        Copyright © 2021 Smy - Built with{" "}
        <span role="img" aria-label="red heart">
          ❤️
        </span>{" "}
        by Sylvie Mémain-Yé
      </Text>
    </Box>
  );
};

export default Footer;
