import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../common/Header';
import Main from '../main/Main';
import Footer from '../common/Footer';
import MovieDetails from '../movie/MovieDetails';
import '../css/App.css';

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
