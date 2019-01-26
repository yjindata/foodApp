import React from "react";
import styled from 'styled-components';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./components/Home";
  import Portfolio from "./components/Portfolio";
  import Contact from "./components/Contact";
  import About from "./components/About";
  import Mobileapp from "./components/Mobileapp";
  import Gamedev from "./components/Gamedev";
  import Footer from "./components/Footer";

  const LifeRow = styled.div`
  margin: 20px -15px;
  @media (max-width: 768px) {
    
  }

`;

class Main extends React.Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
           {/*Row 1*/}
          <LifeRow className="row">

          <div className="col-md-2 col-sm-2"></div>

             <div className="col-md-2 col-sm-2">

            <li><NavLink exact to="/">Yujin</NavLink></li>
            </div>

            <div className="col-md-2 col-sm-2"></div>

            <div className="col-md-6 col-sm-6">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
           </div>
            </LifeRow>
          </ul>

          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>

            <Route path="/mobileapp" component={Mobileapp} /> 
            <Route path="/gamedev" component={Gamedev} />
          </div>
          <div >
          
          <Footer/>
          </div>
          </div>
        </HashRouter>
    );
  }
}
 
export default Main;