import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
          <h1>User Id :{this.props.userId}</h1>
      <h3>Name: {this.props.name},Course:{this.props.course}</h3>
      </div>
    );
  }
}
