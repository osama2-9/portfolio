/* eslint-disable react/prop-types */
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";




const Services = () => {
  

    return (
        <>
            <Flex id="services" p={2} flexDirection={'column'} alignItems={'center'} color={'white'} top={'2200px'} position={'absolute'}>
                <Box textAlign={'center'} mb={8}>
                    <Text fontSize={["40px", "50px", "55px"]} fontWeight="bold" className="text-blue-500">Services</Text>
                </Box>
                <SimpleGrid mt={20} columns={[1, null, 3]} spacing={10}>
                    
                  
                    <Box
                        p={6}
                        rounded="md"
                        boxShadow="lg"
                        sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <Text className="text-blue-500" bg={'transparent'} fontSize="2xl" fontWeight="bold">Frontend Development</Text>
                        <Text color={'black'} bg={'transparent'} mt={4}>
                            Building responsive and visually appealing user interfaces using modern frontend technologies like React, React + Vite.
                        </Text>
                    </Box>

                    <Box
                        p={6}
                        rounded="md"
                        boxShadow="lg"
                        sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <Text className="text-blue-500" bg={'transparent'} fontSize="2xl" fontWeight="bold">Backend Development</Text>
                        <Text color={'black'} bg={'transparent'} mt={4}>
                            Crafting robust and scalable server-side applications with Node.js, Express, and other backend technologies to ensure smooth data flow and integration.
                        </Text>
                    </Box>

                    <Box
                        p={6}
                        rounded="md"
                        boxShadow="lg"
                        sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <Text className="text-blue-500" bg={'transparent'} fontSize="2xl" fontWeight="bold">Fullstack Development</Text>
                        <Text bg={'transparent'} color={'black'} mt={4}>
                            Offering end-to-end solutions by combining frontend and backend expertise to deliver complete and efficient web applications.
                        </Text>
                    </Box>
                </SimpleGrid>


            </Flex>
            
        </>
    );
};

export default Services;
