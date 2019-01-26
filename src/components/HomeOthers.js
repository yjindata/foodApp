import React, { Component } from "react";
import styled from 'styled-components';

export const PortButton = styled.a`

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const LifeRow = styled.div`
  margin: 20px -15px;

`;


class HomeOthers extends Component {

  render() {
    return (
      <div>
        
          <h1>Others.</h1>
          <br></br>
          <br></br>
          <p>Besides web developemt, I have also experience with game and android development.</p>
          <br></br>
  
           {/*Row 1*/}
           <LifeRow className="row">
            <div className="col-md-12 col-sm-12">
            <a href="#/gamedev">Game development</a>
            <p> this is sample text</p>
            </div>
            </LifeRow>
   
            {/*Row 2*/}
            <LifeRow className="row">

            <div className="col-md-12 col-sm-12">
            <a href="#/mobileapp">Android development</a>
            <p> this is sample text</p>
            </div>
          </LifeRow>
        
        <br></br>
        <br></br>     
        <hr />
        <br></br>
        <br></br>

      </div>
    );
  }
}
 
export default HomeOthers;