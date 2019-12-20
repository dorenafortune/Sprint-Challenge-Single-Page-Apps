import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
// import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import Nav from "./components/Nav"



export default function App() {
  return (
  
    
    
    <div className ="App">
      <Nav/>
      
      <Header />
      
     <Route exact path ="/" component={WelcomePage}/>

      <Route path = "/characters" component={CharacterList}/>
      
  

  </div> )
  
}
