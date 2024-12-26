import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      id="contact"
      color="white"
      position="relative"
      top={{
        lg: "3200px",
        base: "3800px",
        sm: "3800px",
      }}
      width="100%"
      bg="blue.500"
      py={6}
      px={4}
    >
      <Flex
        bg={"transparent"}
        flexDirection={{ sm: "column", base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Flex
          gap={4}
          bg={"transparent"}
          flexDirection={{ sm: "column", base: "column", md: "row" }}
          justify={{ base: "center", md: "flex-start" }}
          wrap="wrap"
          mb={{ base: 4, md: 0 }}
        >
          <Link href="https://github.com/osama2-9" isExternal mx={2}>
            <Flex bg={"transparent"} align="center">
              <Icon as={FaGithub} w={6} h={6} mr={1} />
              <Text bg={"transparent"}>GitHub</Text>
            </Flex>
          </Link>

          <Link href="mailto:osamaalsrraj3@gmail.com" mx={2}>
            <Flex bg={"transparent"} align="center">
              <Icon as={FaEnvelope} w={6} h={6} mr={1} />
              <Text bg={"transparent"}>osamaalsrraj3@gmail.com</Text>
            </Flex>
          </Link>

          <Flex bg={"transparent"} align="center" mx={2}>
            <Icon bg={"transparent"} as={FaPhone} w={6} h={6} mr={1} />
            <Text bg={"transparent"}>+20 01040661625</Text>
          </Flex>
        </Flex>
        <Text
          bg={"transparent"}
          fontSize="sm"
          color="white"
          textAlign={{ base: "center", md: "right" }}
        >
          &copy; {new Date().getFullYear()} Osama Alsrraj. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
