import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Navigation from './Navigation.jsx';
import Form from './Form.jsx';

export default class Header extends React.Component {
  render() {
    var style = {
      'textAlign': 'center'
    };
    return (
      <div>
        <Navigation/>
        <h2 style={style}>Add Yourself!</h2>
        <Form handleSubmit={this.props.handleSubmit}/>
      </div>
    );
  }
}