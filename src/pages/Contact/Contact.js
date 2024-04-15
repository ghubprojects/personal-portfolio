import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { IoSend } from 'react-icons/io5';

import Form from 'react-bootstrap/Form';
import { Particle } from '../../layouts/components';

function Contact() {
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container fluid style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Row style={{ width: '100%' }}>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className='purple'>connect </span>with me
                        </p>
                    </Col>
                </Row>

                <Row style={{ width: 600, height: 320, margin: '48px auto', zIndex: 100 }}>
                    <Form>
                        <div style={{ textAlign: 'left' }}>
                            <Form.Group controlId='formGroupEmail' style={{ marginBottom: 16 }}>
                                <Form.Label style={{ color: '#f4f4f4' }}>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    value='bichngoc220305@gmail.com'
                                    style={{ cursor: 'text' }}
                                />
                            </Form.Group>
                            <Form.Group
                                controlId='formGroupPassword'
                                style={{ marginBottom: 16, marginTop: 12 }}
                            >
                                <Form.Label style={{ color: '#f4f4f4' }}>Phone number</Form.Label>
                                <Form.Control type='text' value='0984 562 541' />
                            </Form.Group>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <Button
                                variant='primary'
                                href='mailto:bichngoc220305@gmail.com'
                                target='_blank'
                                style={{
                                    marginBottom: 16,
                                    marginTop: 12,
                                    width: 160,
                                    display: 'inline-block',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <IoSend style={{ marginRight: 12 }} />
                                <span>Send Email</span>
                            </Button>
                        </div>
                    </Form>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
