import { Box, Flex, Image, Text, Button, Link } from "@chakra-ui/react";

const Hero = () => {
    let name = "I'm Osama Alsrraj";
    return (
        <Box
            position="absolute"
            top={["50px", "100px", "150px"]} 
            left={["20px", "50px", "100px"]} 
            color="white"
            mt={{
                base:"100px",
                sm:"20px"
            }}
            
            p={4}
            w="90%"
        >
            <Flex
                direction={["column", "column", "row"]} // Flex direction based on screen size
                justifyContent={["center", "center", "space-between"]} // Flex justify content based on screen size
                alignItems="center"
                wrap="wrap"
                textAlign={["center", "center", "left"]} // Text alignment based on screen size
            >
                <Box me={{
                    sm:"10"
                }} mb={[4, 4, 0]}>
                    <Text
                        mb={2}
                        fontSize={["24px", "32px", "40px", "55px"]} // Font size based on screen size
                        fontWeight="bold"
                        letterSpacing="4px"
                    >
                        Hi, {name}
                    </Text>
                    <Text
                        fontSize={["20px", "28px", "36px", "50px"]} // Font size based on screen size
                        fontWeight="bold"
                        style={{
                            background: "linear-gradient(90deg, #14b8a6, #3b82f6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Web Developer
                    </Text>
                    <Link href="osamasarrajCV.pdf" download="osamasarrajCV.pdf">
                        <Button mt={4} size="lg" colorScheme="teal">
                            Download CV
                        </Button>
                    </Link>
                   
                </Box>
                <Box me={{
                    sm: "10"
                }} mt={[4, 4, 0]}>
                    <Image
                        src="me.png"
                        alt="Osama Alsrraj"
                        boxSize={["200px", "250px", "350px"]} 
                        borderRadius="full"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
