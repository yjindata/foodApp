import React, { Component } from "react";
import styled from "styled-components";
import { ColorScheme } from "../theme/styleConstants";


export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;
const LifeRow = styled.div`
  margin: 20px -15px;

`;

const LifeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    opacity: 0.7;
    transition: all .5s ease;
`;
const AppDetails = styled.div`
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 6vh;
  text-align: Left;
`;

class Mobileapp extends Component {
  render() {
    return (
    <div>
 <h1>Android app development</h1>  
        <br></br>
        <p>When i take a classes, I had a mobile programming course as well as user interface and processing.</p>

        <br></br><br></br><br></br><br></br>
        
        <h3>Quiz App</h3>
        <br></br>
        {/*Row 1*/}
         <LifeRow className="row">
            <div className="col-md-5 col-sm-12">
            <LifeThumbnail src="https://source.unsplash.com/user/erondu/"/>
            
            </div>

            <div className="col-md-7 col-sm-12">
            <AppDetails>
            <p>Period: Jun. 2018 </p>
            <p>What I did: </p>
            <li>Bring </li>
            <br></br>
            <p>Libraries/tools</p>
            <li>Android studio(Kotlin)</li>
            <li>Open Trivia database API</li>
            </AppDetails>
            </div>
            </LifeRow>

            <br></br><br>
            
            </br><br></br>
            <h3>Movie Info App</h3>
           <br></br>
            {/*Row 2*/}
            <LifeRow className="row">
            <div className="col-md-6 col-sm-12">
            <LifeThumbnail src="https://source.unsplash.com/user/erondu/"/>
            </div>
            <div className="col-md-6 col-sm-12">
            <p>Period: 2017. 12</p>
            <p>What I did: </p>
            <li>json connection with api</li>
            <li>develope</li>
            <li>develope</li>
            <li>REST API(get), http request</li>
            <br></br>
            <p>Libraries/tools</p> 
            <li>Android Studio(Kotlin)</li>
            <li>movieAPI</li>       
            </div>
            </LifeRow>
            <br></br><br>
            
            </br><br></br>
            <h3>Quiz Generator</h3>
           <br></br>
            {/*Row 3*/}
            <LifeRow className="row">
            <div className="col-md-6 col-sm-12">
            <LifeThumbnail src="https://source.unsplash.com/user/erondu/"/>
            </div>
            <div className="col-md-6 col-sm-12">
            <p>Period: 2018. 12</p>
            <p>What I did: </p>
            <li>json connection with api</li>
            <li>develope</li>
            <li>develope</li>
            <li>REST API(get), http request</li>
            <br></br>
            <p>Libraries/tools</p> 
            <li>Android Studio(Kotlin)</li>
            <li>movieAPI</li>       
            </div>
            </LifeRow>


            <br></br><br></br><br></br>
            <hr></hr>
            <br></br>

            </div>
    );
  }
}

export default Mobileapp;
