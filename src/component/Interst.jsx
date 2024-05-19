import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Interst = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const interests = [
    {
      id: 1,
      title: "Innovation and Creativity",
      desc: "Driven by a desire to innovate and create unique software solutions that can make a positive impact."
    },
    {
      id: 2,
      title: "Web Development",
      desc: "Enjoy designing and developing user-friendly, responsive web applications that provide a seamless user experience."
    },
    {
      id: 3,
      title: "Problem Solving",
      desc: "Enthusiastic about tackling complex problems and finding innovative solutions through programming and software engineering."
    },
    {
      id: 4,
      title: "Continuous Learning",
      desc: "Committed to lifelong learning and staying updated with the latest advancements in technology, including new programming languages, frameworks, and tools."
    }
  ];

  return (
    <div name="interests" className="h-auto max-h-screen-lg bg-dark text-white py-5">
      <div className="container p-4 mx-auto">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-400 fs-2">Interests</h2>
          <p className="py-6 fs-3">A few things I'm passionate about</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mb-20">
          {interests.map(({ id, title, desc }) => (
            <div key={id} className="col mb-4">
              <div data-aos="fade-in" data-aos-duration="500" className="card shadow h-100 bg-light text-dark">
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{title}</h5>
                  <p className="card-text text-justify font-extralight">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interst;
