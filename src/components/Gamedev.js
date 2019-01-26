import React, { Component } from "react";
import styled from "styled-components";
import { ColorScheme } from "../theme/styleConstants";
import Vimeo from '@u-wave/react-vimeo';

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

const AppDetails = styled.div`
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 6vh;
  text-align: Left;
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


class Gamedev extends Component {
  render() {
    return (
    <div>
        <h1>VR game development</h1>  
        <br></br>
        <p>I mainly focused on VR game development</p>
        <br></br><br></br><br></br><br></br>
        
        <h3> VR Moral Game</h3>
        <br></br>
        {/*Row 1*/}
         <LifeRow className="row">
            <div className="col-md-6 col-sm-12">
            <a href="https://newagent-68db7.firebaseapp.com/">
            <LifeThumbnail src={require('../assets/vrmoral.JPG')}/>
            </a>
            </div>

            <div className="col-md-6 col-sm-12">
            <br></br>
            <p>A Moral Decision VR game</p>
            <br></br>
            <p>Techonlogies used: </p>
            <p>Unity3D, HTC Vive, C#</p>
          
            </div>
            </LifeRow>

            <br></br>

            {/*Row 2*/}
            <LifeRow className="row">
            <div className="col-md-12 col-sm-12">
            <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
            </div>
            </LifeRow>
            <LifeRow className="row">
            <div className="col-md-12 col-sm-12">
            <Vimeo video="https://player.vimeo.com/video/234782289?"/>
            </div>
            </LifeRow>

            <br></br><br></br><br></br>
            <hr></hr>
            <br></br><br></br><br></br><br></br>
        
            <h3>A Cat in a Room VR</h3>
            <br></br>
       {/*Row 3*/}
        <LifeRow className="row">
           <div className="col-md-6 col-sm-12">
           <a href="https://newagent-68db7.firebaseapp.com/">
           <LifeThumbnail src={require('../assets/vrcat.JPG')}/>
           </a>
           </div>
           <div className="col-md-6 col-sm-12">
           <p>An exploration game which is exhibited @gamezfestival</p>
           <p>Techonlogies used: Unity3D, HTC Vive</p>  
           </div>
           </LifeRow>

           <br></br>

          {/*Row 4*/}
          <LifeRow className="row">
           <div className="col-md-12 col-sm-12">
           <p> period: Sep 2017 - Oct 2017<br></br>
            What I did:<br></br>
            Design and develop the game<br></br>
            setting for the exibition at gamefestival<br></br>
            Libraries/tools:<br></br>
            setting for the exibition at <a href="http://www.gamezfestival.ch/">gamefestival</a><br></br>
            <a href="https://gbanga.com/2016/11/04/yujin-kim-exchange-game-developer-south-korea/">Related article</a>
            </p>
            </div>
            </LifeRow>
            <LifeRow className="row">
           <div className="col-md-12 col-sm-12">
           <AppDetails>
           <Vimeo video="https://player.vimeo.com/video/234780830?"/>
           </AppDetails>
           </div>
           </LifeRow>

           <br></br><br></br>
 
    </div>
    );
  }
}

export default Gamedev;
