import React, { Component } from 'react';
import { Form } from '../Form/Form';
import './Filters.module.scss';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }

  render() {
    const { isToggleOn } = this.state;

    return (
      <div>
        <button type='button' onClick={this.handleClick}>
          {!isToggleOn ? "Create" : "Close"}
        </button>
        {/* {isToggleOn ? <Form/> : "none"} */}
        {isToggleOn && <Form/> }

      </div>

    );
  }
}

export default Filters;