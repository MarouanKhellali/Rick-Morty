import './App.css'
import axios from "axios"
import React from 'react';

import logo from "./assets/logo.png";
import Feed from './component/Feed';
function App() {
  
  return (
    
    <div className="App">
    <img style={{borderRadius:"100%",width:"68px",height:"68px",objectFit:"cover" }} src={logo} />
   <Feed/>
    </div>
  );
}

export default App;
