import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blackman from './components/Blackman';
import Footer from './components/Footer';
import Policy from './components/Policy';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect from='/' to='/blackman' exact />
        <Route path='/blackman' exact component={Blackman} />
        <Route path='/policy' exact component={Policy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;