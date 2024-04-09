import { Col, Container, Row } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import images from '../../assets/images';
import { Particle } from '../../layouts/components';

function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Particle />
                <Container className='home-content'>
                    <Row>
                        <Col md={6} className='home-header'>
                            <h1 style={{ paddingTop: 16, paddingBottom: 16 }} className='heading'>
                                Hi There!
                                <span className='wave' role='img' aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className='heading-name'>
                                I'M <strong className='main-name'> LE BICH NGOC</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Typewriter
                                    options={{
                                        strings: ['English Teacher', 'English Assistant'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col md={6}>
                            <img
                                src={images.homeMain}
                                alt='home pic'
                                className='img-fluid'
                                style={{ width: '90%', borderRadius: '24px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='home-about-section' id='about'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col md={8} className='home-about-description'>
                            <h1 style={{ fontSize: '2.6em' }}>
                                LET ME <span className='purple'> INTRODUCE </span> MYSELF
                            </h1>
                            {/* <p className='home-about-body'>
                                I fell in love with teaching and I have at least learnt something, I
                                think… 🤷‍♂️
                                <br />
                                <br />I am fluent in classics like
                                <i>
                                    <b className='purple'> C++, Javascript and Go. </b>
                                </i>
                                <br />
                                <br />
                                My field of Interest's are building new &nbsp;{' '}
                                <i>
                                    {' '}
                                    <b className='purple'>Web Technologies and Products </b> and also in
                                    areas related to <b className='purple'>Blockchain.</b>
                                </i>
                                <br />
                                <br />
                                Whenever possible, I also apply my passion for developing products with{' '}
                                <b className='purple'>Node.js</b> and{' '}
                                <i>
                                    {' '}
                                    <b className='purple'> Modern Javascript Library and Frameworks</b>
                                </i>
                                &nbsp; like{' '}
                                <i>
                                    {' '}
                                    <b className='purple'> React.js and Next.js</b>
                                </i>
                            </p> */}
                            <p className='home-about-body'>
                                If I should characterize myself with three words only, I would pick
                                <b className='purple'> enthusiasm</b>, <b className='purple'>studious</b>
                                , and <b className='purple'>commitment</b>. That’s true about both my
                                personal life and teaching 😊.
                                <br />
                                <br /> I fall in love with teaching, and feel a big responsibility as
                                someone who’s supposed to be not only a{' '}
                                <b className='purple'>skilled teacher</b>, but also{' '}
                                <b className='purple'>a good role model for my pupils</b>.
                                <br />
                                <br /> I also firmly believe that <b className='purple'>education</b> is
                                a <b className='purple'>good way</b> to{' '}
                                <b className='purple'>make the world better</b>. This is the reason why I
                                am always trying to enhance my English skills 😎😎😎.
                            </p>
                        </Col>
                        <Col md={4} className='myAvtar'>
                            <Tilt>
                                <img
                                    src={images.avatar}
                                    className='img-fluid'
                                    alt='avatar'
                                    style={{ width: '100%', borderRadius: '24px' }}
                                />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
