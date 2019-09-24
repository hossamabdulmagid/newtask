import React from 'react';
import Navbar from './Component/Navbar'
import Footer from './Component/saw'
import About from './Component/About'
import Cat from './Component/Cat'

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render(){
  return (
<BrowserRouter>
    <div className="App">
         
        <Navbar />  
        
        <Cat />

        <Footer />
        <Switch>
        <Route   path='/About' component={About} />

        </Switch>

    </div>

    </BrowserRouter>

  );
}
}
export default App;
