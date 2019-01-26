import React, { Component } from "react";
import styled from 'styled-components';
import { ColorScheme } from "../theme/styleConstants";

export const PortButton = styled.a`
  padding: 10px 10px;
  background: 0 0;
  text-decoration: none;
  border: 1px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-weight: 200;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background:  #454649;
    color: white;
    border-color:  white;
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
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

const ProjectName = styled.h4`
  color: #343a40;
  font-weight: bold;
  font-size: 1.5em;
`;

const AppDetails = styled.div`
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 6vh;
  text-align: Left;
`;


const LifeRow = styled.div`
  margin: 20px -15px;

`;


class HomeProjects extends Component {

  render() {
    return (
      <div>

        <h1>Projects.</h1>
        <br></br>
          <br></br>
        {/*Row 1*/}
         <LifeRow className="row">
            <div className="col-md-6 col-sm-12">
            <a href="https://newagent-68db7.firebaseapp.com/">
            <LifeThumbnail src={require('../assets/img_food.png')}/>
            </a>
            </div>

            <div className="col-md-6 col-sm-12">
            <AppDetails>
            <ProjectName>SportsAnalyze</ProjectName>
            <br></br>
            <p>This is an app for visualizing dart score</p>
            <br></br>
            <p>Techonlogies used: React | D3.js | MongoDB | Styled component</p>
           
            <a href="https://newagent-68db7.firebaseapp.com/">Live</a> | <a href="https://github.com/yujkim/analyticApp/">Github</a>
       
            
            </AppDetails>
            </div>
            </LifeRow>

            <br></br><br></br><br></br>

            {/*Row 2*/}
            <LifeRow className="row">
             <div className="col-md-6 col-sm-12">
             <a href="https://fotoapp.netlify.com/">
             <LifeThumbnail src={require('../assets/img_photo.png')}/>
             </a>
            </div>
             <div className="col-md-6 col-sm-12">

          <AppDetails>
          <ProjectName>PhotoApp</ProjectName>
          <br></br>
          <p>This is an app for a photographer which can upload high-quality street photo. Supported user’s location which the photo was taken by.</p>
          <br></br>
          <p>Techonlogies used: MongoDB | React | Node.js | Styled component</p>
      
          <a href="https://fotoapp.netlify.com/">Live</a>  |  <a href="https://github.com/yujkim/photoApp/">Github</a>
        
          </AppDetails>
          </div>
          </LifeRow>

          <br></br><br></br><br></br>

          {/*Row 3*/}
         <LifeRow className="row">
          <div className="col-md-6 col-sm-12">
          <a href="https://yoyofood.netlify.com/">
          <LifeThumbnail src={require('../assets/img_food.png')}/>
          </a>
          </div>
             <div className="col-md-6 col-sm-12">
             <AppDetails>
             <ProjectName>Cook App</ProjectName>
            <p>A recipe blog which can upload food recipe. </p>
            <br></br>
            <p>Techonlogies used: </p>
            <p>MongoDB, React, Node.js, Styled component</p> 
           <a href="https://yoyofood.netlify.com/">Live</a>  |  <a href="https://github.com/yujkim/foodApp/">Github</a>      
            </AppDetails>
            </div>
            </LifeRow>
            <br></br>
            <br></br>     
          <hr />

       
      </div>
    );
  }
}
 
export default HomeProjects;