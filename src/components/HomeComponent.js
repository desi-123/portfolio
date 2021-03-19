import React, { Component } from 'react'
import { Card, CardGroup, CardImg, CardText, 
    CardBody, CardTitle, CardFooter, CardHeader } from 'reactstrap';

class Home extends Component {

    render() { 
        const {image, description, title, position, phone, date, name} = this.props.home
        return (
            <CardGroup>
                <Card>
                    <CardHeader className="card-title">{name}</CardHeader>
                        <CardImg src={image} alt="homeImage" className="img-portfolio img-fluid" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                            <CardText>
                            {description}
                            </CardText>
                        <CardText className="position">Position: {position}</CardText>
                        <CardText className="position">Phone: {phone}</CardText>
                    </CardBody>
                    <CardFooter className="footer-date">
                        <h6 className="date">Date: {date}</h6>
                    </CardFooter>
                </Card>
            </CardGroup>
        )
    }
}


export default Home;