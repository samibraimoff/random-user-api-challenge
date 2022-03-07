import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import About from './pages/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='container d-flex flex-column h-100  justify-content-between'>
          <Header />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
