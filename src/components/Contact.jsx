/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, FormLabel, Input, Textarea, SimpleGrid, useToast, Text, Toast } from '@chakra-ui/react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ibeqc0l', 'template_3i2imb7', form.current, {
                publicKey: 'L66TonavHEzFyxE4F',
            })
            .then(
                () => {
                    toast.success('Email sent')


                },
                (error) => {
                    toast.error('Error While send email')

                },
            );
    };



    return (
        <Box
            position={'relative'}
            top={{
                lg: "3000px",
                base: "3650px",
                sm: "3650px"
            }}
            maxW="800px"
            mx="auto"
            p={6}

        >
            <form id='contact' ref={form} onSubmit={sendEmail}>
                <Box color={'teal.500'} textAlign={'center'}>
                    <Text fontWeight={'bold'} fontSize={['40', '50', '55']}>Get in Touch</Text>
                </Box>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                    <FormControl id="name" isRequired>
                        <FormLabel color="white">Name</FormLabel>
                        <Input
                            name='user_name'
                            placeholder="Your name"
                            color="white"
                            borderColor="white"
                            _placeholder={{ color: 'gray.300' }}
                            _focus={{ borderColor: 'teal.500' }}
                        />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel color="white">Email</FormLabel>
                        <Input
                            name='email'
                            type="email"
                            placeholder="Your email"
                            color="white"
                            borderColor="white"
                            _placeholder={{ color: 'gray.300' }}
                            _focus={{ borderColor: 'teal.500' }}
                        />
                    </FormControl>
                </SimpleGrid>
                <FormControl id="message" isRequired mt={4}>
                    <FormLabel color="white">Message</FormLabel>
                    <Textarea
                        name='message'
                        placeholder="Your message"
                        color="white"
                        borderColor="white"
                        _placeholder={{ color: 'gray.300' }}
                        _focus={{ borderColor: 'teal.500' }}
                    />
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full" mt={4}>
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
