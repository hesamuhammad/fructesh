import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer'

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts'
// import Copyright from './components/Copyright';

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/team">
            <Team/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/contacts">
            <Contacts/>
          </Route>
          </Switch>
          {/* <Footer/>
          <Copyright/> */}
    </Router>
  );
}

export default App;
