import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Grid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";

const technologies = [
  { image: "/html-5.png", name: "HTML" },
  { image: "/css-3.png", name: "CSS" },
  { image: "/js.png", name: "JavaScript" },
  { image: "/typescript.png", name: "TypeScript" },
  { image: "/react.png", name: "React.js" },
  { image: "/express.png", name: "Express.js" },
  { image: "/node.png", name: "Node.js" },
  { image: "/mongo.png", name: "MongoDB" },
  { image: "/mysql.png", name: "MySQL" },
  { image: "/tailwind.svg", name: "Tailwind CSS" },
  { image: "/chakra.png", name: "Chakra UI" },
  { image: "/git.svg", name: "Git" },
  { image: "/postgresql.png", name: "PostgreSQL" },
  { image: "/prisma.png", name: "Prisma" },
];

const SkillCategory = ({ icon, title, children }) => (
  <Box
    p={6}
    bg="white"
    rounded="xl"
    shadow="lg"
    transition="all 0.3s"
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
  >
    <VStack spacing={4} align="start">
      <HStack spacing={3}>
        <Icon as={icon} w={6} h={6} color="blue.500" />
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          {title}
        </Text>
      </HStack>
      <Text color="gray.600">{children}</Text>
    </VStack>
  </Box>
);

const Aboutme = () => {
  return (
    <Box id="about" py={20} bg="gray.50" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* About Section */}
          <VStack spacing={6} textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="blue.500"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "4px",
                bg: "blue.500",
                borderRadius: "full",
              }}
            >
              About Me
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="800px"
              lineHeight="tall"
            >
              I am a passionate and experienced software developer specializing
              in full-stack development. With expertise in modern web
              technologies, I create scalable and efficient solutions that
              deliver exceptional user experiences.
            </Text>
          </VStack>

          {/* Skills Categories */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            w="full"
          >
            <SkillCategory icon={FaCode} title="Frontend Development">
              Expertise in creating responsive and interactive user interfaces
              using modern frontend frameworks and libraries.
            </SkillCategory>
            <SkillCategory icon={FaDatabase} title="Backend Development">
              Building robust server-side applications and RESTful APIs with
              Node.js and Express.
            </SkillCategory>
            <SkillCategory icon={FaTools} title="Full Stack Development">
              I have experience working with both frontend and backend
              technologies. 
            </SkillCategory>
          </Grid>

          {/* Technologies Grid */}
          <Box w="full">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              textAlign="center"
              mb={10}
              color="gray.700"
            >
              Technologies I Work With
            </Text>

            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
              }}
              gap={6}
            >
              {technologies.map((tech, index) => (
                <VStack
                  key={index}
                  p={4}
                  bg="white"
                  rounded="xl"
                  shadow="md"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-5px)",
                    shadow: "xl",
                    bg: "blue.50",
                  }}
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    w="50px"
                    h="50px"
                    objectFit="contain"
                  />
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    {tech.name}
                  </Text>
                </VStack>
              ))}
            </Grid>
          </Box>
        </VStack>
      </Container>

      {/* Background Decorations */}
      <Box
        position="absolute"
        top="0"
        right="0"
        w="300px"
        h="300px"
        bgGradient="radial(blue.400, transparent 70%)"
        opacity="0.1"
        filter="blur(40px)"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="300px"
        h="300px"
        bgGradient="radial(blue.400, transparent 70%)"
        opacity="0.1"
        filter="blur(40px)"
      />
    </Box>
  );
};

export default Aboutme;
