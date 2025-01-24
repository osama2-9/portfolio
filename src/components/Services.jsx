/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Container,
} from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaDesktop,
  FaTools,
} from "react-icons/fa";

const ServiceCard = ({ icon, title, description }) => (
  <Box
    p={8}
    rounded="xl"
    position="relative"
    overflow="hidden"
    bg="white"
    borderWidth="1px"
    borderColor="gray.100"
    transition="all 0.3s ease"
    _hover={{
      transform: "translateY(-8px)",
      shadow: "xl",
      borderColor: "blue.500",
    }}
  >
    {/* Gradient Overlay */}
    <Box
      position="absolute"
      top="-50%"
      left="-50%"
      width="200%"
      height="200%"
      bg="linear-gradient(45deg, transparent 65%, rgba(59, 130, 246, 0.1) 100%)"
      transition="all 0.6s ease"
      _groupHover={{
        transform: "rotate(180deg)",
      }}
    />

    <VStack spacing={4} align="flex-start" position="relative" zIndex={1}>
      <Box p={3} bg="blue.50" rounded="lg" color="blue.500">
        <Icon as={icon} w={6} h={6} />
      </Box>
      <Text fontSize="xl" fontWeight="bold" color="gray.800">
        {title}
      </Text>
      <Text color="gray.600" lineHeight="tall">
        {description}
      </Text>
    </VStack>
  </Box>
);

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using modern frontend technologies like React and React + Vite. Focused on delivering exceptional user experiences.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications with Node.js, Express, and other backend technologies to ensure smooth data flow and integration.",
  },
  {
    icon: FaDesktop,
    title: "Full Stack Development",
    description:
      "End-to-end web application development combining frontend and backend expertise to create complete, efficient solutions.",
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description:
      "Designing and implementing efficient database structures using MongoDB, MySQL, and PostgreSQL for optimal data management.",
  },
  {
    icon: FaMobile,
    title: "Responsive Design",
    description:
      "Creating websites that work seamlessly across all devices and screen sizes, ensuring a consistent user experience.",
  },
  {
    icon: FaTools,
    title: "API Development",
    description:
      "Developing and integrating RESTful APIs to enable seamless communication between different parts of your application.",
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      py={20}
      bg="gray.50"
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorations */}
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        width="400px"
        height="400px"
        bg="blue.500"
        opacity="0.05"
        transform="rotate(45deg)"
        borderRadius="xl"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-10%"
        width="400px"
        height="400px"
        bg="blue.500"
        opacity="0.05"
        transform="rotate(45deg)"
        borderRadius="xl"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="blue.500"
              mb={4}
              position="relative"
              display="inline-block"
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
              Services
            </Text>
            <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto" mt={6}>
              Delivering comprehensive web development solutions tailored to
              your needs
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;
