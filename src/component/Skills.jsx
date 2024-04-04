

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import javascript from '../assets/skills/javascript.png';
import node from '../assets/skills/node.png';
import react from '../assets/skills/react.png';
import github from '../assets/skills/github.png';
import mongodb from '../assets/skills/MongoDB.png';
import bootstrap from '../assets/skills/Bootstrap.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const techs = [
        {
            id: 1,
            scr: html,
            title: 'HTML',
            style: 'border-orange'
        },
        {
            id: 2,
            scr: css,
            title: 'CSS',
            style: 'border-blue'
        },
        {
            id: 3,
            scr: javascript,
            title: 'JavaScript',
            style: 'border-yellow'
        },
        {
            id: 4,
            scr: react,
            title: 'React',
            style: 'border-blue'
        },
        {
            id: 5,
            scr: bootstrap,
            title: 'Bootstrap',
            style: 'border-sky'
        },
        {
            id: 6,
            scr: node,
            title: 'Node.js',
            style: 'border-green'
        },
        {
            id: 7,
            scr: github,
            title: 'GitHub',
            style: 'border-cyan'
        },
        {
            id: 8,
            scr: mongodb,
            title: 'MongoDB',
            style: 'border-yellow'
        }
    ];

    return (
        <div name="skills" className='bg-dark text-white'>
            <div className='container py-8'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-400 fs-2'>Skills</p>
                    <p className='py-6 fs-3'>These are the technologies I've worked with</p>
                </div>

                <div className='row row-cols-2 row-cols-sm-3 g-4'>
                    {techs.map(({ id, scr, title, style }) => (
                        <div key={id} data-aos="zoom-in" data-aos-duration="500" className={`col shadow-sm ${style} rounded-lg text-center p-3`}>
                            <img src={scr} alt="" className='img-fluid' style={{ maxWidth: '80px' }} />
                            <p className='mt-3'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

