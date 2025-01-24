/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
  useToast,
  Text,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Container,
  Icon,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactInfo = ({ icon, text, href }) => (
  <Link href={href} isExternal _hover={{ textDecoration: "none" }}>
    <HStack
      spacing={3}
      p={4}
      bg="white"
      rounded="lg"
      shadow="md"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-2px)",
        shadow: "lg",
        color: "blue.500",
      }}
    >
      <Icon as={icon} w={5} h={5} />
      <Text>{text}</Text>
    </HStack>
  </Link>
);

const Contact = () => {
  const [inputs, setInputs] = useState({
    user_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const form = useRef();
  const formRef = useRef(null);

  const validateInputs = () => {
    const errors = {};
    if (!inputs.user_name) errors.user_name = "Name is required";
    if (!inputs.email) errors.email = "Email is required";
    if (!inputs.message) errors.message = "Message is required";
    return errors;
  };

  const onInputsChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_ysgst67",
        "template_3i2imb7",
        form.current,
        "L66TonavHEzFyxE4F"
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description: "I'll get back to you as soon as possible.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
          setInputs({ user_name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error sending message.",
            description: error.text,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Box
      id="contact"
      position="relative"
      top={{
        base: "0",
        sm: "0",
        lg: "0",
      }}
      bg="gray.50"
      py={20}
      ref={formRef}
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
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
              Get in Touch
            </Text>
            <Text color="gray.600" fontSize="lg" maxW="600px">
              Have a question or want to work together? Feel free to reach out!
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            <ContactInfo
              icon={FaGithub}
              text="GitHub"
              href="https://github.com/osama2-9"
            />
            <ContactInfo
              icon={FaLinkedin}
              text="LinkedIn"
              href="https://www.linkedin.com/in/osama-alsrraj/"
            />
            <ContactInfo
              icon={FaEnvelope}
              text="osamaalsrraj3@gmail.com"
              href="mailto:osamaalsrraj3@gmail.com"
            />
          </SimpleGrid>

          <Box
            bg="white"
            p={8}
            rounded="xl"
            shadow="lg"
            w="full"
            maxW="800px"
            mx="auto"
          >
            <form ref={form} onSubmit={sendEmail}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl isInvalid={errors.user_name} isRequired>
                  <FormLabel color="gray.700">Name</FormLabel>
                  <Input
                    name="user_name"
                    placeholder="Your name"
                    bg="gray.50"
                    border="none"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      bg: "white",
                      shadow: "outline",
                    }}
                    onChange={onInputsChange}
                    value={inputs.user_name}
                  />
                  {errors.user_name ? (
                    <FormErrorMessage>{errors.user_name}</FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your full name</FormHelperText>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.email} isRequired>
                  <FormLabel color="gray.700">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    bg="gray.50"
                    border="none"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      bg: "white",
                      shadow: "outline",
                    }}
                    onChange={onInputsChange}
                    value={inputs.email}
                  />
                  {errors.email ? (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      We'll never share your email
                    </FormHelperText>
                  )}
                </FormControl>
              </SimpleGrid>

              <FormControl mt={6} isInvalid={errors.message} isRequired>
                <FormLabel color="gray.700">Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  bg="gray.50"
                  border="none"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    bg: "white",
                    shadow: "outline",
                  }}
                  rows={6}
                  onChange={onInputsChange}
                  value={inputs.message}
                />
                {errors.message && (
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                )}
              </FormControl>

              <Button
                mt={8}
                colorScheme="blue"
                size="lg"
                w="full"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Sending"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
              >
                Send Message
              </Button>
            </form>
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

export default Contact;
