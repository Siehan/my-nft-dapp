import { Box, Button, Container, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import receipt from "../images/receipt.png";
import Form from "./Form";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Receipt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="receipt" borderRadius="md" maxW="container.xl" py={20}>
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
              RECEIPT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" pt={20} pb={20} overflow="hidden">
              <Box pb={10}>
                <Image align="center" src={receipt} alt="receipt" width="400" height="500" placeholder={"blurred"} />
              </Box>

              <Text fontSize={25} mb={10} textAlign="center">
                You can download an event of your minted NFT
              </Text>

              <Button colorScheme="teal" size="lg" onClick={onOpen}>
                Download a receipt
              </Button>
            </Box>
            <Form isOpen={isOpen} onClose={onClose} />
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default Receipt;
