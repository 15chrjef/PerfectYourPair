import React from 'react';
import {render} from 'react-dom';
import Header from './Headers/Header.jsx';  
import Profiles from './Profiles/Profiles.jsx';
import axios from 'axios';
import images from './images.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [{
        name: '',
        bio: '',
        picture: ''
      }],
      picture: ''
    };
  }
  componentDidMount() {
    var self = this;
    axios.get('/api')
      .then(function(response) {
        console.log(response.data);
        self.setState({
          people: response.data
        });
      })
      .catch(function(err) {
        console.log(err);
      });
    // images.forEach(function(person) {
    //   var name = person.name;
    //   var bio = person.bio;
    //   var picture = person.picture;
    //   var style = person.style;
    //   var obj = {
    //     name: name,
    //     bio: bio,
    //     picture: picture,
    //     style: style
    //   };

    //   axios.post('/api', obj)
    //   .then(function(response) {
    //     console.log('photoTransfer complete!' + response);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    // });
  }
  handleChange(e) {
    var style = e.target.value;
    var self = this;
    
    axios.get('/api/:' + style)
    .then(function(response) {
      console.log('style', style);
      self.setState({
        people: response.data
      });
    })
    .catch(function(err) {
      console.log(err);
    });

    this.forceUpdate();
  }
  handleSubmit(e) {
    e.preventDefault();
    var name = e.target.name.value;
    var bio = e.target.bio.value;
    var picture = e.target.picture.value;
    var style = e.target.style.value;
    axios.post('/api', {
      name: name,
      bio: bio,
      picture: picture
    })
    .then(function(response) {
      console.log('successfulPost:' + response);
    })
    .catch(function(error) {
      console.log(error);
    });

    axios.get('/api')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render () {
    return (
      <div className='border'>
        <Header handleSubmit={this.handleSubmit}/>
        <Profiles change={this.handleChange.bind(this)} people={this.state.people}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));