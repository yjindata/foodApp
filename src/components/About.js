import React, { Component } from "react";
import styled from 'styled-components';


const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 16em;
    height: 16em;
    margin-left:auto;
    margin-right:auto;
    display: block;
  }
`;


const LifeRow = styled.div`
  margin: 20px -15px;

`;

class About extends Component {
  render() {
    return (
    
      <div>
         {/*Row 1*/}
        <LifeRow className="row">
        <div className="col-md-1 col-sm-12"></div>
        <div className="col-md-2 col-sm-12">
        <ProfileImage src={require('../assets/yj_pic.png')} alt='yujin kim'/>
        </div>
        <div className="col-md-1 col-sm-12">
        </div>
        
        <div className="col-md-8 col-sm-12">
        <br></br><br></br>
        <p> Yujin Kim</p>
     
        <br></br>
      
        <li>Frontend Developer</li>
        <li>Fmr. Researcher for AI VR/VR Lab (2.5 yrs)</li>
        <li>Fmr. Game Developer (1 yr)</li>
        <li>Presented 1 poster and 1 paper at an international academic conference</li>
      
        <br></br>
        <p>Current skill set</p>
        <li>Frontend: JavaScript, React, Node.js, HTML5, CSS3 </li>
        <li>Backend: Node.js, Express, MySQL, MongoDB, Firebase</li>
        <li>Soft Skills: Teamwork, Written, and verbal communication, documentation</li>
        <li>Others: Git, Agile, Jest, JIRA, Unity3D, VR/AR, Enzyme</li>
        <br></br>
        <p>Besides</p>
        <li>Book lover</li>
        <li>Mindfulness</li> 
   
      </div>
      </LifeRow>
      </div>
    );
  }
}
 
export default About;