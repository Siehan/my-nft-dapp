import * as React from "react";
import { Box, Button, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import create_your_nft from "../images/create_your_nft.jpeg";
import logo512 from "../images/logo512.png";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <>
      <Container id="home" borderRadius="md" maxW="container.xl" pt={28} pb={10}>
        <SlideFadeOnScroll>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1" align="center">
              <Heading
                mb={6}
                fontSize={40}
                bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
                _hover={{
                  bgGradient: "linear(to-r, cyan.500, blue.600, purple.600)",
                }}
                bgClip="text"
              >
                Welcome to{" "}
                <Text as="span" color={"teal.500"} fontSize={45} fontWeight="bold">
                  The ephemeral photo gallery
                </Text>{" "}
              </Heading>
              <Text fontSize={30} mb={6} py={8}>
                Create your own Non Fungible Token (NFT) with your favorite picture !!!
              </Text>{" "}
            </Box>
            <Box pb={10} mb={20}>
              <Image
                src={create_your_nft}
                alt="create_your_nft"
                width="450"
                height="450"
                borderRadius="2xl"
                align="center"
              />
            </Box>
          </Stack>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1" align="center">
              <Heading
                mb={6}
                fontSize={40}
                bgGradient="linear(to-r, cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Choose one of your favorite picture{" "}
                <Text as="span" color={"pink.500"} fontSize={45} fontWeight="bold">
                  and create an NFT
                </Text>{" "}
              </Heading>
              <Text fontSize={30} mb={6} py={8}>
                The rule is very simple. You can go directly to the{" "}
                <Button as="a" href="#about" size="lg" fontSize={28} colorScheme="pink">
                  About
                </Button>{" "}
                page for more informations or directly{" "}
                <Button as="a" href="#create-your-nft" size="lg" fontSize={28} colorScheme="orange">
                  Create your NFT
                </Button>
              </Text>{" "}
            </Box>
            <Box pb={10} mb={20}>
              <Image src={logo512} alt="logo512" width="450" height="450" borderRadius="2xl" align="center" />
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
};

export default Header;
