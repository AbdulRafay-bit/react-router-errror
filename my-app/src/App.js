import React from "react";
// import Style from './Style'
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import {BrowserRouter as Router ,    Route, Link} from 'react-router-dom'
// import Menue from './menue'
export default class App extends React.Component{
    render(){
            return (
        <div>
            <Router>

            <Link to="">Home</Link>
            <Link to ="/About">about</Link>
            <Link to ="/Contact">Contact</Link>

            <Route path="" component=   {Home}/>
            <Route path="/about" component={About}/>
           <Route path="/Contact" component={Contact}/>

            

            </Router>
    
            
        </div>
    );
}}