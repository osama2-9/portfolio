import { useState } from 'react';
import { Box, SimpleGrid, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text } from "@chakra-ui/react";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imagesToShow, setImagesToShow] = useState([]);

    const imageGroups = {
        ecommerce: [
            "/e1.png",
            "/e2.png",
            "/e3.png",
            "/e4.png",
            "/e5.png",
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
            "/e18.png",
            "/e19.png",
            "/e20.png"
        ],
        threadsClone: [
            "/t1.png",
            "/t2.png",
            "/t3.png",
            "/t4.png"
        ],
        learn: [
            "/learn.png"
        ]
    };

    const openModal = (images) => {
        setImagesToShow(images);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Box mt={{
            base: "450px",
            md: "200px"
        }} p={2} w={'100%'} position={'absolute'} top={'2500px'}>
            <Box mb={8}>
                <Text mb={5} textAlign={'center'} color={'teal.500'} fontWeight={'bold'} fontSize={["40px", "50px", "55px"]}>Some Projects</Text>
                <Text fontWeight={'300'} fontSize={'20'} color={'white'} textAlign={'center'}>Heres some of my projects  </Text>
            </Box>
            <SimpleGrid mt={20} columns={[1, null, 3]} spacing={6}>

                <Box

                    p={4}
                    rounded="md"
                    boxShadow="lg"
                    bg="white"
                    sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer'
                    }}
                    textAlign="center"
                    onClick={() => openModal(imageGroups.ecommerce)}
                    cursor="pointer"
                >
                    <Text bg={'transparent'} fontSize={['md', 'lg', 'xl']} fontWeight="bold" color="white" mb={2}>E-commerce Project</Text>
                    <Image rounded="md" src={imageGroups.ecommerce[0]} alt="E-commerce Project" />
                </Box>


                <Box
                    p={4}
                    rounded="md"
                    boxShadow="lg"
                    bg="white"
                    sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer'
                    }}
                    textAlign="center"
                    onClick={() => openModal(imageGroups.threadsClone)}
                    cursor="pointer"
                >
                    <Text bg={'transparent'} fontSize={['md', 'lg', 'xl']} fontWeight="bold" color="white" mb={2}>Threads Clone Project</Text>
                    <Image rounded="md" src={imageGroups.threadsClone[1]} alt="Threads Clone Project" />
                </Box>


                <Box
                    p={4}
                    rounded="md"
                    boxShadow="lg"
                    bg="white"
                    sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer'
                    }}
                    textAlign="center"
                    onClick={() => openModal(imageGroups.learn)}
                    cursor="pointer"
                >
                    <Text bg={'transparent'} fontSize={['md', 'lg', 'xl']} fontWeight="bold" color="white" mb={2}>Learn Project</Text>
                    <Image rounded="md" src={imageGroups.learn[0]} alt="Learn Project" />
                </Box>
            </SimpleGrid>


            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color={'white'}>Project Images</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={[2, null, 4]} spacing={4}>
                            {imagesToShow.map((image, index) => (
                                <Image key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </SimpleGrid>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Projects;
