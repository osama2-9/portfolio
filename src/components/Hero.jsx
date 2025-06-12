import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Link,
  keyframes,
  Container,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const textZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Hero = () => {
  const name = "I'm Osama Alsrraj";

  return (
    <Container maxW="container.xl" id="home">
      <Flex
        minH="90vh"
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        py={{ base: "20", lg: "32" }}
        gap={{ base: 8, lg: 16 }}
      >
        <VStack
          align={{ base: "center", lg: "start" }}
          spacing={6}
          flex={1}
          animation={`${fadeInUp} 1s ease-out`}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="blue.500"
            fontWeight="medium"
          >
            Hello
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            letterSpacing="tight"
          >
            {name}
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.600"
            maxW="600px"
            textAlign={{ base: "center", lg: "left" }}
          >
            A passionate Full Stack Developer crafting innovative web solutions
          </Text>

          <HStack spacing={4}>
            <Link href="Osama Alsrraj Cv.pdf" download="Osama Alsrraj Cv.pdf">
              <Button
                size="lg"
                colorScheme="blue"
                px={8}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                Download CV
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                colorScheme="blue"
                px={8}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                Contact Me
              </Button>
            </Link>
          </HStack>

          <HStack spacing={4} pt={4}>
            <Link href="https://github.com/osama2-9" isExternal>
              <Icon
                as={FaGithub}
                w={6}
                h={6}
                _hover={{ color: "blue.500", transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/osama-alsrraj/" isExternal>
              <Icon
                as={FaLinkedin}
                w={6}
                h={6}
                _hover={{ color: "blue.500", transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
            </Link>
          </HStack>
        </VStack>

        <Box
          flex={1}
          position="relative"
          animation={`${fadeInUp} 1s ease-out 0.3s backwards`}
        >
          <Box
            position="absolute"
            inset={0}
            bgGradient="radial(blue.400, transparent 70%)"
            opacity={0.15}
            borderRadius="full"
            filter="blur(40px)"
          />
          <Image
            src="me.jpg"
            alt="Osama Alsrraj"
            borderRadius="full"
            boxSize={{ base: "300px", lg: "400px" }}
            objectFit="cover"
            mx="auto"
            boxShadow="2xl"
            border="4px solid"
            borderColor="blue.500"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
