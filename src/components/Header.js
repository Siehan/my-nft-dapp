import * as React from "react";
import { Box, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import create_your_nft from "../images/create_your_nft.jpeg";
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
            <Box flex="1">
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
                <Text as="span" color={"teal.500"} fontSize={55} fontWeight="bold">
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
                width="550"
                height="550"
                placeholder={"blurred"}
                borderRadius="2xl"
                align="center"
              />
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
};

export default Header;
