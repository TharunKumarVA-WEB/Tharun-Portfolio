
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const link = [
        { id: 1, link: 'home' }, // Adjusted to match section IDs
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'interests' } 
    ];

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="px-4">
            <Navbar.Brand className='fs-1' href="#home">TharunKumar V A</Navbar.Brand>
            <div className="ml-auto"> {/* Align items to the right */}
                <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-60'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end fs-5">
                <Nav className="mr-auto">
                    {link.map(({ id, link }) => (
                        <Nav.Link key={id}>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                                className="nav-link"
                            >
                                {link}
                            </Link>
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
            {nav && (
                <ul className='flex z-50 flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200'>
                    <Link smooth={true} duration={500} spy={true} exact='true' offset={-80} className='absolute m-6 top-0 right-0 cursor-pointer' onClick={() => setNav(!nav)} to="home">
                        <FaTimes size={30} />
                    </Link>
                    {link.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </Navbar>
    );
};

export default NavBar;
