import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle, CardFooter, CardHeader  } from 'reactstrap';
class Education extends Component {
    render() {
        const {major, name, date, description } = this.props.education
        return (
            <div className="col m-3">
                <Card>
                <CardHeader className="card-title">
                    {name}
                </CardHeader>
                <CardBody>
                    <CardTitle>{major}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
                <CardFooter className="footer-date">
                    <h6>{date}</h6>
                </CardFooter>
                </Card>
            </div>
        )
    }
}

export default Education
