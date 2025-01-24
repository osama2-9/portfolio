import {
  Box,
  Flex,
  Image,
  Link,
  HStack,
  IconButton,
  useDisclosure,
  Button,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    px={4}
    py={2}
    rounded="lg"
    onClick={onClick}
    _hover={{
      textDecoration: "none",
      bg: "blue.50",
      color: "blue.500",
    }}
    transition="all 0.3s"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close mobile menu if open
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(255, 255, 255, 0.9)"
      backdropFilter="blur(10px)"
      shadow="sm"
      zIndex="1000"
    >
      <Flex
        h="70px"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {/* Logo */}
        <Box>
          <Image src="/logo.svg" w={["170px", "200px"]} h="70px" />
        </Box>

        {/* Desktop Navigation */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <Button
            as={Link}
            href="#contact"
            onClick={handleScrollToContact}
            colorScheme="blue"
            size="md"
            rounded="lg"
            _hover={{
              transform: "translateY(-2px)",
              shadow: "md",
            }}
            transition="all 0.3s"
          >
            Contact Me
          </Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="gray.600"
          aria-label="Open menu"
          icon={<HamburgerIcon w={6} h={6} />}
          _hover={{
            bg: "blue.50",
          }}
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={4}>
                <Link
                  href="#home"
                  p={3}
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "blue.50",
                    color: "blue.500",
                  }}
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  p={3}
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "blue.50",
                    color: "blue.500",
                  }}
                  onClick={onClose}
                >
                  About
                </Link>
                <Link
                  href="#services"
                  p={3}
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "blue.50",
                    color: "blue.500",
                  }}
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  p={3}
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "blue.50",
                    color: "blue.500",
                  }}
                  onClick={onClose}
                >
                  Projects
                </Link>
                <Button
                  as={Link}
                  href="#contact"
                  onClick={(e) => {
                    handleScrollToContact(e);
                    onClose();
                  }}
                  colorScheme="blue"
                  w="full"
                >
                  Contact Me
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
