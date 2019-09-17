import React from 'react';
import Navbar from './Component/Navbar'
import Summry from './Component/projectsummry'
import Catgory from './Component/catgory.js'
import Footer from './Component/saw'

import './App.css';

class App extends React.Component {
  render(){
  return (
    
    <div className="App">   
        <Navbar />  
        <Catgory />

        <Summry />
        <Footer />
          
    </div>
    
  );
}
}
export default App;
