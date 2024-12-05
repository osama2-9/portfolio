import { Box, Flex, Image, Text, Button, Link, keyframes } from "@chakra-ui/react";


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
        <Box
            id="home"
            position="relative"
            color="black"
            mt={{ base: "80px", sm: "150px" }}
            px={4}
            w="100%"
            animation={`${fadeInUp} 1s ease-in-out`}
        >
            <Flex
                direction={["column", "column", "row"]}
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                textAlign={["center", "center", "left"]}
            >
                <Box mb={[4, 4, 0]} textAlign={["center", "center", "left"]}>
                    <Text
                        mb={2}
                        fontSize={["34px", "40px", "44px", "55px"]}
                        fontWeight="bold"
                        letterSpacing="wide"
                        animation={`${fadeInUp} 1.5s 0.3s ease-in-out both`}
                    >
                        Hi, {name}
                    </Text>
                    <Text
                        fontSize={["20px", "28px", "36px", "48px"]}
                        fontWeight="bold"
                        color="blue.500"
                        lineHeight="1.2"
                        animation={`${textZoomIn} 1.5s 0.5s ease-in-out both`}
                    >
                        Web Developer
                    </Text>
                    <Link href="Osama Alsrraj Cv.pdf" download="osamasarrajCV.pdf">
                        <Button
                            mt={4}
                            size="lg"
                            colorScheme="blue"
                            animation={`${fadeInUp} 1.5s 0.7s ease-in-out both`}
                            _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
                            transition="all 0.3s ease"
                        >
                            Download CV
                        </Button>
                    </Link>
                </Box>
                <Box mt={[4, 4, 0]} textAlign="center">
                    <Image
                        src="me.jpg"
                        alt="Osama Alsrraj"
                        boxSize={["200px", "250px", "300px", "350px"]}
                        borderRadius="full"
                        ml={{ lg: "70px" }}
                        shadow="lg"
                        animation={`${fadeInUp} 1.5s 0.5s ease-in-out both`}
                        transition="all 0.3s ease"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
