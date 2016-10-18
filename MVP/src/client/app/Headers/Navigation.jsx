import React from 'react';
import { Nav, NavItem, Navbar, FormControl, FormGroup, Button } from 'react-bootstrap';

export default class Navigation extends React.Component {
  render() {
    return (
        <Navbar className='header'>
          <Nav bsStyle="pills" activeKey={1} >
            <NavItem eventKey={1} href="/home">Home</NavItem>
            <NavItem eventKey={2} title="Item">Profile</NavItem>
            <NavItem eventKey={3} >Messages</NavItem>
          </Nav>
          <form onSubmit={this.props.handleSubmit}>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl className='glow' type="text" name="Username" placeholder="Username" />
                <FormControl className='glow' type="text" name="Password" placeholder="Password" />
                <FormControl className='submit' type="submit" name="submit"/>
              </FormGroup>
            </Navbar.Form>
          </form>
        </Navbar>
    );
  }
}