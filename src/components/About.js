import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import SylvieMemainYeComputer from "../images/SylvieMemainYeComputer.jpg";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="about" borderRadius="md" maxW="container.xl" py={20}>
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
              ABOUT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <Box pb={10}>
                <Image
                  src={SylvieMemainYeComputer}
                  alt="Sylvie and computer"
                  width={500}
                  height={500}
                  placeholder={"blurred"}
                  imgStyle={{ borderRadius: "0.8%" }}
                />
              </Box>

              <Box>
                <Heading textAlign="center" pt="5" fontWeight="bold" fontSize={40}>
                  <Text as="span" color={"grey.500"}>
                    Welcome to the "About" page 🧐
                  </Text>{" "}
                </Heading>
              </Box>
              <Text fontSize={25} mb={5} pt={5} textAlign="center">
                What is this website ? 🧐
              </Text>
              <Text fontSize={25} mb={5} textAlign="center">
                What for ? 🧐
              </Text>
              <Text fontSize={25} mb={5} textAlign="center">
                Why ? 🧐
              </Text>
              <Text fontSize={35} mb={5} textColor={"purple.600"} fontWeight="bold" textAlign="center">
                What is the purpose ? 🧐
              </Text>
              <Text fontSize={25} mb={5} textAlign="center">
                <Text as="span" textColor={"purple.600"}>
                  I love photography and I really wanted them to be exhibited, watched and why not sold.
                </Text>{" "}
                <br />
                <br />
                The goal of this site is to exhibit one of your most beautiful artistic photos in the form of an NFT.
                <br />
                Then participate in a vote of the most beautiful NFT, a pot and finally an auction...
                <br />
                - You will create an NFT.
                <br />
                - You will have a very short exhibition in the gallery.
                <br />
                - There will be a vote of the best NFTs.
                <br />
                - And the top NFTs will participate into a jackpot and then into an auction.
                <br />
              </Text>

              <Text fontSize={35} mb={5} textColor={"green.600"} textAlign="center" fontWeight="bold">
                What tools will you use? 🛠️
              </Text>
              <Text fontSize={25} mb={5} textAlign="center">
                - A WALLET
                <br />
                - A SMART CONTRACT
                <br />
              </Text>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};
export default AboutPage;
