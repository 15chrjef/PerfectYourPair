import React from 'react';
import { Button } from 'react-bootstrap';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      classy: 'profile'
    };
  }
  GoAway() {
    var self = this;
    this.setState({
      classy: 'gone'
    });
    console.log(this.state);
    setTimeout(function() {
      self.setState({
        classy: 'none'
      });
    }, 1200);
    console.log(this.state);
  }
  render() {
    return (
      <div className={this.state.classy} key={this.props.keys}>
        <h3>{this.props.name}</h3>
        <div className='profInner'>
          <img className='pic' src={this.props.picture}/>
          <div className='textb'>{this.props.bio}</div>
        </div>
        <div className='btnDiv'>
          <Button 
            onClick={this.GoAway.bind(this)} 
            bsSize="large" 
            bsStyle="primary" 
            >Let's Pair
          </Button>
          <Button 
            onClick={this.GoAway.bind(this)} 
            bsSize="large" 
            bsStyle="default" 
            >No Thanks
          </Button>
        </div>
      </div>
    );
  }
}