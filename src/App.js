import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, } from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
      </Switch>
    </Router>
  );
}

export default App;
