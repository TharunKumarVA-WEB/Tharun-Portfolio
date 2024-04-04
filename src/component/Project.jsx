// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Sandesh from '../assets/project/FlightWebApp.png';
// import Gist from '../assets/project/Googlelogin.png';
// import Chatbot from '../assets/project/ReactCRUD.png';
// // import Ide from '../assets/projects/ide.png';
// // import ShopEasy from '../assets/projects/shopeasy.png';
// // import Upscale from '../assets/projects/upscale.png';

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   });

//   const projects = [
//     {
//       id: 1,
//       src: Sandesh,
//       desc: "Sandesh is a Chat App made using ReactJS + Tailwind CSS + ChatEngine API Service + Firebase authentication...",
//       demo: "https://sandeshh.netlify.app/",
//       code: "https://github.com/dipayansarkar47/Sandesh"
//     },
//     {
//       id: 2,
//       src: Gist,
//       desc: "This Full-Stack ShopKaro e-commerce website is made using ReactJS, Tailwind CSS, Firebase....",
//       demo: "https://shopeasyy.vercel.app/",
//       code: "https://github.com/dipayansarkar47/shopeasy"
//     },
//     {
//       id: 3,
//       src: Chatbot,
//       desc: "An Artificially Intelligent Chatbot using the GPT-4 Model to help people.",
//       demo: "https://cwbbot.vercel.app/",
//       code: "https://github.com/dipayansarkar47/ai-chatbot"
//     },
//     // {
//     //   id: 4,
//     //   src: Ide,
//     //   demo: "https://opeditor.vercel.app/",
//     //   code: "https://github.com/dipayansarkar47/online-code-editor"
//     // },
//     // {
//     //   id: 5,
//     //   src: Upscale,
//     //   demo: "https://upscaleai.vercel.app/",
//     //   code: "https://github.com/dipayansarkar47/upscale-ai"
//     // },
//     // {
//     //   id: 6,
//     //   src: Gist,
//     //   demo: "https://gist-ai.vercel.app/",
//     //   code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
//     // },
//   ];

//   return (
//     <div name="projects" className="h-auto max-h-screen-lg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
//       <div className="container p-4 mx-auto">
//         <div className="pb-8">
//           <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">Projects</h2>
//           <p className="py-6">Check out some of my work</p>
//         </div>
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-20">
//           {projects.map(({ id, src, desc, demo, code }) => (
//             <div data-aos="fade-in" data-aos-duration="500" key={id} className="col mb-4">
//               <div className="card shadow">
//                 <img src={src} alt="Ai" className="card-img-top rounded-md duration-200 hover:scale-105" />
//                 <div className="card-body">
//                   <p className="card-text text-justify font-extralight">{desc}</p>
//                   <div className="d-flex justify-content-center">
//                     <button className="btn btn-primary m-2">
//                       <a href={demo} className="text-white text-decoration-none">Demo</a>
//                     </button>
//                     <button className="btn btn-secondary m-2">
//                       <a href={code} className="text-white text-decoration-none">Code</a>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



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
