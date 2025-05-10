import { useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  Button,
  VStack,
  useDisclosure,
  Container,
  Flex,
  Tag,
} from "@chakra-ui/react";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageGroup, setCurrentImageGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageGroups = {
    ecommerce: [
      "/e1.png",
      "/e2.png",
      "/e3.png",
      "/e4.png",
      "/main.png",
      "/e6.png",
      "/e7.png",
      "/e8.png",
      "/e9.png",
      "/e10.png",
      "/e11.png",
      "/e12.png",
      "/e13.png",
      "/e14.png",
      "/e15.png",
      "/e16.png",
      "/e17.png",
      "/myorder.png",
      "/e19.png",
      "/e20.png",
      "e21.png",
    ],
    threadsClone: Array.from({ length: 4 }, (_, i) => `/t${i + 1}.png`),

    foodApp: Array.from({ length: 43 }, (_, i) => `/food_${i + 1}.png`),
    onlineCoursesPlatform: Array.from(
      { length: 49 },
      (_, i) => `/ocp${i + 1}.png`
    ),
  };

  const projectData = {
    ecommerce: {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management etc..",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      images: imageGroups.ecommerce,
    },
    foodApp: {
      title: "Food Delivery App",
      description:
        "Real-time food delivery platform with order tracking and restaurant management",
      tech: ["React + vite +ts", "Node.js", "Express", "MongoDB"],
      images: imageGroups.foodApp,
    },
    onlineCoursesPlatform: {
      title: "Online Courses Platform",
      description:
        "Interactive learning platform with course management and student progress tracking with invoked quiz app",
      tech: ["React + vite +ts", "Node.js", "Express", "Postgresql", "Prisma"],
      images: imageGroups.onlineCoursesPlatform,
    },
    threadsClone: {
      title: "Threads Clone",
      description:
        "Social media platform clone ",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      images: imageGroups.threadsClone,
    },
  };

  const handleClickImageGroup = (imageGroupKey) => {
    setCurrentImageGroup(projectData[imageGroupKey].images);
    onOpen();
  };

  const handleImageClick = (image) => {
    window.open(image, "_blank");
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const ProjectCard = ({ project, onClick }) => (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
      }}
      cursor="pointer"
      onClick={onClick}
    >
      <Box position="relative" height="250px">
        {loading && (
          <Box
            position="absolute"
            inset={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              width="40px"
              height="40px"
              border="4px"
              borderColor="blue.500"
              borderTopColor="transparent"
              borderRadius="full"
              animation="spin 1s linear infinite"
            />
          </Box>
        )}
        <Image
          src={project.images[0]}
          alt={project.title}
          objectFit="cover"
          width="100%"
          height="100%"
          onLoad={handleImageLoad}
        />
      </Box>
      <VStack p={4} align="start" spacing={2}>
        <Heading size="md" color="gray.700">
          {project.title}
        </Heading>
        <Text color="gray.600" noOfLines={2}>
          {project.description}
        </Text>
        <Flex gap={2} wrap="wrap">
          {project.tech.map((tech, index) => (
            <Tag key={index} colorScheme="blue" size="sm">
              {tech}
            </Tag>
          ))}
        </Flex>
        <Text color="blue.500" fontSize="sm">
          Click to view gallery
        </Text>
      </VStack>
    </Box>
  );

  return (
    <Container maxW="container.xl" id="projects">
      <Box py={20}>
        <VStack spacing={8} mb={12}>
          <Heading
            size="2xl"
            color="blue.500"
            textAlign="center"
            fontWeight="bold"
          >
            Featured Projects
          </Heading>
          <Text color="gray.600" textAlign="center" fontSize="lg" maxW="2xl">
            Explore my portfolio of full-stack applications showcasing modern
            web development practices and user-centric design
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={8}
        >
          {Object.entries(projectData).map(([key, project]) => (
            <ProjectCard
              key={key}
              project={project}
              onClick={() => handleClickImageGroup(key)}
            />
          ))}
        </Grid>

        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent bg="white">
            <ModalHeader color="gray.700">
              <VStack align="start" spacing={2}>
                <Text>{projectData[currentImageGroup]?.title}</Text>
                <Flex gap={2} wrap="wrap">
                  {projectData[currentImageGroup]?.tech.map((tech, index) => (
                    <Tag key={index} colorScheme="blue" size="sm">
                      {tech}
                    </Tag>
                  ))}
                </Flex>
                <Text fontSize="md" color="gray.600">
                  {projectData[currentImageGroup]?.description}
                </Text>
              </VStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {currentImageGroup.map((image, index) => (
                  <Box
                    key={index}
                    cursor="pointer"
                    onClick={() => handleImageClick(image)}
                    transition="transform 0.2s"
                    _hover={{ transform: "scale(1.02)" }}
                    position="relative"
                    overflow="hidden"
                    borderRadius="md"
                    boxShadow="md"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      width="100%"
                      height="auto"
                      transition="transform 0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Container>
  );
};

export default Projects;
