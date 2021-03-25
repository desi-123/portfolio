import React, { Component } from 'react'
import { CardImg } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import About from '../components/AboutComponent';
import { fetchAbout } from '../redux/ActionCreators';
import { Loading } from '../components/LoadingComponent';

class AboutPage extends Component {

    componentDidMount() {
        this.props.fetchAbout();
    }

    render() {
        const {isLoading, errMess} = this.props.about
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
                        {this.props.about.about.map(item => (
                            <div className="col-md-7">
                                <About key={item.id} about={item} />
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
        about: state.about
    }
}

const mapDispatchToProps = {
    fetchAbout: () => (fetchAbout())
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)