import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const store = configureStore();
class App extends Component {
    render() {

        return (
            <Provider store={store}>      
                <BrowserRouter>
                <Header />
                    <TransitionGroup>
                        <CSSTransition classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path='/home' component={HomePage} />
                                <Route exact path='/about' component={AboutPage} />
                                <Route exact path='/education' component={EducationPage} />
                                <Route exact path='/contact' component={Contact} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;