import {
  Box,
  Container,
  Flex,
  Text,
  Icon,
  Link,
  VStack,
  Divider,
  HStack,
  Grid,
  Button,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const SocialLink = ({ icon, href, label }) => (
  <Link
    href={href}
    isExternal
    aria-label={label}
    _hover={{
      color: "blue.200",
      transform: "translateY(-2px)",
      shadow: "lg",
    }}
    transition="all 0.3s"
    display="inline-flex"
    p={3}
    bg="whiteAlpha.100"
    rounded="lg"
  >
    <Icon as={icon} w={6} h={6} />
  </Link>
);

const ContactLink = ({ icon, text, href }) => (
  <Link
    href={href}
    _hover={{ color: "blue.200", textDecoration: "none" }}
    display="flex"
    alignItems="center"
    bg="whiteAlpha.50"
    p={3}
    rounded="lg"
    transition="all 0.3s"
  >
    <Icon as={icon} mr={3} w={5} h={5} />
    <Text fontSize="sm">{text}</Text>
  </Link>
);

const Footer = () => {

  return (
    <Box bg="blue.600" color="white" position="relative" overflow="hidden">
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="600px"
        height="600px"
        bg="whiteAlpha.100"
        transform="rotate(45deg)"
        borderRadius="xl"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={10}
          py={12}
        >
          {/* Left Section */}
          <VStack align="flex-start" spacing={6}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.100, blue.200)"
              bgClip="text"
            >
              Let's Connect
            </Text>
            <Text color="whiteAlpha.800" maxW="400px">
              Feel free to reach out for collaborations or just a friendly
              hello! I'm always open to discussing new projects and
              opportunities.
            </Text>
            <HStack spacing={4}>
              <SocialLink
                icon={FaGithub}
                href="https://github.com/osama2-9"
                label="GitHub"
              />
              <SocialLink
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/osama-alsrraj/"
                label="LinkedIn"
              />
            </HStack>
          </VStack>

          {/* Right Section */}
          <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={6}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.100, blue.200)"
              bgClip="text"
            >
              Contact Info
            </Text>
            <VStack align="stretch" spacing={4} width="100%">
              <ContactLink
                icon={FaEnvelope}
                text="osamaalsrraj3@gmail.com"
                href="mailto:osamaalsrraj3@gmail.com"
              />
              <ContactLink
                icon={FaPhone}
                text="+20 01040661625"
                href="tel:+2001040661625"
              />
            </VStack>
          </VStack>
        </Grid>

        <Divider borderColor="whiteAlpha.200" />

        {/* Bottom Section */}
        <Flex
          py={6}
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="whiteAlpha.800">
            &copy; 2023 Osama Alsrraj. All rights reserved.
          </Text>
          <HStack spacing={2} color="whiteAlpha.800">
            <Text fontSize="sm">Made with</Text>
            <Icon as={FaArrowUp} color="red.400" w={4} h={4} />
            <Text fontSize="sm">using modern web technologies</Text>
          </HStack>
        </Flex>
      </Container>

      {/* Top Border Gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="4px"
        bgGradient="linear(to-r, transparent, blue.300, transparent)"
      />
    </Box>
  );
};

export default Footer;
