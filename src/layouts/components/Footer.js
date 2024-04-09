import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className='footer'>
            <Row>
                <Col
                    md='6'
                    className='footer-copywright'
                    style={{ textAlign: 'left!important', paddingLeft: 100 }}
                >
                    <h3 style={{ display: 'inline-block' }}>Copyright © {year}</h3>
                </Col>
                <Col
                    md='6'
                    className='footer-body'
                    style={{ textAlign: 'right!important', paddingRight: 100 }}
                >
                    <ul className='footer-icons' style={{ display: 'inline-block' }}>
                        <li className='social-icons'>
                            <a
                                href='https://github.com/soumyajit4419'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub fontSize={20} />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://twitter.com/Soumyajit4419'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineTwitter fontSize={20} />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://www.linkedin.com/in/soumyajit4419/'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaLinkedinIn fontSize={20} />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://www.instagram.com/soumyajit4419'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillInstagram fontSize={20} />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
