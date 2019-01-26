import React, { Component } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
  height: 3rem;
  font-size: 1.5em;


`;


class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row" id="copyright" style={{ margin: 0 }}>
            
              <div className="col-lg-12">
              
              <p className="small">© Copyright 2019. All Rights Reserved.</p>
            </div>
          </div>  
      </FooterDiv>
        );
  }
}

export default Footer;
