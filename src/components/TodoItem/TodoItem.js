import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {

  static click() {
    console.log('clicked on buttons');
  }

  render() {

    return (
      <div className="todoItem">
        <div className="iconDoneWrap"><i className="fa fa-check-square-o iconDone" /></div>
        <p className="title">Title</p>
        <p className="description">Description</p>
        <div className='container'>
          <span className='priority'>Priority</span>
          <button className='dotsButton' type='button' onClick={() => TodoItem.click()}>...</button>
        </div>
      </div>
    );
  }
}
