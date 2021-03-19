import React, { Component } from 'react'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        portfolio: state.portfolio
    }
}

class Main extends Component {

    render() {
        
    const HomePage = () => {
        return (
            <Home 
                portfolio={this.props.portfolio.filter(port => port.featured)[0]}
            />
        );
    };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main))
