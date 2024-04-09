import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { CgFileDocument } from 'react-icons/cg';
import { BsChatDots } from 'react-icons/bs';
import { route } from '../../routes/routes';

function NavBar() {
    const navItems = [
        { title: 'Home', href: route.home, icon: AiOutlineHome },
        { title: 'About', href: route.about, icon: AiOutlineUser },
        { title: 'Activities', href: route.activities, icon: AiOutlineFundProjectionScreen },
        { title: 'Resume', href: route.resume, icon: CgFileDocument },
        { title: 'Contact', href: route.contact, icon: BsChatDots },
    ];

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener('scroll', scrollHandler);

    return (
        <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? 'sticky' : 'navbar'}>
            <Container>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpanded(expand ? false : 'expanded');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto' defaultActiveKey='#home'>
                        {navItems.map((item, key) => (
                            <Nav.Item key={key}>
                                <Nav.Link as={Link} to={item.href} onClick={() => updateExpanded(false)}>
                                    <item.icon fontSize={22} style={{ marginBottom: '2px' }} />{' '}
                                    {item.title}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
