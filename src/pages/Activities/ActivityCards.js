import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCards(props) {
    return (
        <Card className='project-card-view'>
            <Card.Img variant='top' src={props.imgPath} alt='card-img' />
            <Card.Body>
                <Card.Title style={{ fontSize: 24 }}>{props.title}</Card.Title>
                <p style={{ color: '#f4f4f4', fontSize: 20 }}>{props.position}</p>
                <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
                {/* <Button variant='primary' href={props.ghLink} target='_blank'>
                    <BsGithub /> &nbsp;
                    {props.isBlog ? 'Blog' : 'GitHub'}
                </Button> */}
                {'\n'}
                {'\n'}
                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
                {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
