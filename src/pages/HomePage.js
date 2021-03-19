import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/HomeComponent'
import { addHome } from '../redux/ActionCreators'


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
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
                    {this.props.Home.map(item => ( 
                        <div className="col-md-5 m-3">
                        <Home key={item.id} home={item} />
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
        Home: state.home
    }
}

const mapDispatchToProps = {
    addHome: (image, description, title, name) => (addHome(image, description, title, name))
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
