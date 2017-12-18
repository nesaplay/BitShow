import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './containers/Main';
import MovieDetails from './containers/MovieDetails';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className='page-flexbox-wrapper'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/:id' component={MovieDetails} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
