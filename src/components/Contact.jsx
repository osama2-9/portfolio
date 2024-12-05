/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, FormLabel, Input, Textarea, SimpleGrid, useToast, Text, FormErrorMessage, FormHelperText, Spinner } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [inputs, setInputs] = useState({
        user_name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const form = useRef();

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
            [e.target.name]: e.target.value
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
        emailjs.sendForm('service_ysgst67', 'template_3i2imb7', form.current, 'L66TonavHEzFyxE4F')
            .then(
                () => {
                    toast({
                        title: 'Email sent.',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    setIsSubmitting(false);
                    setInputs({ user_name: "", email: "", message: "" });
                },
                (error) => {
                    toast({
                        title: 'Error while sending email.',
                        description: error.text,
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                    });
                    setIsSubmitting(false);
                }
            );
    };

    let word = "We'll"

    return (
        <Box
            position={'relative'}
            top={{
                lg: "3000px",
                base: "3700px",
                sm: "3700px"
            }}
            maxW="800px"
            mx="auto"
            p={6}
        >
            <form id='contact' ref={form} onSubmit={sendEmail}>
                <Box color={'blue.500'} textAlign={'center'}>
                    <Text fontWeight={'bold'} mb={3} fontSize={['40px', '50px', '55px']}>Get in Touch</Text>
                </Box>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                    <FormControl id="name" isInvalid={errors.user_name} isRequired>
                        <FormLabel color="black">Name</FormLabel>
                        <Input
                            name='user_name'
                            placeholder="Your name"
                            color="black"
                            borderColor="black"
                            _placeholder={{ color: 'gray.500' }}
                            onChange={onInputsChange}
                            value={inputs.user_name}
                        />
                        {errors.user_name ? (
                            <FormErrorMessage>{errors.user_name}</FormErrorMessage>
                        ) : (
                            <FormHelperText>Enter your full name.</FormHelperText>
                        )}
                    </FormControl>
                    <FormControl id="email" isInvalid={errors.email} isRequired>
                        <FormLabel color="black">Email</FormLabel>
                        <Input
                            name='email'
                            type="email"
                            placeholder="Your email"
                            color="black"
                            borderColor="black"
                            _placeholder={{ color: 'gray.500' }}
                            onChange={onInputsChange}
                            value={inputs.email}
                        />
                        {errors.email ? (
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        ) : (
                            <FormHelperText>{word} never share your email.</FormHelperText>
                        )}
                    </FormControl>
                </SimpleGrid>
                <FormControl id="message" isInvalid={errors.message} isRequired mt={4}>
                    <FormLabel color="black">Message</FormLabel>
                    <Textarea

                        name='message'
                        placeholder="Your message"
                        mb={3}
                        color="black"
                        borderColor="black"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={onInputsChange}
                        value={inputs.message}
                    />
                    {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="blue"
                    width="full"
                    mt={4}
                    isLoading={isSubmitting}
                    loadingText="Sending"
                    isDisabled={isSubmitting}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
