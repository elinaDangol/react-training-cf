import React from 'react';

export default class NameLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1> {this.props.name1}</h1>
    )

  }
}

