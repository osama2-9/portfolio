import { Box, Flex, Image, Link, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
        
            borderBottom="1px solid gray"
            color="white"
            w="full"
            bg="#000"
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
                px="4"
                me={50}
            >
                <Box>
                    <Image src="/logo.svg" w={["150px", "200px"]} h="70" />
                </Box>
                <HStack spacing="4" display={{ base: "none", md: "flex" }}>
                    <Link
                        href="#"
                        _hover={{ textDecoration: "none", color: "blue.500" }}
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        _hover={{ textDecoration: "none", color: "blue.500" }}
                    >
                        About
                    </Link>
                    <Link
                        href="#services"
                        _hover={{ textDecoration: "none", color: "blue.500" }}
                    >
                        Services
                    </Link>
                    <Link
                        href="#projects"
                        _hover={{ textDecoration: "none", color: "blue.500" }}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        _hover={{ textDecoration: "none", color: "blue.500" }}
                    >
                        Contact
                    </Link>
                </HStack>
                <IconButton
                className="transition-all"
                    color={'white'}
                    _hover={{
                        bg: "black",

                    }}
                    aria-label="Open menu"
                    display={{ base: "block", md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    variant="ghost"
                />
            </Flex>

            {isOpen && (
                <Box
                    bg="gray.900"
                    pb="4"
                    display={{ base: "block", md: "none" }}
                >
                    <Flex
                    p={2}

                        bg="gray.500"
                        
                        flexDirection="column"
                        alignItems="center"
                        pt="4"
                    >
                        <Link
                            href="#"
                            _hover={{ textDecoration: "none", color: "blue.500" }}
                            mb="2"
                        >
                            Home
                        </Link>
                        
                        <Link
                            href="#about"
                            _hover={{ textDecoration: "none", color: "blue.500" }}
                            mb="2"
                        >
                            About
                        </Link>
                        <Link
                            href="#services"
                            _hover={{ textDecoration: "none", color: "blue.500" }}
                            mb="2"
                        >
                            Services
                        </Link>
                        <Link mb={2}
                            href="#projects"
                            _hover={{ textDecoration: "none", color: "blue.500" }}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            _hover={{ textDecoration: "none", color: "blue.500" }}
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
