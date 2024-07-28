import { Box, Flex, Image, Text, Button, Link, keyframes } from "@chakra-ui/react";

// Define keyframes for the fade-in and slide-up animation
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

// Define keyframes for the text animation
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
            top={["50px", "100px", "150px"]}
            left={0}
            color="white"
            mt={{
                base: "100px",
                sm: "20px"
            }}
            p={4}
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
                        fontSize={["24px", "32px", "40px", "55px"]}
                        fontWeight="bold"
                        letterSpacing="2px"
                        animation={`${fadeInUp} 1.5s 0.3s ease-in-out both`} // Adjusted timing for "Hi, {name}"
                    >
                        Hi, {name}
                    </Text>
                    <Text
                        fontSize={["20px", "28px", "36px", "50px"]}
                        fontWeight="bold"
                        style={{
                            background: "linear-gradient(90deg, #14b8a6, #3b82f6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        animation={`${textZoomIn} 1.5s 0.5s ease-in-out both`} // Adjusted timing for "Web Developer"
                    >
                        Web Developer
                    </Text>
                    <Link href="Osama H. S. Alsrraj CV.pdf" download="osamasarrajCV.pdf">
                        <Button mt={4} size="lg" colorScheme="teal" animation={`${fadeInUp} 1.5s 0.7s ease-in-out both`}>
                            Download CV
                        </Button>
                    </Link>
                </Box>
                <Box mt={[4, 4, 0]} textAlign="center">
                    <Image
                        src="me.png"
                        alt="Osama Alsrraj"
                        boxSize={["200px", "250px", "300px", "350px"]}
                        borderRadius="full"
                        animation={`${fadeInUp} 1.5s 0.5s ease-in-out both`} // Adjusted timing for the image
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
