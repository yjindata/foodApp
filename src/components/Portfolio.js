import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardDeck, CardSubtitle} from 'reactstrap';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>

        <CardDeck>
      <Card>
        <CardImg top width="100%" src={require('../assets/img_analytic.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>Sport App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
         <center> 
            <a href="https://newagent-68db7.firebaseapp.com/" className="btn btn-secondary" role="button" aria-pressed="true">View Live</a>
            <a href="https://github.com/yujkim/analyticApp/" className="btn btn-secondary" role="button" aria-pressed="true">View Github</a>
        </center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require('../assets/img_photo.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>Photo App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          
          <center> 
            <a href="https://5c41302eb5475e654a0209f2--fotoapp.netlify.com/" className="btn btn-secondary" role="button" aria-pressed="true">View Live</a>
            <a href="https://github.com/yujkim/photoApp/" className="btn btn-secondary" role="button" aria-pressed="true">View Github</a>
        </center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require('../assets/img_food.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>Cook App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <center> 
            <a href="https://5c41325a536e2f4d12071693--yoyofood.netlify.com" className="btn btn-secondary" role="button" aria-pressed="true">View Live</a>
            <a href="https://github.com/yujkim/foodApp/" className="btn btn-secondary" role="button" aria-pressed="true">View Github</a>
        </center>
        </CardBody>
      </Card>
    </CardDeck>

    <br></br>
<br></br>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={require('../assets/img_portfolio.png')} alt="Card image cap" />
        <CardBody>
          <CardTitle>This App</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <center> 
            <a href="/" className="btn btn-secondary" role="button" aria-pressed="true">View Live</a>
            <a href="/" className="btn btn-secondary" role="button" aria-pressed="true">View Github</a>
        </center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require('../assets/vrcat.JPG')} alt="Card image cap" />
        <CardBody>
          <CardTitle>Android(kotlin)
          </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <center> 
            <a href="#/mobileapp" className="btn btn-secondary" role="button" aria-pressed="true">Read more</a>
        </center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require('../assets/vrmoral.JPG')} alt="Card image cap" />
        <CardBody>
          <CardTitle>Game development</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <center> 
            <a href="#/gamedev" className="btn btn-secondary" role="button" aria-pressed="true">Read more</a>
        </center>
        </CardBody>
      </Card>
    </CardDeck>
       </div>
    );
  }
}

export default Portfolio;
//{require('../assets/vrcat.JPG')}/></div>
/*      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
*/