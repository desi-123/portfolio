import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Education from '../components/EducationComponent'
import { Loading } from '../components/LoadingComponent';
import { fetchEducation } from '../redux/ActionCreators';



class EducationPage extends Component {

    componentDidMount() {
        this.props.fetchEducation();
    }

    render() {
        const {isLoading, errMess} = this.props.education
        if (isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        if (errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>{errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
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
                <div className="container my-3">
                    {this.props.education.education.map(item => (
                        <div className="row">
                            <Education key={item.id} education={item} />
                        </div>
                    ))}
                </div>
                <div className="container">
                <h2><strong>My Skills</strong></h2>
                <hr/>
                <h2>HTML 5</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '100%'}} >
                    </div>
                </div>
                <hr/>
                <h2>CSS 3</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '99%'}} >
                    </div>
                </div>
                <hr/>
                <h2>JAVASCRIPT</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '98%'}} >
                    </div>
                </div>
                <hr/>
                <h2>NODEJS</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '97%'}} >
                    </div>
                </div>
                <hr/>
                <h2>C++</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '70%'}} >
                    </div>
                </div>
                <hr/>
                <h2>PYTHON</h2>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{width: '50%'}} >
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        education: state.education
    }
}

const mapDispatchToProps = {
    fetchEducation: () => (fetchEducation())
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage)