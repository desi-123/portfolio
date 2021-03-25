import React from 'react'
import { FadeTransform } from 'react-animation-components';
import { Card, CardGroup, CardImg, CardText, 
    CardBody, CardTitle, CardFooter, CardHeader } from 'reactstrap';

function Home({ home }) {
    return (
        <FadeTransform
        in
        transformProps={{
            enterTransform: 'translateX(5px)',
        }}>
            <CardGroup>
                <Card>
                    <CardHeader className="card-title">{home.name}</CardHeader>
                        <CardImg src={home.image} alt="homeImage" className="img-portfolio img-fluid" />
                    <CardBody>
                        <CardTitle>{home.title}</CardTitle>
                            <CardText>
                            {home.description}
                            </CardText>
                        <CardText className="position">Position: {home.position}</CardText>
                        <CardText className="position">Phone: {home.phone}</CardText>
                    </CardBody>
                    <CardFooter className="footer-date">
                        <h6>Date: {home.date}</h6>
                    </CardFooter>
                </Card>
            </CardGroup>
        </FadeTransform>
    )
}


export default Home;