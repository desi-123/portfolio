import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/HomeComponent'
import { Loading } from '../components/LoadingComponent';
import { fetchHome } from '../redux/ActionCreators'


class HomePage extends Component {

    componentDidMount() {
        this.props.fetchHome();
    }
    render() {
        const {isLoading, errMess} = this.props.home
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
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Welcome To My Homepage</h2>
                            <hr/>
                        </div>
                        <h2 className="my-3">What Have I Achieved so far with the Following Institutions?</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row"> 
                    {this.props.home.home.map(item => ( 
                        <div className="col-md-5 m-3">
                        <Home key={item.id} home={item} 
                        />
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = {
    fetchHome: () =>(fetchHome())
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
