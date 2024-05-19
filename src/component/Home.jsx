


// import React, { useEffect } from 'react';
// import Dp from "../assets/TharunPIC.png";
// import { MdOutlineArrowRightAlt } from 'react-icons/md';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../Style.css';
// import { Link } from 'react-scroll';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsLinkedin, BsGithub } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//     useEffect(()=> {
//         AOS.init({duration: 100});
//     }, []);

//     return (
//         <div name="home" className='container-fluid py-5 bg-dark text-white'>
//             <div className='container-md'>
//                 <div className='row align-items-center justify-content-center'>
//                     <div className='col-md-6 text-center text-md-start'>
//                         <img src={Dp} alt="my profile" className='mt-5 rounded-circle img-fluid w-50 w-md-25 my-md-5 hover-scale-105 duration-300 ease-in' />
//                     </div>
//                     <div className='col-md-6 text-center text-md-start'>
//                         <h2 className='display-4 text-lg-md'>TharunKumar | <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-weight-bold'>Full-Stack Developer</span></h2>

//                         <p className='lead py-4'>
//                         As a highly motivated individual who has successfully transitioned into a Full Stack Developer specializing in the MERN stack, I am confident in my ability to leverage my React and Node.js skills to make significant contributions to projects. I am committed to continuously enhancing my expertise in full stack development and delivering impactful results. 
//                         </p>
//                         <div className='d-flex gap-2'>
//                             <Link to="projects" smooth duration={500} className='btn btn-primary rounded-pill flex-shrink-0'>Portfolio
//                                 <span className='px-2 group-hover:rotate-90 duration-300'>
//                                     <MdOutlineArrowRightAlt size={25} />
//                                 </span>
//                             </Link>
//                             <a target='_blank' rel="noreferrer"  href="tharunkumarva@gmail.com" smooth duration={500} className='btn btn-primary rounded-pill'>Hire Me
//                                 <span className='px-2'>
//                                     <HiOutlineMail size={25} />
//                                 </span>
//                             </a>
//                             <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/tharun-kumar-v-a-499655210/" smooth duration={550} className='btn btn-primary rounded-pill'>
//                                 <BsLinkedin size={25}></BsLinkedin>
//                             </a>
//                             <a target='_blank' rel="noreferrer" href="https://github.com/TharunKumarVA-WEB" smooth duration={600} className='btn btn-primary rounded-pill'>
//                                 <BsGithub size={25}></BsGithub>
//                             </a>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React, { useEffect } from 'react';
import Dp from "../assets/TharunPIC.png";
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Style.css';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 100});
    }, []);

    return (
        <div name="home" className='container-fluid py-5 bg-dark text-white'>
            <div className='container-md'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-md-6 text-center text-md-start'>
                        <img src={Dp} alt="my profile" className='mt-5 rounded-circle img-fluid w-50 w-md-25 my-md-5 hover-scale-105 duration-300 ease-in' />
                    </div>
                    <div className='col-md-6 text-center text-md-start'>
                        <h2 className='display-4 text-lg-md'>TharunKumar | <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-weight-bold'>Full-Stack Developer</span></h2>

                        <p className='lead py-4'>
                        As a highly motivated individual who has successfully transitioned into a Full Stack Developer specializing in the MERN stack, I am confident in my ability to leverage my React and Node.js skills to make significant contributions to projects. I am committed to continuously enhancing my expertise in full stack development and delivering impactful results. 
                        </p>
                        <div className='d-flex gap-2'>
                            <Link to="projects" smooth duration={500} className='btn btn-primary rounded-pill flex-shrink-0'>Portfolio
                                <span className='px-2 group-hover:rotate-90 duration-300'>
                                    <MdOutlineArrowRightAlt size={25} />
                                </span>
                            </Link>
                            <a target='_blank' rel="noreferrer"  href="mailto:tharunkumarva@gmail.com" className='btn btn-primary rounded-pill'>Hire Me
                                <span className='px-2'>
                                    <HiOutlineMail size={25} />
                                </span>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/tharun-kumar-v-a-499655210/" className='btn btn-primary rounded-pill'>
                                <BsLinkedin size={25}></BsLinkedin>
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/TharunKumarVA-WEB" className='btn btn-primary rounded-pill'>
                                <BsGithub size={25}></BsGithub>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
