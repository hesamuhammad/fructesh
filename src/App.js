import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';



function App() {
  return (
<<<<<<< HEAD
      <Router>
          <Header/>
          <Switch>
          <Route exact path="/home">
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
          <Route exact path="/contact">
            <Contact/>
          </Route>
          </Switch>
      </Router>
=======
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/about">
          <Team />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
>>>>>>> f13a67a48fa6c0fa7415c083ee6a2a7218a05bc1
  );
}

export default App;
