import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Education from '../components/EducationComponent'
import { addEducation } from '../redux/ActionCreators';



class EducationPage extends Component {
    constructor(props) {
        super(props)
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
                            <BreadcrumbItem active>Education</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>My Educational Background Achieved so far</h2>
                        <hr />
                    </div>
                </div>
                <div className="container my-4">
                    {this.props.Education.map(item => (
                        <div className="row">
                            <Education education={item} />
                        </div>
                    ))}
                </div>
                <div className="container">
                <h3><strong>My Skills</strong></h3>
                <hr/>
                <h4>HTML 5</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '100%'}} >
                    </div>
                </div>
                <hr/>
                <h4>CSS 3</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '99%'}} >
                    </div>
                </div>
                <hr/>
                <h4>JAVASCRIPT</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '98%'}} >
                    </div>
                </div>
                <hr/>
                <h4>NODEJS</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '97%'}} >
                    </div>
                </div>
                <hr/>
                <h4>C++</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '70%'}} >
                    </div>
                </div>
                <hr/>
                <h4>PYTHON</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-primary" style={{width: '50%'}} >
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Education: state.education
    }
}

const mapDispatchToProps = {
    addEducation: (major, name, school, date, description) => (addEducation(major, name, school, date, description))
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage)