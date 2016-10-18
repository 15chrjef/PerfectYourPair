import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <h2 className='header'> Who are you looking for?</h2>
        <form className="selecty" onChange={this.props.change}>
          <select className='glow' name='style' placeholder='style'>
            <option defaultValue="selected">Select Me</option>
            <option value='scribe'>Scribe</option>
            <option value='conjurer'>Conjurer</option>
          </select>
        </form>
      </div>
    );
  }
}