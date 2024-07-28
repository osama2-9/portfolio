// Aboutme.jsx

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import cssImage from "/css-3.png";
import htmlImage from "/html-5.png";
import jsImage from "/js.png";
import reactImage from "/react.png";
import expressImage from "/express.png";
import nodeImage from "/node.png";
import mongoImage from "/mongo.png";
import mysqlImage from "/mysql.png";
import bootstrapImage from "/boot.png";
import tailwindImage from "/tailwind.svg";

const Aboutme = () => {
  const technologies = [
    { image: cssImage, name: "CSS" },
    { image: htmlImage, name: "HTML" },
    { image: jsImage, name: "JavaScript" },
    { image: reactImage, name: "React.js" },
    { image: expressImage, name: "Express.js" },
    { image: nodeImage, name: "Node.js" },
    { image: mongoImage, name: "MongoDB" },
    { image: mysqlImage, name: "MySQL" },
    { image: bootstrapImage, name: "Bootstrap" },
    { image: tailwindImage, name: "Tailwind CSS" },
  ];

  return (
    <Flex
      id="about"
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      w="100%"
      p={4}
      position={'absolute'}
      top={700}

    >
      <Box mb={8}>
        <Text
          fontSize={["40px", "50px", "55px"]}
          fontWeight="bold"
          className="text-teal-500"
        >
          About me
        </Text>
      </Box>
      <Text color="white" fontSize={["lg", "xl", "2xl"]} lineHeight={1.8} maxW="900px" mb={8}>
        I was born in Gaza and educated in its schools. Later, I joined the Islamic University in
        the Faculty of Information Technology, majoring in software development. I am a skilled
        MERN Stack developer with experience in front-end and back-end development, building
        scalable web applications. I primarily use React.js for front-end development, and Express.js
        and Node.js for back-end development, with MongoDB for data storage. I am proficient in both
        front-end and back-end technologies.
      </Text>

      <Box w="100%">
        <Text
          fontSize={["xl", "2xl", "2xl"]}
          fontWeight="bold"
          className="text-teal-500"
          mb={4}
        >
          Technologies I Use
        </Text>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 50,
            }
          }}
          className="carousel-container"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <Box height={'200px'} p={4} textAlign="center">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  w={["60px", "80px", "100px"]}
                  h={["60px", "80px", "100px"]}
                  mx="auto"
                />
                <Text color="white" fontWeight={300} mt={2} className="legend" fontSize="lg">
                  {tech.name}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box mt={30}>
          <Box bg={'transparent'} color={'white'} position={'relative'} top={'250'} fontSize={['25', '40', '50']} fontWeight={'bolder'} zIndex={10}>
            <Text mb={4} bg={'transparent'}>Have a Project ?</Text>
            <a href="#contact">

              <Button bg={'teal.500'} color={'white'}>Contact me</Button>
            </a>

          </Box>
          <Image rounded={'lg'} src="/programming.jpg" h={'400px'} width={'full'} opacity={.3} />

        </Box>
      </Box>
    </Flex>
  );
};

export default Aboutme;
