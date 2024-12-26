import {
  Box,
  Flex,
  Image,
  Link,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      color="black"
      w="full"
      bg="white"
      shadow="sm"
      h="70px"
      position="fixed"
      top="0"
      zIndex="1000"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        px={{ base: "4", md: "8" }}
      >
        <Box>
          <Image src="/logo.svg" w={["170px", "200px"]} h="70px" />
        </Box>
        <HStack spacing="8" display={{ base: "none", md: "flex" }}>
          <Link
            href="#home"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            href="#about"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            aria-label="About"
          >
            About
          </Link>
          <Link
            href="#services"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            aria-label="Services"
          >
            Services
          </Link>
          <Link
            href="#projects"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            aria-label="Contact"
          >
            Contact
          </Link>
        </HStack>
        <IconButton
          color="black"
          aria-label="Toggle menu"
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
        />
      </Flex>

      {isOpen && (
        <Box bg="gray.100" pb="4" display={{ base: "block", md: "none" }}>
          <Flex flexDirection="column" alignItems="center" pt="4">
            <Link
              href="#home"
              _hover={{ textDecoration: "none", color: "blue.500" }}
              mb="2"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="#about"
              _hover={{ textDecoration: "none", color: "blue.500" }}
              mb="2"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="#services"
              _hover={{ textDecoration: "none", color: "blue.500" }}
              mb="2"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              href="#projects"
              _hover={{ textDecoration: "none", color: "blue.500" }}
              mb="2"
              onClick={onClose}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              _hover={{ textDecoration: "none", color: "blue.500" }}
              onClick={onClose}
            >
              Contact
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
