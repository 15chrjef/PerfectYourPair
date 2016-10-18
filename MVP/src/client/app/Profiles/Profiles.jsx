import React from 'react';
import Profile from './Profile.jsx';
import Search from './Search.jsx';

export default class Profiles extends React.Component {
  render() {

    return (
      <div>
        <Search change={this.props.change}/>
        {this.props.people.map(function(person, i) {
          return ( 
            <Profile 
              key={i} 
              name={person.name} 
              bio={person.bio} 
              picture={person.picture}
            /> 
          );
        })}
      </div>
    );
  }
}