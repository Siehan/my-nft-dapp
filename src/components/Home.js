import { Box, Button, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import logo512 from "../images/logo512.png";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Home = () => {
  return (
    <>
      <Container borderRadius="md" maxW="container.xl" pt={28} pb={10}>
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
                bgGradient="linear(to-r, cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Choose one of your favorite picture{" "}
                <Text as="span" color={"pink.500"} fontSize={55} fontWeight="bold">
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
              <Image
                src={logo512}
                alt="logo512"
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

export default Home;
