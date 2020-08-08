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
        <Redirect from={process.env.PUBLIC_URL} to={`${process.env.PUBLIC_URL}/blackman`} exact />
        <Route path={`/help-hes-wack/blackman`} exact component={Blackman} />
        <Route path={`/help-hes-wack/policy`} exact component={Policy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;