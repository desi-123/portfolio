import React, { Component } from 'react'
import { CardImg } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import About from '../components/AboutComponent';
import { addAbout } from '../redux/ActionCreators';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="red my-3">
                            <CardImg src='assets/images/desProfile.jpg' alt="my photo"  />
                        </div>
                </div>
                <div className="container">
                    <div className="row row-content align-items-center">
                        {this.props.About.map(item => (
                            <div className="col-md-7">
                                <About about={item} />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        About: state.about
    }
}

const mapDispatchToProps = {
    addAbout: (image, description, title, name) => (addAbout(image, description, title, name))
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)