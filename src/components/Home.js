import React, { Component } from "react";
import styled from 'styled-components';
import HomeContact from './HomeContact';
import HomeProjects from './HomeProjects';
import HomeOthers from './HomeOthers';

export const PortButton = styled.a`

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const Introduce = styled.div`
  font-size: 1em;
  padding-bottom: 5vh;
`;

class Home extends Component {

  render() {
    return (
      <div>

        <Introduce>
        <h1>Hey, My name is Yujin. I'm full-stack web developer.</h1><br></br>
        <p>I have an intensive experience with developing a website using React, JavaScript, HTML5/CSS3. <br></br>Currently, I am doing full stack development with my personal projects.</p>
        <p> Previously, I've been researching related Virtual Reality, Augmented Reality and Natural Language Processing.</p>
        </Introduce>
        <center><a href="#/about">About me</a></center>
        <br></br>
        <br></br>
        <hr />


        <HomeProjects/>
          <HomeOthers />
          <HomeContact/>
      </div>
    );
  }
}
 
export default Home;