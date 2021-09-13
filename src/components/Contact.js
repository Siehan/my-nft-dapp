import { Box, Button, Center, Container, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import Form from "./Form";
import icon_contact from "../images/icon_contact.png";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="contact" borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-l, #48BB78, #81E6D9)",
              }}
            >
              CONTACT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <Box pb={10}>
                <Image
                  src={icon_contact}
                  alt="icon contact"
                  imgStyle={{ borderRadius: "1%" }}
                  width="400"
                  height="500"
                  placeholder={"blurred"}
                />
              </Box>

              <Box>
                <Text fontSize={25} mb={10} textAlign="center">
                  If you wish more information, please send a message. Click on below to complete the form :
                </Text>
                <Center>
                  <Button colorScheme="blue" size="lg" onClick={onOpen}>
                    Submit
                  </Button>
                </Center>
              </Box>
            </Box>
            <Form isOpen={isOpen} onClose={onClose} />
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
