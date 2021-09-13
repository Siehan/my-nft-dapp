import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import crane from "../images/crane.png";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const GalleryNFT = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="gallery-nft" borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-r, red, orange, red)",
              }}
            >
              PAGE UNDER CONSTRUCTION
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <Box pb={10}>
                <Image
                  src={crane}
                  alt="icon contact"
                  imgStyle={{ borderRadius: "1%" }}
                  width={500}
                  height={600}
                  placeholder={"blurred"}
                />
              </Box>
              <Center>
                <Text fontSize={30} mb={10} textAlign="center">
                  Oops{" "}
                  <span role="img" aria-label="Pensive emoji">
                    👷👷🏽‍♀️👷🏾‍♀️
                  </span>{" "}
                  This page is under construction. I'm still thinking about it ...
                </Text>
              </Center>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default GalleryNFT;
