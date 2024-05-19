

import React, { useEffect } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Style.css';

import resume from '../assets/TharunResume.pdf'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name="about" className='w-full h-auto bg-dark text-white'>
            <Container fluid className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <Row className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
                </Row>

                <Row>
                    <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    Hi, my name is Tharun. I graduated with a bachelor's degree in Civil Engineering from Thanthai Periyar Government Institute of Technology, Vellore. My passion for programming inspired me to confidently shift my career from civil engineering to software engineering. Despite the challenges, my adaptability and desire to explore the critical role of the software industry have driven my determination.
                    </p>
                </Row>
                <Row>
                    <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                  
Recognizing that my civil engineering background wasn't enough, I embraced the challenge and completed several projects to enhance my skills, focusing on the MERN stack. One notable project was a "Flight Booking App," where I utilized React.js for the frontend, Node.js for the backend, Bootstrap for styling, and MongoDB for secure user data storage. This hands-on experience has equipped me with the skills to make a significant impact in the software industry.
                    </p>
                </Row>
                <Row className='mb-20'>
                   

                    <Button
    variant="primary"
    className='fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/3 md:w-1/3 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'
    style={{ maxWidth: '300px' }}
    data-aos="zoom-in"
    data-aos-duration="500">
    <AiOutlineCloudDownload />
    <a href= {resume} download className="text-white">Download CV</a>
</Button>

                </Row>
            </Container>
        </div>
    );
}

export default About;


