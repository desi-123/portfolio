import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
class Education extends Component {
    render() {
        const {major, name, school, date, description } = this.props.education
        return (
            <div className="col">
                <Card>
                <CardBody>
                <h4>{school}</h4>
                <h4>{major}</h4>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <h5>{date}</h5>
                </CardBody>
                </Card>
            </div>
        )
    }
}

export default Education
