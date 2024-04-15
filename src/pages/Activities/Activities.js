import { Col, Container, Row } from 'react-bootstrap';

import images from '../../assets/images';
import { Particle } from '../../layouts/components';
import ActivityCard from './ActivityCards';

const activities = [
    {
        imgPath: images.vietnamTutor,
        title: 'Gia su Viet',
        position: 'Personal Tutor',
        description: `I provided one-on-one English tutoring to a secondary student. I created customized lesson 
        plans focused on grammar, pronunciation, and speaking skills. I regularly assessed progress, 
        provided feedback, and adapted teaching strategies, encouraging a confident and passionate 
        approach to language learning.`,
    },
    {
        imgPath: images.englishCenter,
        title: 'Tony English',
        position: 'English Trainer',
        description: `I have taught engaging lessons to students aged 6-12, creating an energetic learning 
        environment. I developed tailored lesson plans focusing on grammar, pronunciation, speaking, 
        and listening skills, incorporating interactive activities, games, and multimedia resources. 
        Assessing progress regularly, I provided feedback and adapted teaching methodologies to meet 
        individual needs while nurturing students' confidence and passion for language learning.`,
    },
    {
        imgPath: images.vafProject,
        title: 'Vietnam and Friends - OWOL',
        position: 'Teaching Assistant',
        description: `I supported English classes for children with visual impairments. I also participated in 
        extracurricular activities organized by VAF, and helped out with various tasks in the office, such 
        as printing braille books, developing communication plans, event planning, and leading project 
        events. Through this experience, I learned many skills, such as attention to detail, carefulness, 
        organizational thinking, logical thinking, and problem-solving skills.`,
    },
];

function Activities() {
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Works </strong>
                </h1>
                <p style={{ color: '#f4f4f4' }}>Here are a few activities I've worked on recently.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {activities.map((item) => (
                        <Col md={4} className='project-card'>
                            <ActivityCard
                                imgPath={item.imgPath}
                                isBlog={false}
                                title={item.title}
                                position={item.position}
                                description={item.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Activities;
