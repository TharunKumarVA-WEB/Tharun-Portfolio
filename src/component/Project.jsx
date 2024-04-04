
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sandesh from '../assets/project/FlightWebApp.png';
import Gist from '../assets/project/Googlelogin.png';
import Chatbot from '../assets/project/ReactCRUD.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const projects = [
    {
      id: 1,
      src: Sandesh,
      desc: "Efficiently manage employee flight bookings with a React frontend, powered by Node.js backend for seamless data handling, and MongoDB for robust database storage. Bootstrap ensures a sleek and responsive design, enhancing user experience.",
      demo: "https://main--successonflys.netlify.app/",
      code: "https://github.com/TharunKumarVA-WEB/successonfly_frontend"
    },
    {
      id: 2,
      src: Gist,
      desc: "Implemented Google Authentication in React frontend and Node.js backend for secure user login. Utilized Google Client ID to uniquely identify the application for authentication purposes. Ensured robust security and seamless user experience with this integration.",
      demo: "",
      code: ""
    },
    {
      id: 3,
      src: Chatbot,
      desc: "Developed a React CRUD application for managing employee details, enabling Create, Read, Update, and Delete operations seamlessly. Users can efficiently add, view, edit, and remove employee information through an intuitive user interface",
      demo: "https://react-crud-app-demo.netlify.app/",
      code: "https://github.com/TharunKumarVA-WEB/React-CRUD"
    }
  ];

  return (
    <div name="projects" className="h-auto max-h-screen-lg  bg-dark text-white">
      <div className="container p-4 mx-auto">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 fs-2">Projects</h2>
          <p className="py-6 fs-3">Check out some of my work</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-20">
          {projects.map(({ id, src, desc, demo, code }) => (
            <div key={id} className="col mb-4">
              <div data-aos="fade-in" data-aos-duration="500" className="card shadow h-100">
                <img src={src} alt="Ai" className="card-img-top rounded-md duration-200 hover:scale-105" />
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-justify font-extralight flex-grow-1 overflow-hidden">{desc}</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary m-2">
                      <a href={demo} className="text-white text-decoration-none">Demo</a>
                    </button>
                    <button className="btn btn-secondary m-2">
                      <a href={code} className="text-white text-decoration-none">Code</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
