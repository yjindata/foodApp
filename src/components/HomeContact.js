import React, { Component } from "react";
import styled from 'styled-components';

const FAIcon = styled.i`
color: #343a40;

&:hover {
    color: #343a40;
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
        float: left;
`;

const ContactStyle = styled.div`
    text-align: center
`;

export default class HomeContact extends Component {
  render() {
    return (
      <div>
          <ContactStyle>
        <h1>Contact.</h1>
          <br></br>
          <br></br>
          
          <p>Feel free to get in touch with me!</p>
          
      <SocialIconList>
       <SocialIcon><a href="mailto:yjkim2217@gmail.com"><FAIcon className="far fa-envelope fa-fw fa-2x" /></a></SocialIcon>
       <SocialIcon><a href="http://www.linkedin.com/in/yjindata"><FAIcon className="fab fa-linkedin fa-fw fa-2x" /></a></SocialIcon>
       <SocialIcon><a href="https://github.com/yjindata"><FAIcon className="fab fa-github fa-fw fa-2x" /></a></SocialIcon>
       <SocialIcon><a href="https://twitter.com/yjindata"><FAIcon className="fab fa-twitter fa-fw fa-2x" /></a></SocialIcon>
       <SocialIcon><a href="../cv_yj_190119.pdf"><FAIcon className="far fa-file-pdf fa-fw fa-2x" /></a></SocialIcon>

     </SocialIconList>    

     </ContactStyle>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       
      </div>
    )
  }
}
