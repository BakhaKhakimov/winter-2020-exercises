import React from 'react';
import './contact.css';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className={`contact__avatar contact__avatar--${this.props.gender}`}></div>
        <div className="contact__body">
          <div className="contact__name">
            {this.props.name}
          </div>
          <div className="contact__phone">
            {this.props.number}
          </div>
        </div>
        <button className="contact__callbtn"></button>
      </div>
    );
  }
};
