import * as React from "react";
import Icon from "@chakra-ui/icon";
import social_media3 from "../images/social_media3.jpg";
import { Box, Button, Container, Heading, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const socialAccounts = [
  { Icon: FaLinkedin, path: "https://www.linkedin.com/in/sylvie-mémain-yé-9714501b9/", title: "Linkedin" },
  { Icon: FaGithub, path: "https://github.com/Siehan", title: "Github" },
  { Icon: FaTwitter, path: "https://twitter.com/memainye", title: "Twitter" },
  { Icon: FaFacebookF, path: "https://www.facebook.com/SylvieMemainYe/", title: "Facebook" },
  { Icon: FaInstagram, path: "https://www.instagram.com/memainye/?hl=fr", title: "Instagram" },
];

function SocialMediaPage() {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="social-media" borderRadius="md" maxW="container.xl" py={20}>
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
              SOCIAL MEDIA
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <Image src={social_media3} alt="Social media3" borderRadius="3xl" width={581} height={400} />
              <Box pt={20} pb={15}>
                {socialAccounts.map((item, index) => (
                  <Link
                    href={item.path}
                    aria-label={item.title}
                    mx={6}
                    _focus={{ outline: "none" }}
                    key={index}
                    isExternal
                  >
                    <Button aria-label={item.title} bg="transparent" boxSize="55" m={50}>
                      <Icon as={item.Icon} boxSize="75" />
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
}

export default SocialMediaPage;
