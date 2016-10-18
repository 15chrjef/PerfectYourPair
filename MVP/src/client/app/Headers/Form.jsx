import React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import { Select } from 'react-bootstrap-select';

export default class Form extends React.Component {
  render() {
    return (
      <div className='header'>
        <form onSubmit={this.props.handleSubmit}>
          <Navbar.Form >
            <FormGroup >
              <FormControl className='glow' type="text" name="namssde" placeholder="Name"/>
              <FormControl className='glow' type="text" name="bio" placeholder="Bio"/>
              <FormControl className='glow' type="text" name="picture" placeholder="Picture"/>
              <select className='selecty glow' name='style' placeholder='style'>
                  <option defaultValue="selected">Select Me!</option>
                  <option value='conjurer'>Conjurer</option>
                  <option value='scribe'>Scribe</option>
              </select>
            </FormGroup>
          </Navbar.Form>
          <FormControl className='submit' type="submit" name="submit"/>
        </form>
      </div>
    );
  }
}