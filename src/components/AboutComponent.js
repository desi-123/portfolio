import React, { Component } from 'react'

class About extends Component {
    render() {
        const {title,description, plan } = this.props.about
        return (
            <article>
                <h2>
                    {title}
                </h2>
                <hr/>
                <p>
                    {description}
                </p>
                <p>
                    {plan}
                </p>
            </article>
        )
    }
}

export default About
